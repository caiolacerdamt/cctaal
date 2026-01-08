import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
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
                        Política de Privacidade e Proteção de Dados
                    </motion.h1>
                    <p className="text-sm text-gray-500 italic">
                        Última atualização: Dezembro de 2025
                    </p>
                </header>

                {/* Intro */}
                <section className="mb-12">
                    <p className="text-lg leading-relaxed text-gray-800">
                        A Câmara do Comércio e Tecnologia do Agro da América Latina (CCTAAL) assume o compromisso de proteger a privacidade e os dados pessoais de seus associados, parceiros e visitantes, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                    </p>
                </section>

                <div className="space-y-12">
                    {/* 1. Coleta de Informações */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            1. Coleta de Informações
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Coletamos dados corporativos para fins de processo de filiação e cadastro de parceiros comerciais. Isso pode incluir nome, cargo, e-mail corporativo, telefone e dados da empresa.
                        </p>
                        <p className="leading-relaxed">
                            Além disso, coletamos dados de navegação anonimizados (cookies) para análise de tráfego e inteligência de mercado, visando melhorar a experiência do usuário em nossa plataforma digital.
                        </p>
                    </section>

                    {/* 2. Uso de Dados */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            2. Uso de Dados
                        </h2>
                        <p className="leading-relaxed">
                            Utilizamos as informações coletadas estritamente para:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Processar pedidos de filiação e verificar a elegibilidade dos membros;</li>
                            <li>Enviar relatórios de inteligência de mercado, newsletters e convites para eventos exclusivos;</li>
                            <li>Facilitar conexões comerciais estratégicas entre Brasil, China e América Latina;</li>
                            <li>Cumprir obrigações legais e regulatórias aplicáveis ao setor.</li>
                        </ul>
                    </section>

                    {/* 3. Compartilhamento */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            3. Compartilhamento de Dados
                        </h2>
                        <p className="leading-relaxed font-medium text-gray-900 mb-2">
                            Não vendemos dados pessoais.
                        </p>
                        <p className="leading-relaxed">
                            Compartilhamos informações estritamente necessárias apenas com parceiros logísticos, organizadores de missões comerciais ou entidades governamentais quando formalmente solicitado para trâmites de exportação, vistos ou credenciamento em eventos oficiais.
                        </p>
                    </section>

                    {/* 4. Segurança */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            4. Segurança da Informação
                        </h2>
                        <p className="leading-relaxed">
                            Adotamos protocolos rigorosos de segurança técnica e administrativa, incluindo criptografia e controle de acesso, para proteger as informações sensíveis contra acessos não autorizados, perda ou alteração indevida.
                        </p>
                    </section>

                    {/* 5. Seus Direitos */}
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-[#7c522e] mb-4">
                            5. Seus Direitos (LGPD)
                        </h2>
                        <p className="leading-relaxed">
                            Você tem o direito de solicitar a confirmação da existência de tratamento, o acesso, a correção de dados incompletos ou desatualizados, e a exclusão de seus dados pessoais a qualquer momento, entrando em contato conosco através dos nossos canais oficiais.
                        </p>
                    </section>

                    {/* 6. Contato do DPO */}
                    <section className="bg-gray-50 p-6 border-l-4 border-[#4a662d]">
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">
                            6. Encarregado de Dados (DPO)
                        </h2>
                        <p className="leading-relaxed">
                            Para exercer seus direitos ou esclarecer dúvidas sobre nossa Política de Privacidade, entre em contato com nosso Encarregado de Proteção de Dados:
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
