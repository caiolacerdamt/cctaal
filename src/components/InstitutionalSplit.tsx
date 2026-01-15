import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const InstitutionalSplit = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="h-[500px] lg:h-auto relative overflow-hidden">
                    <img
                        src="/about-cctaal.png"
                        alt="Technology in Port"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                </div>

                {/* Text Side */}
                <div className="flex items-center p-12 lg:p-24 bg-background">
                    <div>
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">{t('institutional.label')}</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{t('institutional.title')}</h2>

                        <div className="w-20 h-1 bg-secondary mb-8 mt-4"></div>

                        <h3 className="text-xl md:text-2xl font-light text-dark mb-6 leading-tight">
                            {t('institutional.subtitle')}
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {t('institutional.description')}
                        </p>

                        <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-wide border-b-2 border-primary pb-1">
                            {t('institutional.cta')} <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionalSplit;
