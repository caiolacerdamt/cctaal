import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Types
interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const ChatWidget = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // Initial message state
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: t('chat_widget.initial_message'), sender: 'bot' }
    ]);

    // Update initial message when language changes, ONLY if it's still the only message (user hasn't interacted)
    useEffect(() => {
        if (messages.length === 1 && messages[0].id === 1 && messages[0].sender === 'bot') {
            const newText = t('chat_widget.initial_message');
            if (messages[0].text !== newText) {
                setMessages([{ id: 1, text: newText, sender: 'bot' }]);
            }
        }
    }, [t, i18n.language, messages]);

    // Reset handler needs to use current language t()

    const [isTyping, setIsTyping] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Update initial message when language changes if the chat hasn't started? 
    // Or just accept mixed language if they switch midway. Accepting mixed is fine.

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping, isOpen, showSuggestions]);

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMessages([{ id: Date.now(), text: t('chat_widget.initial_message'), sender: 'bot' }]);
        setShowSuggestions(true);
        setIsTyping(false);
    };

    const questionKeys = [
        'chat_widget.questions.membership',
        'chat_widget.questions.commodities',
        'chat_widget.questions.innovation'
    ];

    const handleSendMessage = (questionKey: string) => {
        if (isTyping) return;

        // Hide suggestions once an option is chosen
        setShowSuggestions(false);

        let botResponseKey = "";

        // Logic based on keys
        switch (questionKey) {
            case 'chat_widget.questions.membership':
                botResponseKey = 'chat_widget.responses.membership';
                break;
            case 'chat_widget.questions.commodities':
                botResponseKey = 'chat_widget.responses.commodities';
                break;
            case 'chat_widget.questions.innovation':
                botResponseKey = 'chat_widget.responses.innovation';
                break;
            default:
                botResponseKey = 'chat_widget.responses.default';
        }

        // Add User Message (Translated text)
        const newMessage: Message = { id: Date.now(), text: t(questionKey), sender: 'user' };
        setMessages(prev => [...prev, newMessage]);

        // Simulate Typing
        setIsTyping(true);

        // 1. Initial Response
        setTimeout(() => {
            const botMessage: Message = { id: Date.now() + 1, text: t(botResponseKey), sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);

            // 2. Follow-up "Loop"
            setTimeout(() => {
                const followUp: Message = { id: Date.now() + 2, text: t('chat_widget.responses.follow_up'), sender: 'bot' };
                setMessages(prev => [...prev, followUp]);
                setIsTyping(false);
                setShowSuggestions(true);
            }, 1000); // 1s delay after answer

        }, 1500); // 1.5s typing delay
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] overflow-hidden border border-gray-100 mb-4"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#4a662d] to-[#3b5224] p-5 shadow-md flex justify-between items-center text-white relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight tracking-wide">{t('chat_widget.header.title')}</h3>
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                                        <span className="text-xs font-medium">{t('chat_widget.header.subtitle')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleReset}
                                    className="hover:bg-white/10 p-2 rounded-full transition-colors duration-200"
                                    title={t('chat_widget.tooltips.reset')}
                                >
                                    <RefreshCcw className="w-5 h-5 text-white/90" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-white/10 p-2 rounded-full transition-colors duration-200"
                                    aria-label={t('chat_widget.tooltips.close')}
                                >
                                    <X className="w-5 h-5 text-white/90" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div ref={scrollRef} className="h-[450px] overflow-y-auto p-5 bg-gray-50 flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                            ? 'bg-[#4a662d] text-white rounded-br-none shadow-md'
                                            : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none shadow-[0_2px_4px_rgba(0,0,0,0.02)]'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* Inline Suggestions */}
                            <AnimatePresence>
                                {showSuggestions && !isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col gap-2 mt-2 ml-1"
                                    >
                                        <span className="text-xs text-gray-400 font-medium ml-2 mb-1">{t('chat_widget.suggestions.title')}</span>
                                        {questionKeys.map((qKey, idx) => (
                                            <button
                                                key={idx}
                                                // Pass the KEY to handleSendMessage
                                                onClick={() => handleSendMessage(qKey)}
                                                className="text-left text-sm py-2 px-4 rounded-full border border-[#7c522e] text-[#7c522e] bg-transparent hover:bg-[#7c522e] hover:text-white transition-all duration-300 self-start shadow-sm active:scale-95"
                                            >
                                                {/* Translate the key for display */}
                                                {t(qKey)}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5 h-12">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Locked Footer */}
                        <div className="p-4 bg-white border-t border-gray-100 z-20">
                            <div className="relative group cursor-not-allowed opacity-70">
                                <input
                                    type="text"
                                    placeholder={t('chat_widget.input.placeholder')}
                                    disabled
                                    className="w-full bg-gray-100 text-gray-500 text-sm rounded-full py-3.5 px-5 focus:outline-none border border-transparent transition-all pointer-events-none"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-300 rounded-full text-white">
                                    <Send className="w-4 h-4" />
                                </div>
                            </div>
                            <p className="text-[10px] text-center text-gray-400 mt-2">
                                {t('chat_widget.footer.disclaimer')}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto bg-gradient-to-br from-[#4a662d] to-[#3b5224] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_8px_25px_rgba(74,102,45,0.4)] transition-all relative group z-50"
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
                {!isOpen && (
                    <span className="absolute right-0 top-0 -mt-1 -mr-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c522e] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7c522e] border-2 border-white"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
