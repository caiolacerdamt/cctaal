import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="min-h-screen bg-[#f9f9f7] pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans text-gray-700">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-gray-100">

                {/* Header */}
                <header className="mb-16 border-b border-gray-100 pb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-[#4a662d] mb-4 leading-tight"
                    >
                        {t('privacy_page.title')}
                    </motion.h1>
                    <p className="text-sm text-gray-500 italic">
                        {t('privacy_page.last_update')}
                    </p>
                </header>

                {/* Intro */}
                <section className="mb-12">
                    <p className="text-lg leading-relaxed text-gray-800">
                        {t('privacy_page.intro')}
                    </p>
                </section>

                <div className="space-y-12">
                    {/* 1. Coleta de Informações */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            {t('privacy_page.section_1.title')}
                        </h2>
                        <p className="leading-relaxed mb-4">
                            {t('privacy_page.section_1.p1')}
                        </p>
                        <p className="leading-relaxed">
                            {t('privacy_page.section_1.p2')}
                        </p>
                    </section>

                    {/* 2. Uso de Dados */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            {t('privacy_page.section_2.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacy_page.section_2.p1')}
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>{t('privacy_page.section_2.list.item1')}</li>
                            <li>{t('privacy_page.section_2.list.item2')}</li>
                            <li>{t('privacy_page.section_2.list.item3')}</li>
                            <li>{t('privacy_page.section_2.list.item4')}</li>
                        </ul>
                    </section>

                    {/* 3. Compartilhamento */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            {t('privacy_page.section_3.title')}
                        </h2>
                        <p className="leading-relaxed font-medium text-gray-900 mb-2">
                            {t('privacy_page.section_3.p1')}
                        </p>
                        <p className="leading-relaxed">
                            {t('privacy_page.section_3.p2')}
                        </p>
                    </section>

                    {/* 4. Segurança */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            {t('privacy_page.section_4.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacy_page.section_4.p1')}
                        </p>
                    </section>

                    {/* 5. Seus Direitos */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            {t('privacy_page.section_5.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacy_page.section_5.p1')}
                        </p>
                    </section>

                    {/* 6. Contato do DPO */}
                    <section className="bg-gray-50 p-6 border-l-4 border-[#4a662d]">
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">
                            {t('privacy_page.section_6.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacy_page.section_6.p1')}
                        </p>
                        <p className="mt-4 font-bold text-[#4a662d]">
                            <a href="mailto:legal@cctaal.org" className="hover:underline">legal@cctaal.org</a>
                        </p>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default PrivacyPolicyPage;
