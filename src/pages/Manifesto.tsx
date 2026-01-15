import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import visionBg from '../assets/vision_background.png';
import wealthEq from '../assets/wealth_equation.png';

import { useTranslation, Trans } from 'react-i18next';

const Manifesto = () => {
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Sections for the sticky TOC
    const sections = [
        { id: 'inovar', label: t('manifesto.sidebar.inovar') },
        { id: 'diferenciar', label: t('manifesto.sidebar.diferenciar') },
        { id: 'produzir', label: t('manifesto.sidebar.produzir') },
        { id: 'tempo', label: t('manifesto.sidebar.tempo') },
        { id: 'equacao', label: t('manifesto.sidebar.equacao') },
    ];

    const [activeSection, setActiveSection] = useState('inovar');

    // Simple scroll spy logic (simplified for clarity)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <article className="bg-[#f9f9f7] min-h-screen font-sans selection:bg-[#7c522e] selection:text-white">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#4a662d] origin-left z-50"
                style={{ scaleX }}
            />

            {/* A. Hero Section: "A Capa" */}
            <section className="relative text-white py-32 lg:py-48 px-4 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={visionBg}
                        alt="Background Texture"
                        className="w-full h-full object-cover"
                    />
                    {/* Heavy overlay for readability */}
                    <div className="absolute inset-0 bg-[#1a1a1a]/80" />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 80 }}
                        transition={{ duration: 1 }}
                        className="mx-auto w-px bg-[#7c522e] mb-8"
                    />

                    <motion.h1
                        className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {t('manifesto.hero.title')}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl font-serif italic text-amber-100 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {t('manifesto.hero.quote')}
                    </motion.p>
                </div>
            </section>

            {/* B. Content Body */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sticky Sidebar (Left) */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] mb-6">{t('manifesto.sidebar.title')}</h3>
                            <nav className="space-y-4 border-l border-gray-200">
                                {sections.map((section, index) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollTo(section.id)}
                                        className={`block pl-4 text-sm font-medium transition-all duration-300 text-left w-full border-l-2 -ml-[2px] ${activeSection === section.id
                                            ? 'border-[#7c522e] text-[#1a1a1a]'
                                            : 'border-transparent text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        <span className="mr-2 opacity-50 text-xs">0{index + 1}.</span>
                                        {section.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content (Right) */}
                    <div className="lg:col-span-8 lg:col-start-5 prose prose-lg prose-gray max-w-none">

                        {/* Introduction with Drop Cap */}
                        <div className="mb-16">
                            <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] leading-relaxed">
                                <Trans
                                    i18nKey="manifesto.intro"
                                    components={{
                                        0: <span className="float-left text-7xl font-bold font-serif text-[#7c522e] pr-4 pt-2 leading-[0.8]" />
                                    }}
                                />
                            </p>
                        </div>

                        {/* 1. Inovar */}
                        <section id="inovar" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">01</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">{t('manifesto.sections.inovar.title')}</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('manifesto.sections.inovar.text')}
                            </p>
                            <blockquote className="border-l-4 border-[#4a662d] pl-6 my-8 italic text-xl font-serif text-[#1a1a1a]">
                                {t('manifesto.sections.inovar.quote')}
                            </blockquote>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('manifesto.sections.inovar.subtext')}
                            </p>
                        </section>

                        {/* 2. Diferenciar */}
                        <section id="diferenciar" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">02</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">{t('manifesto.sections.diferenciar.title')}</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('manifesto.sections.diferenciar.text')}
                            </p>
                        </section>

                        {/* 3. Produzir */}
                        <section id="produzir" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">03</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">{t('manifesto.sections.produzir.title')}</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('manifesto.sections.produzir.text1')}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">
                                {t('manifesto.sections.produzir.text2')}
                            </p>
                        </section>

                        {/* 4. O Tempo */}
                        <section id="tempo" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">04</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">{t('manifesto.sections.tempo.title')}</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('manifesto.sections.tempo.text')}
                            </p>
                        </section>

                        {/* C. The Equation Section */}
                        <section id="equacao" className="my-24 scroll-mt-32">
                            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-gray-800">
                                <img
                                    src={wealthEq}
                                    alt="A Equação da Riqueza"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </section>

                        {/* Conclusion */}
                        <div className="text-center mt-20 pt-20 border-t border-gray-200">
                            <p className="text-2xl md:text-3xl font-serif text-[#1a1a1a] italic leading-relaxed mb-8">
                                {t('manifesto.conclusion')}
                            </p>
                            <div className="w-16 h-1 bg-[#4a662d] mx-auto opacity-50"></div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    );
};

export default Manifesto;
