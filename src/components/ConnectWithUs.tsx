import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConnectWithUs = () => {
    const { t } = useTranslation();
    return (
        <section className="relative py-24 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">

                    {/* Left: Image Side (AgroTech + Person) */}
                    {/* Removed heavy overlays to ensure visibility */}
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2670&auto=format&fit=crop"
                            alt="AgroTech Professional in Field"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Subtle gradient only at bottom for text readability if needed, but keeping it clean */}
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#4a662d]/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <p className="font-bold text-lg">{t('connect.image_text')}</p>
                        </div>
                    </div>

                    {/* Right: Content Side - Using requested Brown/Green Palette */}
                    <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d1b12] relative text-white">

                        {/* Green Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#4a662d]"></div>

                        <span className="text-[#8cc63f] font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
                            {t('connect.label')}
                        </span>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                            {t('connect.title')}
                        </h2>

                        <p className="text-gray-300 text-lg font-light mb-8 leading-relaxed">
                            {t('connect.description')}
                        </p>

                        <div className="mb-10">
                            <p className="text-white font-medium text-lg leading-relaxed">
                                {t('connect.instruction')}
                            </p>
                        </div>

                        <Link to="/contact">
                            <button className="w-full sm:w-auto bg-[#4a662d] hover:bg-[#7c522e] text-white px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/20 hover:-translate-y-1 ring-2 ring-[#4a662d]/50 hover:ring-[#7c522e]/50">
                                {t('connect.cta')}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectWithUs;
