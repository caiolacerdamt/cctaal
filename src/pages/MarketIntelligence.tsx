import { motion } from 'framer-motion';
import { Globe2, TrendingUp, Users, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import marketHeroV2 from '../assets/market_hero_v2.png';
import { useTranslation } from 'react-i18next';

const MarketIntelligence = () => {
    const { t } = useTranslation();

    const pillars = [
        {
            icon: Globe2,
            title: t('intelligence_page.pillars.geopolitics.title'),
            description: t('intelligence_page.pillars.geopolitics.description')
        },
        {
            icon: TrendingUp,
            title: t('intelligence_page.pillars.volatility.title'),
            description: t('intelligence_page.pillars.volatility.description')
        },
        {
            icon: Users,
            title: t('intelligence_page.pillars.counterparties.title'),
            description: t('intelligence_page.pillars.counterparties.description')
        },
        {
            icon: Cpu,
            title: t('intelligence_page.pillars.tech_permanence.title'),
            description: t('intelligence_page.pillars.tech_permanence.description')
        }
    ];

    return (
        <div className="bg-[#f9f9f7] min-h-screen">
            {/* 1. Hero Section */}
            <section className="relative w-full h-[70vh]">
                <img
                    src={marketHeroV2}
                    alt={t('intelligence_page.hero.title')}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('intelligence_page.hero.title')}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-100 font-light max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('intelligence_page.hero.description')}
                    </motion.p>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-8">
                            {t('intelligence_page.intro.title')}
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed whitespace-pre-line">
                            {t('intelligence_page.intro.description')}
                        </p>
                    </motion.div>
                </div>

            </section>




            {/* 3. Pillars Section */}
            <section className="py-24 px-4 bg-[#f9f9f7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">
                            {t('intelligence_page.pillars.title')}
                        </h2>
                        <p className="text-lg text-gray-600 font-light mt-4 max-w-2xl mx-auto">
                            {t('intelligence_page.pillars.subtitle')}
                        </p>
                        <div className="w-16 h-1 bg-[#7c522e] mx-auto mt-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg border-t-4 border-[#7c522e] transition-all duration-300"
                            >
                                <div className="mb-6">
                                    <item.icon className="text-[#7c522e]" size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-serif font-bold text-[#1a1a1a] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA Final */}
            <section className="bg-[#1e293b] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">
                        {t('intelligence_page.cta.title')}
                    </h2>
                    <p className="text-blue-200 mb-10 text-lg max-w-2xl mx-auto font-light">
                        {t('intelligence_page.cta.subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 border border-[#7c522e] text-[#7c522e] hover:bg-[#7c522e] hover:text-white px-8 py-4 rounded-sm font-bold text-lg transition-all"
                    >
                        {t('intelligence_page.cta.button')} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MarketIntelligence;
