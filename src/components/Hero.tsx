import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const heroImages = [
        "/hero-carousel-1-v2.jpg",
        "/hero-carousel-replacement.jpg",
        "/hero-carousel-3-v2.jpg",
        "/hero-carousel-4.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 6000); // 6 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Carousel */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
                />
            </AnimatePresence>

            {/* Fixed Overlay (Dark Gradient) */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a662d]/40 via-transparent to-transparent z-10 opacity-60" />

            {/* Fixed Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
                    <Trans i18nKey="hero.title" components={{ 0: <br /> }}>
                        A Ponte entre Ciclos Históricos <br />e Capacidades Produtivas
                    </Trans>
                </h1>
                <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto text-gray-100 drop-shadow-md">
                    {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* <Link to="/manifesto" className="group bg-[#4a662d] hover:bg-[#3d5425] text-white px-8 py-4 rounded-sm font-medium text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        {t('hero.cta_manifesto')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link> */}
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-12 h-1.5 bg-[#7c522e]'
                            : 'w-2 h-1.5 bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
