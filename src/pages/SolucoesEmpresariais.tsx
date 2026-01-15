import { ArrowLeftRight, Stamp, Globe, Search, Plane, FileCheck, Package, TrendingUp } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';
import businessHero from '../assets/business_solutions_hero_new.jpg';
import { useTranslation } from 'react-i18next';

const SolucoesEmpresariais = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: ArrowLeftRight,
            title: t('solutions_page.services.import_export.title'),
            description: t('solutions_page.services.import_export.description')
        },
        {
            icon: Stamp,
            title: t('solutions_page.services.customs.title'),
            description: t('solutions_page.services.customs.description')
        },
        {
            icon: Globe,
            title: t('solutions_page.services.advisory.title'),
            description: t('solutions_page.services.advisory.description')
        },
        {
            icon: Search,
            title: t('solutions_page.services.prospecting.title'),
            description: t('solutions_page.services.prospecting.description')
        },
        {
            icon: Plane,
            title: t('solutions_page.services.missions.title'),
            description: t('solutions_page.services.missions.description')
        },
        {
            icon: FileCheck, // Vistos usually involve document checking
            title: t('solutions_page.services.visa.title'),
            description: t('solutions_page.services.visa.description')
        },
        {
            icon: Package,
            title: t('solutions_page.services.consolidation.title'),
            description: t('solutions_page.services.consolidation.description')
        },
        {
            icon: TrendingUp,
            title: t('solutions_page.services.feasibility.title'),
            description: t('solutions_page.services.feasibility.description')
        }
    ];

    return (
        <ServicePageTemplate
            title={t('solutions_page.hero.title')}
            subtitle={t('solutions_page.hero.subtitle')}
            mainText={t('solutions_page.hero.main_text')}
            benefits={[
                t('solutions_page.benefits.strategy'),
                t('solutions_page.benefits.modeling'),
                t('solutions_page.benefits.risk')
            ]}
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

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
