import { motion } from 'framer-motion';
import { Radar, Activity, BarChart2, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import marketHeroV2 from '../assets/market_hero_v2.png';
import { useTranslation } from 'react-i18next';

const MarketIntelligence = () => {
    const { t } = useTranslation();

    const capabilities = [
        {
            icon: Radar,
            title: t('intelligence_page.capabilities.analysis.title'),
            description: t('intelligence_page.capabilities.analysis.description')
        },
        {
            icon: Activity,
            title: t('intelligence_page.capabilities.monitoring.title'),
            description: t('intelligence_page.capabilities.monitoring.description')
        },
        {
            icon: BarChart2,
            title: t('intelligence_page.capabilities.competitiveness.title'),
            description: t('intelligence_page.capabilities.competitiveness.description')
        },
        {
            icon: Globe2,
            title: t('intelligence_page.capabilities.geoeconomics.title'),
            description: t('intelligence_page.capabilities.geoeconomics.description')
        }
    ];

    const deliverables = [
        t('intelligence_page.deliverables.items.reports'),
        t('intelligence_page.deliverables.items.briefings'),
        t('intelligence_page.deliverables.items.mapping'),
        t('intelligence_page.deliverables.items.dossiers')
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

            {/* 2. O Hub de Inteligência (Intro) */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#7c522e] font-bold tracking-widest text-sm uppercase mb-4 block">
                            {t('intelligence_page.intro.label')}
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-8">
                            {t('intelligence_page.intro.title')}
                        </h2>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            {t('intelligence_page.intro.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Capacidades Analíticas (Grid) */}
            <section className="py-24 px-4 bg-[#f9f9f7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">{t('intelligence_page.capabilities.title')}</h2>
                        <div className="w-16 h-1 bg-[#7c522e] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((item, index) => (
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

            {/* 4. Produtos de Inteligência (Visual Split) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Right: Visual (Order swapped on mobile via flex-col-reverse if needed, but standard is fine) */}
                        <div className="lg:w-1/2 relative">
                            {/* Decorative Background */}
                            <div className="absolute top-10 -left-10 w-full h-full bg-[#f0f4f8] rounded-full filter blur-3xl opacity-50 z-0"></div>

                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                alt="Analytics Dashboard Report"
                                className="relative z-10 w-full rounded-sm shadow-2xl border border-gray-100"
                            />
                        </div>

                        {/* Left: Content */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-6">
                                {t('intelligence_page.deliverables.title')}
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg font-light">
                                {t('intelligence_page.deliverables.subtitle')}
                            </p>

                            <ul className="space-y-6">
                                {deliverables.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-[#4a662d]/10 flex items-center justify-center group-hover:bg-[#4a662d] transition-colors">
                                            <CheckCircle2 size={18} className="text-[#4a662d] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Final */}
            <section className="bg-[#1e293b] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">
                        {t('intelligence_page.cta.title')}
                    </h2>
                    <p className="text-blue-200 mb-10 text-lg max-w-2xl mx-auto font-light">
                        {t('intelligence_page.cta.description')}
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
