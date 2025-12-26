import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, Globe, FileBarChart, Briefcase, Award, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [activeTab, setActiveTab] = useState<'membership' | 'contact'>('membership');

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
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
                        Faça parte da Elite do Agro Global.
                    </h2>

                    <div className="space-y-6 mt-12">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097]">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">Conexão Internacional</h3>
                                <p className="text-sm text-gray-200 mt-1">Acesso direto a parceiros estratégicos na China e em toda a América Latina.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097]">
                                <FileBarChart size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">Inteligência de Mercado</h3>
                                <p className="text-sm text-gray-200 mt-1">Relatórios exclusivos, dados on-chain e análises de tendências globais.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097]">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">Apoio Técnico</h3>
                                <p className="text-sm text-gray-200 mt-1">Suporte especializado em regulação, compliance e processos de exportação.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#7c522e]/20 p-2 rounded-lg border border-[#7c522e]/50 text-[#e0c097]">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#e0c097]">Visibilidade Premium</h3>
                                <p className="text-sm text-gray-200 mt-1">Selo de membro CCTAAL e acesso a networking de alto nível governamental e privado.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-16 space-y-4 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-gray-200">
                        <MapPin size={20} className="text-[#e0c097]" />
                        <span className="text-sm">Av. Brigadeiro Faria Lima, 3477 - São Paulo, Brasil</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                        <Mail size={20} className="text-[#e0c097]" />
                        <span className="text-sm">membership@cctaal.org</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                        <Phone size={20} className="text-[#e0c097]" />
                        <span className="text-sm">+55 11 3000-0000</span>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT PANEL: Interactive Form (60%) */}
            <div className="lg:w-3/5 p-8 lg:p-20 flex flex-col justify-center">
                <div className="max-w-2xl mx-auto w-full">

                    {/* TABS HEADER */}
                    <div className="flex space-x-8 border-b border-gray-200 mb-10">
                        <button
                            onClick={() => setActiveTab('membership')}
                            className={`pb-4 text-lg font-medium transition-all relative ${activeTab === 'membership' ? 'text-[#4a662d]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Tornar-se Membro
                            {activeTab === 'membership' && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4a662d]" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('contact')}
                            className={`pb-4 text-lg font-medium transition-all relative ${activeTab === 'contact' ? 'text-[#4a662d]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Fale Conosco
                            {activeTab === 'contact' && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4a662d]" />
                            )}
                        </button>
                    </div>

                    {/* FORM AREA */}
                    <div className="relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'membership' ? (
                                <motion.div
                                    key="membership"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-600">Nome Completo</label>
                                            <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Seu nome" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-600">Cargo</label>
                                            <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Diretor, CEO..." />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Email Corporativo</label>
                                        <input type="email" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="nome@empresa.com" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-600">Empresa</label>
                                            <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Nome da organização" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-600">País de Atuação</label>
                                            <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Brasil, China..." />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Interesse Principal</label>
                                        <select className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors text-gray-700 cursor-pointer">
                                            <option value="" disabled selected>Selecione uma opção</option>
                                            <option value="exportacao">Exportação & Logística</option>
                                            <option value="tecnologia">Tecnologia & Inovação</option>
                                            <option value="investimento">Investimento & Parcerias</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>

                                    <div className="pt-6">
                                        <button className="w-full bg-[#4a662d] text-white py-4 rounded-sm font-bold text-lg hover:bg-[#3d5425] transition-all shadow-lg flex items-center justify-center gap-2 group">
                                            Solicitar Filiação
                                            <CheckCircle2 size={20} className="group-hover:scale-110 transition-transform" />
                                        </button>
                                        <p className="text-center text-xs text-gray-400 mt-4 italic">
                                            Sua solicitação será analisada pelo nosso conselho deliberativo. Entraremos em contato em até 48h.
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="contact"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Seu Nome</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Digite seu nome" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Seu Email</label>
                                        <input type="email" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Digite seu email" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Assunto</label>
                                        <input type="text" className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors" placeholder="Motivo do contato" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-600">Mensagem</label>
                                        <textarea className="w-full bg-transparent border-b border-gray-300 focus:border-[#7c522e] py-2 outline-none transition-colors min-h-[120px] resize-none" placeholder="Como podemos ajudar?" />
                                    </div>

                                    <div className="pt-6">
                                        <button className="w-full border-2 border-[#7c522e] text-[#7c522e] py-3 rounded-sm font-bold text-lg hover:bg-[#7c522e] hover:text-white transition-all flex items-center justify-center gap-2 group">
                                            Enviar Mensagem
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
