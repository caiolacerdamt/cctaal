import { Briefcase, Globe, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WhatWeDo = () => {
    const { t } = useTranslation();
    const cards = [
        {
            icon: Briefcase,
            title: t('what_we_do.cards.solutions.title'),
            text: t('what_we_do.cards.solutions.text'),
            link: '/solucoes'
        },
        {
            icon: Globe,
            title: t('what_we_do.cards.trade.title'),
            text: t('what_we_do.cards.trade.text'),
            link: '/comercio'
        },
        {
            icon: Cpu,
            title: t('what_we_do.cards.tech.title'),
            text: t('what_we_do.cards.tech.text'),
            link: '/tecnologia'
        },
        {
            icon: TrendingUp,
            title: t('what_we_do.cards.intelligence.title'),
            text: t('what_we_do.cards.intelligence.text'),
            link: '/market-intelligence'
        },
    ];

    return (
        <section className="py-24 bg-[#f9f9f7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">{t('what_we_do.title')}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        {t('what_we_do.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card, index) => (
                        <Link to={card.link} key={index}>
                            <motion.div
                                className="group relative bg-white p-10 rounded-sm border border-[#7c522e]/20 overflow-hidden cursor-pointer h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                    borderColor: "#7c522e"
                                }}
                            >
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <motion.div
                                            className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6"
                                            whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(74, 102, 45, 0.1)" }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <card.icon size={28} />
                                        </motion.div>

                                        <h3 className="text-2xl font-serif font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                                            {card.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {card.text}
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <motion.span
                                            className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-secondary group-hover:text-primary transition-colors"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            {t('what_we_do.cta')} <ArrowRight size={16} />
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Decorative background element on hover */}
                                <motion.div
                                    className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full z-0"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
