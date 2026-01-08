# Change: Implementation of Institutional Chat Widget with Mocked AI Responses

## Context & Problem
For the MVP presentation of the CCTAAL platform, we need to demonstrate the "Concierge/Support" capability. While the real RAG/AI backend is under development, we need a fully functional frontend widget that simulates an AI interaction using pre-defined static data. This allows stakeholders to visualize the support flow without needing the complex backend active.

## Proposed Solution (Frontend Only)
Create a floating chat widget (`ChatWidget.tsx`) fixed to the bottom-right of the screen.
* **State:** It should handle `isOpen`, `isTyping` (simulation), and a `messages` history array.
* **Interaction:**
    * The user sees a floating button (FAB) with a message icon.
    * On click, the chat window opens with a welcoming animation.
    * The user is presented with **3 Quick Action Buttons** (FAQ).
    * Clicking a button simulates a user message, followed by a "typing..." indicator, and then the specific pre-set response.

## Implementation Plan

### Component Structure (`ChatWidget.tsx`)
* **Position:** Fixed `bottom-6 right-6` (z-index 50).
* **Visuals:**
    * **Header:** Green Background (`#4a662d`), Title "Suporte CCTAAL", Subtitle "Inteligência Artificial". Close button.
    * **Body:** Scrollable area. Messages should have distinct styles for "User" (Right, Green bg) and "Bot" (Left, Gray/White bg with CCTAAL Logo avatar).
    * **Footer:** An input field (disabled or functional just for show) and the 3 Quick Questions stacked or in a carousel.

### The Mock Data (Hardcoded Logic)
Implement logic to handle these exact 3 scenarios:

* **Scenario 1: "Como funciona a filiação?"**
    * *Bot Response:* "A filiação à CCTAAL conecta sua empresa a uma rede global. Oferecemos suporte em vistos, inteligência de mercado e conexão direta com a China. Você pode iniciar o processo clicando em 'Tornar-se Membro' no menu superior."

* **Scenario 2: "Vocês trabalham com quais commodities?"**
    * *Bot Response:* "Atuamos principalmente com Soja, Milho, Proteína Animal e Açúcar. Nossa mesa de operações facilita tanto a exportação quanto a regularização sanitária para o mercado asiático."

* **Scenario 3: "O que é o Hub de Inovação?"**
    * *Bot Response:* "É nossa iniciativa para conectar AgTechs brasileiras com investidores internacionais. Focamos em rastreabilidade (Blockchain) e automação de processos aduaneiros."

### Animation & UX
* Use `framer-motion` for the widget entry (Slide up + Fade in).
* **Crucial:** When a user clicks a question, show a "typing..." bubble for 1.5 seconds before showing the answer. This adds realism to the demo.

## Verification
* Verify that the widget floats above all content (z-index check).
* Verify that the "typing" animation plays correctly.
* Verify that closing and reopening the chat preserves the state or resets it gracefully.

## Assets
* Use `MessageCircle` and `X` icons from `lucide-react`.
* Use the Copper color (`#7c522e`) for the user interaction accents (e.g., the send button or hover states).

## Code Generation

### [NEW] `src/components/ChatWidget.tsx`

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! Sou a IA da CCTAAL. Como posso ajudar com sua internacionalização hoje?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (mockQuestion?: string) => {
    if (isTyping) return;

    let userText = mockQuestion || "Pergunta genérica";
    let botResponse = "";

    // Mock Logic
    switch(userText) {
      case "Como funciona a filiação?":
        botResponse = "A filiação à CCTAAL conecta sua empresa a uma rede global. Oferecemos suporte em vistos, inteligência de mercado e conexão direta com a China. Você pode iniciar o processo clicando em 'Tornar-se Membro' no menu superior.";
        break;
      case "Vocês trabalham com quais commodities?":
        botResponse = "Atuamos principalmente com Soja, Milho, Proteína Animal e Açúcar. Nossa mesa de operações facilita tanto a exportação quanto a regularização sanitária para o mercado asiático.";
        break;
      case "O que é o Hub de Inovação?":
        botResponse = "É nossa iniciativa para conectar AgTechs brasileiras com investidores internacionais. Focamos em rastreabilidade (Blockchain) e automação de processos aduaneiros.";
        break;
      default:
        botResponse = "Desculpe, ainda estou aprendendo. Por favor, selecione uma das opções abaixo.";
    }

    // Add User Message
    const newMessage: Message = { id: Date.now(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate Typing
    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickQuestions = [
    "Como funciona a filiação?",
    "Vocês trabalham com quais commodities?",
    "O que é o Hub de Inovação?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[380px] overflow-hidden border border-gray-100 mb-4"
          >
            {/* Header */}
            <div className="bg-[#4a662d] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg leading-none">Suporte CCTAAL</h3>
                   <span className="text-xs opacity-80 font-light">Inteligência Artificial</span>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div ref={scrollRef} className="h-[400px] overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-[#4a662d] text-white rounded-br-none' 
                        : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                   </div>
                </div>
              )}
            </div>

            {/* Footer / Quick Actions */}
            <div className="p-4 bg-white border-t border-gray-100">
               <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Sugestões de pergunta</p>
               <div className="flex flex-col gap-2">
                 {quickQuestions.map((q, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleSendMessage(q)}
                     disabled={isTyping}
                     className="text-left text-sm p-3 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#7c522e] hover:text-white transition-all duration-300 border border-gray-200 hover:border-[#7c522e] active:scale-[0.98]"
                   >
                     {q}
                   </button>
                 ))}
               </div>
               
               {/* Mock Input Area */}
               <div className="mt-4 relative">
                  <input 
                    type="text" 
                    placeholder="Digite sua mensagem..." 
                    disabled
                    className="w-full bg-gray-100 text-gray-400 text-sm rounded-full py-3 px-4 focus:outline-none cursor-not-allowed border border-transparent"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-gray-300 rounded-full text-white">
                     <Send className="w-4 h-4" />
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto bg-[#4a662d] text-white p-4 rounded-full shadow-xl hover:bg-[#3d5425] transition-colors relative group"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
        {!isOpen && (
            <span className="absolute right-0 top-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c522e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7c522e]"></span>
            </span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
```

### [MODIFY] `src/App.tsx`

Add the `ChatWidget` to the main layout so it appears on every page.

```tsx
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Existing Layout components */}
      <Navigation />
      <main>
          {/* Routes */}
      </main>
      <Footer />
      
      {/* Add Widget Here */}
      <ChatWidget />
    </div>
  );
}
```
