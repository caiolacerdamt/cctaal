import { Sprout, Cpu, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BentoPillars = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-[#f9f9f7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">{t('pillars.title')}</h2>
                    <div className="w-20 h-1 bg-[#7c522e] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        {t('pillars.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[800px] md:h-[600px]">

                    {/* Card 1: Produção (Vertical Left) */}
                    <div className="group relative col-span-1 md:row-span-2 rounded-sm overflow-hidden border border-[#7c522e]/50 hover:border-[#7c522e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                        {/* Background Image: Cinematic Harvest */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/pillar-production.jpg')" }}
                        />
                        {/* Cinematic Overlay - Darker bottom, clear top */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#0f1c05]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-3 rounded-full border border-[#7c522e]/50 bg-black/20 backdrop-blur-sm">
                                    <Sprout className="text-[#7c522e]" size={24} />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-3 leading-tight border-l-2 border-[#7c522e] pl-4">
                                    {t('pillars.card1.title')}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-transparent">
                                    {t('pillars.card1.text')}
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Card 2: Tecnologia (Horizontal Top Right) */}
                    <div className="group relative col-span-1 md:col-span-2 rounded-sm overflow-hidden border border-[#7c522e]/50 hover:border-[#7c522e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                        {/* Background Image: Tech Interface/Data */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')" }}
                        />
                        {/* Cinematic Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#0f1c05]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex justify-end">
                                <div className="p-3 rounded-full border border-[#7c522e]/50 bg-black/20 backdrop-blur-sm">
                                    <Cpu className="text-[#7c522e]" size={24} />
                                </div>
                            </div>

                            <div className="max-w-xl">
                                <h3 className="text-2xl font-serif font-bold text-white mb-3 border-l-2 border-[#7c522e] pl-4">{t('pillars.card2.title')}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4 pl-4">
                                    {t('pillars.card2.text')}
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Card 3: Integração Global (Horizontal Bottom Right) */}
                    <div className="group relative col-span-1 md:col-span-2 rounded-sm overflow-hidden border border-[#7c522e]/50 hover:border-[#7c522e] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                        {/* Background Image: Shipping/Port at Dusk */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/pillar-integration.jpg')" }}
                        />
                        {/* Cinematic Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#0f1c05]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex justify-end">
                                <div className="p-3 rounded-full border border-[#7c522e]/50 bg-black/20 backdrop-blur-sm">
                                    <Globe className="text-[#7c522e]" size={24} />
                                </div>
                            </div>

                            <div className="max-w-xl">
                                <h3 className="text-2xl font-serif font-bold text-white mb-3 border-l-2 border-[#7c522e] pl-4">{t('pillars.card3.title')}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4 pl-4">
                                    {t('pillars.card3.text')}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoPillars;
