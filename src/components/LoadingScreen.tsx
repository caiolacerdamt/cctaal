import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../assets/logo-cctaal.png';

const LoadingScreen = () => {
    const [text, setText] = useState('Carregando');

    useEffect(() => {
        // Simple manual detection to show correct text before i18n is fully loaded
        const storedLng = localStorage.getItem('i18nextLng');
        const navigatorLng = navigator.language.split('-')[0];
        const lang = storedLng || navigatorLng || 'pt';

        const loadingTexts: { [key: string]: string } = {
            'pt': 'Carregando',
            'en': 'Loading',
            'es': 'Cargando',
            'zh': '加载中'
        };

        // Handle regional codes like pt-BR or zh-CN if strictly stored, though usually simplified
        const cleanLang = lang.split('-')[0];
        setText(loadingTexts[cleanLang] || loadingTexts['pt']);
    }, []);

    return (
        <div className="fixed inset-0 bg-[#f9f9f7] flex flex-col items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
            >
                {/* Logo with pulsing effect */}
                <motion.div
                    animate={{
                        boxShadow: ["0px 0px 0px 0px rgba(124, 82, 46, 0)", "0px 0px 20px 5px rgba(124, 82, 46, 0.1)", "0px 0px 0px 0px rgba(124, 82, 46, 0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="p-6 rounded-full bg-white shadow-lg border border-[#7c522e]/10"
                >
                    <img src={logo} alt="CCTAAL Logo" className="h-16 w-auto object-contain" />
                </motion.div>

            </motion.div>

            {/* Separate Spinner below logo */}
            <motion.div
                className="mt-8 w-8 h-8 border-2 border-[#7c522e]/30 border-t-[#7c522e] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-[#7c522e] font-serif tracking-widest text-sm uppercase"
            >
                {text}
            </motion.p>
        </div>
    );
};

export default LoadingScreen;
