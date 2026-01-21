import { TrendingUp, Globe, Activity, Users, Layers, Cpu, Landmark, RefreshCw } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import businessHero from '../assets/business_solutions_hero_new.jpg';
import { useTranslation } from 'react-i18next';

const SolucoesEmpresariais = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: TrendingUp,
            title: t('solutions_page.services.risk_mgmt.title'),
            description: t('solutions_page.services.risk_mgmt.description')
        },
        {
            icon: Globe,
            title: t('solutions_page.services.transnational_gov.title'),
            description: t('solutions_page.services.transnational_gov.description')
        },
        {
            icon: Activity,
            title: t('solutions_page.services.market_intel.title'),
            description: t('solutions_page.services.market_intel.description')
        },
        {
            icon: Users,
            title: t('solutions_page.services.public_private.title'),
            description: t('solutions_page.services.public_private.description')
        },
        {
            icon: Layers,
            title: t('solutions_page.services.high_volume.title'),
            description: t('solutions_page.services.high_volume.description')
        },
        {
            icon: Cpu,
            title: t('solutions_page.services.tech_permanence.title'),
            description: t('solutions_page.services.tech_permanence.description')
        },
        {
            icon: Landmark,
            title: t('solutions_page.services.financial_access.title'),
            description: t('solutions_page.services.financial_access.description')
        },
        {
            icon: RefreshCw,
            title: t('solutions_page.services.operational_ecosystem.title'),
            description: t('solutions_page.services.operational_ecosystem.description')
        }
    ];

    return (
        <ServicePageTemplate
            title={t('solutions_page.hero.title')}
            subtitle={t('solutions_page.hero.subtitle')}
            mainText={t('solutions_page.overview.text')}
            overviewTitle={t('solutions_page.overview.title')}
            benefits={[
                t('solutions_page.pillars.card1'),
                t('solutions_page.pillars.card2'),
                t('solutions_page.pillars.card3'),
                t('solutions_page.pillars.card4')
            ]}
            benefitsTitle={t('solutions_page.pillars.title')}
            sidebarCtaLabel={t('solutions_page.pillars.cta_label')}
            sidebarCtaText={t('solutions_page.pillars.cta_text')}
            sidebarCtaButtonText={t('solutions_page.pillars.cta_button')}
            ctaTitle={t('solutions_page.bottom_cta.title')}
            ctaSubtitle={t('solutions_page.bottom_cta.subtitle')}
            ctaButtonText={t('solutions_page.bottom_cta.button')}
            heroImage={businessHero}
        >
            {/* New Capacity Grid Section */}
            <div className="border-t border-gray-200 pt-16">
                <div className="mb-12 max-w-3xl">
                    <span className="text-[#7c522e] font-bold tracking-widest text-sm uppercase mb-2 block">{t('solutions_page.portfolio.label')}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        {t('solutions_page.portfolio.title')}
                    </h2>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                        {t('solutions_page.portfolio.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#7c522e] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-default"
                        >
                            <div className="mb-6">
                                <service.icon
                                    className="text-[#7c522e] text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300"
                                    size={32}
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-primary mb-3 group-hover:text-[#7c522e] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-light group-hover:text-gray-700">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </ServicePageTemplate>
    );
};

export default SolucoesEmpresariais;
