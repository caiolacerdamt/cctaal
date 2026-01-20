import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, FileBarChart, Briefcase, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#f9f9f7]">
            {/* LEFT PANEL: Visual & Benefits (40%) */}
            <motion.div
                className="lg:w-2/5 relative bg-[#4a662d] text-white p-8 lg:p-16 flex flex-col justify-between overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background Overlay Effect */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                        {t('contact_page.hero.title')}
                    </h2>
                    <p className="text-gray-200 text-lg mb-12 max-w-xl leading-relaxed">
                        {t('contact_page.hero.subtitle')}
                    </p>

                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097] flex-shrink-0">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">{t('contact_page.hero.cards.card1.title')}</h3>
                                <p className="text-sm text-gray-200 mt-1 leading-relaxed">{t('contact_page.hero.cards.card1.description')}</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097] flex-shrink-0">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">{t('contact_page.hero.cards.card2.title')}</h3>
                                <p className="text-sm text-gray-200 mt-1 leading-relaxed">{t('contact_page.hero.cards.card2.description')}</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097] flex-shrink-0">
                                <FileBarChart size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">{t('contact_page.hero.cards.card3.title')}</h3>
                                <p className="text-sm text-gray-200 mt-1 leading-relaxed">{t('contact_page.hero.cards.card3.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-16 space-y-4 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-gray-200">
                        <MapPin size={20} className="text-[#e0c097]" />
                        <span className="text-sm">{t('contact_page.hero.address')}</span>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT PANEL: Interactive Form (60%) */}
            <div className="lg:w-3/5 p-8 lg:p-20 flex flex-col justify-center">
                <div className="max-w-2xl mx-auto w-full">

                    {/* FORM AREA */}
                    <div className="relative min-h-[500px]">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-6">
                                {t('contact_page.form.membership.title')}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">
                                        {t('contact_page.form.membership.name_label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder={t('contact_page.form.membership.name_placeholder')} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">
                                        {t('contact_page.form.membership.role_label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder={t('contact_page.form.membership.role_placeholder')} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">
                                    {t('contact_page.form.membership.email_label')} <span className="text-red-500">*</span>
                                </label>
                                <input type="email" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder={t('contact_page.form.membership.email_placeholder')} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">
                                        {t('contact_page.form.membership.company_label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder={t('contact_page.form.membership.company_placeholder')} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-600">
                                        {t('contact_page.form.membership.country_label')} <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder={t('contact_page.form.membership.country_placeholder')} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">
                                    {t('contact_page.form.membership.scale_label')} <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors text-gray-700 cursor-pointer" defaultValue="">
                                    <option value="" disabled selected>Select...</option>
                                    <option value="opt1">{t('contact_page.form.membership.scale_options.opt1')}</option>
                                    <option value="opt2">{t('contact_page.form.membership.scale_options.opt2')}</option>
                                    <option value="opt3">{t('contact_page.form.membership.scale_options.opt3')}</option>
                                    <option value="opt4">{t('contact_page.form.membership.scale_options.opt4')}</option>
                                    <option value="opt5">{t('contact_page.form.membership.scale_options.opt5')}</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">
                                    {t('contact_page.form.membership.description_label')} <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors min-h-[100px] resize-none"
                                    placeholder={t('contact_page.form.membership.description_placeholder')}
                                />
                                <p className="text-xs text-gray-400 text-right">Min. 200 characters</p>
                            </div>

                            <div className="pt-6">
                                <button className="w-full bg-[#4a662d] text-white py-4 rounded-sm font-bold text-lg hover:bg-[#3d5425] transition-all shadow-lg flex items-center justify-center gap-2 group">
                                    {t('contact_page.form.membership.submit')}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4 italic max-w-md mx-auto leading-relaxed">
                                    {t('contact_page.form.membership.disclaimer')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
