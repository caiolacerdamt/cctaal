import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight, Link as LinkIcon, Cpu, Wifi } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import techHeroV2 from '../assets/tech_hero_v2.png';

const TecnologiaInovacao = () => {
    // Accordion State
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const strategies = [
        {
            title: "Digitalização e Automação Comercial",
            content: "Implementamos ferramentas que eliminam a fricção burocrática, digitalizando processos aduaneiros e automatizando o fluxo de documentação para exportadores."
        },
        {
            title: "Parcerias Internacionais de Inovação",
            content: "Estabelecemos pontes com hubs de tecnologia na China (Shenzhen/Xangai) e Vale do Silício para trazer o que há de mais avançado em AgTech para a América Latina."
        },
        {
            title: "Transparência e Inteligência de Dados",
            content: "Utilizamos Big Data e Blockchain para garantir a rastreabilidade da cadeia produtiva, oferecendo segurança jurídica e alimentar aos compradores globais."
        }
    ];

    const techCards = [
        {
            icon: LinkIcon, // Chain for Blockchain
            title: "Blockchain",
            description: "Rastreabilidade total do campo à mesa."
        },
        {
            icon: Cpu, // Brain/AI
            title: "AI & Big Data",
            description: "Previsibilidade de safras e análise de mercado."
        },
        {
            icon: Wifi, // Signal/IoT
            title: "IoT / Sensores",
            description: "Monitoramento climático e logístico em tempo real."
        }
    ];

    return (
        <div className="bg-[#f9f9f7] min-h-screen">
            {/* 1. Hero Section */}
            {/* 1. Hero Section */}
            <section className="relative w-full h-[70vh]">
                <img
                    src={techHeroV2}
                    alt="Tecnologia & Inovação"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Tecnologia & Inovação
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-100 font-light max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Impulsionando a eficiência e a competitividade do comércio internacional através da transformação digital.
                    </motion.p>
                </div>
            </section>

            {/* 2. Eixos Estratégicos (Intro) */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-6">
                            Eixos Estratégicos de Inovação
                        </h2>
                        <div className="w-24 h-[1px] bg-[#7c522e] mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            Impulsionamos o avanço tecnológico do comércio latino-americano, unindo inovação, governança e cooperação internacional. Conectamos empresas, startups e governos para desenvolver soluções digitais que simplificam operações, promovem transparência e fortalecem a competitividade regional.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Strategy Accordions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Col */}
                        <div className="lg:col-span-1">
                            <span className="text-[#4a662d] font-bold tracking-widest text-sm uppercase mb-2 block">
                                Metodologia
                            </span>
                            <h2 className="text-4xl font-serif font-bold text-[#1a1a1a] mb-6">
                                Fundamentos da <br /> Estratégia Global
                            </h2>
                            <p className="text-gray-500 font-light">
                                Como estruturamos o futuro do agronegócio através de pilares tecnológicos sólidos.
                            </p>
                        </div>

                        {/* Right Col: Accordions */}
                        <div className="lg:col-span-2 space-y-2">
                            {strategies.map((item, index) => {
                                const isOpen = activeAccordion === index;
                                return (
                                    <div key={index} className="border-b border-gray-200">
                                        <button
                                            onClick={() => setActiveAccordion(isOpen ? null : index)}
                                            className="w-full py-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors px-2"
                                        >
                                            <span className={`text-xl font-serif font-medium ${isOpen ? 'text-[#7c522e]' : 'text-gray-800'}`}>
                                                {item.title}
                                            </span>
                                            <span className={`text-[#7c522e] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                {isOpen ? <X /> : <Plus />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pb-8 text-gray-600 font-light leading-relaxed px-2 text-lg">
                                                        {item.content}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. AgTech Ecosystem Grid */}
            <section className="py-24 bg-[#f9f9f7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-4">
                            O Ecossistema AgTech
                        </h2>
                        <p className="text-gray-500">Tecnologias chave que moldam nossa operação</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {techCards.map((card, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-10 rounded-sm shadow-sm border border-transparent hover:border-[#4a662d] transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-[#f9f9f7] rounded-full flex items-center justify-center">
                                    <card.icon className="text-[#4a662d]" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{card.title}</h3>
                                <p className="text-gray-500 font-light">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Final */}
            <section className="bg-[#1a1a1a] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">
                        Sua empresa desenvolve tecnologia para o Agro?
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
                        Conecte-se ao nosso hub de inovação e leve sua solução para mercados internacionais.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#7c522e] hover:bg-[#634023] text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-lg"
                    >
                        Acesse o Núcleo de Inovação <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TecnologiaInovacao;
