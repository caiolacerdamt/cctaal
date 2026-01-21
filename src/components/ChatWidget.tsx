import { useState } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ChatWidget = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);


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
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/10 p-2 rounded-full transition-colors duration-200"
                                aria-label={t('chat_widget.tooltips.close')}
                            >
                                <X className="w-5 h-5 text-white/90" />
                            </button>
                        </div>

                        {/* Body - Coming Soon State */}
                        <div className="h-[300px] p-8 flex flex-col items-center justify-center text-center gap-4 bg-gray-50/50">
                            <div className="w-16 h-16 bg-[#4a662d]/10 rounded-full flex items-center justify-center mb-2">
                                <Bot className="w-8 h-8 text-[#4a662d]" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-800">
                                {t('chat_widget.coming_soon.title')}
                            </h4>

                            <p className="text-gray-600 leading-relaxed max-w-[280px]">
                                {t('chat_widget.coming_soon.message')}
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
