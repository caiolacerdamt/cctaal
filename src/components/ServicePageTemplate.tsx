import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ServicePageProps {
    title: string;
    subtitle: string;
    mainText: string;
    benefits: string[];
    heroImage?: string;
    overviewTitle?: string;
    children?: React.ReactNode;
    // New props for customization
    benefitsTitle?: string;
    sidebarCtaText?: string;
    sidebarCtaLabel?: string;
    sidebarCtaButtonText?: string;
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButtonText?: string;
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
    title,
    subtitle,
    mainText,
    benefits,
    heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Default corporate image
    overviewTitle,
    children,
    benefitsTitle,
    sidebarCtaText,
    sidebarCtaLabel,
    sidebarCtaButtonText,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText
}) => {
    const { t } = useTranslation();
    const activeOverviewTitle = overviewTitle || t('service_template.overview_title');

    return (
        <div className="bg-[#f9f9f7] min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh]">
                <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" /> {/* Darker overlay for text readability */}

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-100 font-light max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Description */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8">{activeOverviewTitle}</h2>
                        <div className="prose prose-lg text-gray-700 leading-relaxed font-light">
                            {/* Split text by newline to create paragraphs if needed, or just render as is */}
                            <p className="whitespace-pre-line">{mainText}</p>
                        </div>

                        <div className="mt-12 p-8 bg-white border-l-4 border-primary rounded-r-lg shadow-sm">
                            <p className="text-lg italic text-gray-600">
                                {t('service_template.commitment_quote')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Benefits Card */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-secondary sticky top-24">
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-secondary block"></span>
                                {benefitsTitle || t('service_template.highlights_benefits')}
                            </h3>

                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-6 border-t border-gray-100">
                                {sidebarCtaLabel && (
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{sidebarCtaLabel}</p>
                                )}
                                <p className="text-sm text-gray-500 mb-4">{sidebarCtaText || t('service_template.need_more_info')}</p>
                                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-sm font-medium hover:bg-opacity-90 transition-all">
                                    {sidebarCtaButtonText || t('service_template.consult_expert')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Custom Children Content (e.g. Grids) */}
                {children && (
                    <div className="mt-20">
                        {children}
                    </div>
                )}
            </section>

            {/* Final CTA Strip */}
            <section className="bg-primary py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">
                        {ctaTitle || t('service_template.talk_to_experts', { title })}
                    </h2>
                    <p className="text-primary-100 mb-8 text-lg">
                        {ctaSubtitle || t('service_template.ready_to_help')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                    >
                        {ctaButtonText || t('service_template.start_conversation')} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicePageTemplate;
