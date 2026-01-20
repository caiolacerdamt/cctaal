import { Sprout, Wheat, CircleDot, Layers, Coffee, Flower2, Waves } from 'lucide-react';
import serviceHero from '../assets/international_trade_hero_new.jpg'; // Updated hero image
import ServicePageTemplate from '../components/ServicePageTemplate';
import { useTranslation } from 'react-i18next';

const ComercioInternacional = () => {
    const { t } = useTranslation();

    const commodities = [
        {
            icon: Sprout, // Soja
            title: t('trade_page.commodities.soy.title'),
            description: t('trade_page.commodities.soy.description')
        },
        {
            icon: Waves, // Milho (Simulating field)
            title: t('trade_page.commodities.corn.title'),
            description: t('trade_page.commodities.corn.description')
        },
        {
            icon: Wheat, // Arroz (Stylized Wheat)
            title: t('trade_page.commodities.rice.title'),
            description: t('trade_page.commodities.rice.description')
        },
        {
            icon: Wheat, // Trigo
            title: t('trade_page.commodities.wheat.title'),
            description: t('trade_page.commodities.wheat.description')
        },
        {
            icon: CircleDot, // Feijão
            title: t('trade_page.commodities.beans.title'),
            description: t('trade_page.commodities.beans.description')
        },
        {
            icon: Layers, // Açúcar (Cubes)
            title: t('trade_page.commodities.sugar.title'),
            description: t('trade_page.commodities.sugar.description')
        },
        {
            icon: Coffee, // Café
            title: t('trade_page.commodities.coffee.title'),
            description: t('trade_page.commodities.coffee.description')
        },
        {
            icon: Flower2, // Orgânicos
            title: t('trade_page.commodities.organics.title'),
            description: t('trade_page.commodities.organics.description')
        }
    ];

    return (
        <ServicePageTemplate
            title={t('trade_page.hero.title')}
            subtitle={t('trade_page.hero.subtitle')}
            heroImage={serviceHero} // Port/Logistics
            overviewTitle={t('trade_page.hero.overview_title')}
            mainText={t('trade_page.hero.main_text')}
            benefits={[
                t('trade_page.benefits.intermediation'),
                t('trade_page.benefits.contract_mgmt'),
                t('trade_page.benefits.logistics')
            ]}
        >
            {/* Commodity Portfolio Section */}
            <div className="border-t border-gray-200 pt-16">
                <div className="mb-12 max-w-3xl">
                    <span className="text-[#4a662d] font-bold tracking-widest text-sm uppercase mb-2 block">{t('trade_page.portfolio.label')}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        {t('trade_page.portfolio.title')}
                    </h2>
                    <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                        {t('trade_page.portfolio.description')}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        {t('trade_page.portfolio.intro')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {commodities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-sm shadow-sm border border-transparent hover:border-[#7c522e] hover:shadow-md transition-all duration-300 group cursor-default"
                        >
                            <div className="mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#f9f9f7] flex items-center justify-center group-hover:bg-[#4a662d]/10 transition-colors">
                                    <item.icon
                                        className="text-[#4a662d] group-hover:scale-110 transition-transform duration-300"
                                        size={24} strokeWidth={1.5}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Specific CTA for Trading Desk */}
                <div className="mt-20 bg-[#2d1b12] rounded-sm p-12 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #7c522e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                            {t('trade_page.cta.title')}
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t('trade_page.cta.description')}
                        </p>
                        <button className="bg-[#7c522e] hover:bg-[#966236] text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-lg hover:shadow-[#7c522e]/30 hover:-translate-y-1">
                            {t('trade_page.cta.button')}
                        </button>
                    </div>
                </div>
            </div>
        </ServicePageTemplate>
    );
};

export default ComercioInternacional;
