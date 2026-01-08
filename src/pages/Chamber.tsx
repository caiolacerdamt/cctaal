import { Globe, Scale, Users, CheckCircle, Award } from 'lucide-react';

const Chamber = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Bloco 1: História e Origem */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-4 -left-4 w-24 h-24 bg-[#4a662d]/10 -z-10 rounded-full blur-2xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                                alt="Sede Corporativa"
                                className="w-full h-auto rounded-sm shadow-xl"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-[#7c522e] font-bold text-sm uppercase tracking-widest mb-4 block">Nossa Origem</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4a662d] mb-6">Uma Ponte Estratégica</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A CCTAAL foi fundada em janeiro de 2017, em Brasília, com o propósito de fortalecer a integração entre o comércio, a tecnologia e o agronegócio da América Latina.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Desde então, tem atuado como uma instituição estratégica na promoção de oportunidades entre países, empresas e investidores, conectando inovação e desenvolvimento sustentável a ciclos econômicos globais.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco 2: Valores Corporativos */}
            <section className="py-20 bg-[#f9f9f7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#4a662d]">Pilares Institucionais</h2>
                        <div className="w-16 h-1 bg-[#7c522e] mx-auto mt-4 opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "Integração Estratégica",
                                text: "Fortalecemos relações comerciais e tecnológicas entre países."
                            },
                            {
                                icon: Award,
                                title: "Inovação Contínua",
                                text: "Impulsionamos soluções que aumentam a competitividade do setor."
                            },
                            {
                                icon: Scale,
                                title: "Transparência e Ética",
                                text: "Atuamos com integridade e clareza em todas as relações."
                            },
                            {
                                icon: Users,
                                title: "Diplomacia Econômica",
                                text: "Articulamos setores públicos e privados para o desenvolvimento global."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#7c522e]/30 transition-colors group">
                                <item.icon className="w-10 h-10 text-[#7c522e] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bloco 3: Governança (Board Real) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-6">
                        <div>
                            <span className="text-[#7c522e] font-bold text-xs uppercase tracking-widest mb-2 block">Liderança Executiva</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a662d]">Governança Corporativa</h2>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md text-right mt-4 md:mt-0">
                            Líderes com ampla experiência em comércio exterior, diplomacia e agronegócio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Chang Yung Kong",
                                role: "Presidente",
                                desc: "Líder em Diplomacia Econômica e Integração Internacional.",
                                image: "/chang-profile.jpg"
                            },
                            {
                                name: "Mariana Alves",
                                role: "Primeira Vice-Presidenta",
                                desc: "Especialista em comércio exterior e inovação sustentável.",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                            },
                            {
                                name: "Eduardo Farias",
                                role: "Vice-Presidência Honorária",
                                desc: "Empresário com experiência em cooperação internacional.",
                                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                            },
                            {
                                name: "Ricardo Tanaka",
                                role: "Secretário-Geral",
                                desc: "Profissional em governança e articulação institucional.",
                                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
                            }
                        ].map((member, index) => (
                            <div key={index} className="group">
                                <div className="aspect-[3/4] bg-gray-100 rounded-sm mb-6 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#1a1a1a]">{member.name}</h3>
                                <p className="text-[#7c522e] text-xs font-bold uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-sm text-gray-500 font-light">
                                    {member.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bloco 4: Compliance e Integridade */}
            <section className="py-24 bg-[#f4f4f5] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-3 mb-6">
                                <Scale className="text-[#7c522e]" size={32} />
                                <h2 className="text-3xl font-serif font-bold text-[#4a662d]">Compliance e Integridade</h2>
                            </div>
                            <h3 className="text-xl text-[#1a1a1a] font-medium mb-6">
                                Nosso compromisso com a transparência e segurança jurídica.
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                O Programa de Compliance assegura que todas as atividades da CCTAAL sigam padrões éticos e legais rigorosos, promovendo práticas que fortalecem a confiança entre nossos parceiros e a credibilidade internacional da instituição.
                            </p>
                            <button className="text-[#4a662d] font-bold border-b-2 border-[#4a662d] pb-1 hover:text-[#3d5425] transition-colors">
                                Ler Código de Ética →
                            </button>
                        </div>

                        <div className="lg:w-1/3 bg-white p-8 rounded-sm shadow-sm border border-gray-200 w-full">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Pilares de Integridade</h4>
                            <ul className="space-y-4">
                                {[
                                    "Conformidade Legal e Normativa",
                                    "Prestação de Contas Transparente",
                                    "Responsabilidade Institucional",
                                    "Segurança de Dados e Informação"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-[#4a662d] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chamber;
