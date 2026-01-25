import { useTranslation } from 'react-i18next';
import { Globe, Scale, Users, Award } from 'lucide-react';

import elberImg from '../assets/team/elber_guimaraes.jpg';
import fernandoImg from '../assets/team/fernando_santos.png';
import raquelImg from '../assets/team/raquel_lacerda.jpg';
import ueltonImg from '../assets/team/uelton_lacerda.png';
import liaImg from '../assets/team/lia_tian.png';
import ricardoImg from '../assets/team/ricardo_profile.png';
import julesImg from '../assets/team/jules_queiroz.png';

const Chamber = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white min-h-screen">
            {/* Bloco 1: História e Origem */}
            <section className="bg-white flex flex-col">
                {/* Image Side - Banner */}
                <div className="w-full h-[50vh] relative">
                    <div className="absolute inset-0 bg-gray-900/10 z-10 w-full h-full"></div>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Institutional Architecture"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center px-6 lg:px-8 py-16">
                    <span className="text-[#7c522e] font-bold text-xs uppercase tracking-widest mb-4 block">{t('chamber.hero.label')}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a662d] mb-6">{t('chamber.hero.title')}</h2>

                    <div className="space-y-6">
                        <p className="text-lg md:text-xl font-serif text-[#1a1a1a] leading-snug">
                            {t('chamber.hero.description_intro')}
                        </p>

                        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line text-justify">
                            {t('chamber.hero.description_context')}
                        </p>

                        <div className="relative pl-5 border-l-2 border-[#4a662d]">
                            <p className="text-gray-800 text-base italic leading-relaxed whitespace-pre-line">
                                {t('chamber.hero.description_solution')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco 2: Valores Corporativos */}
            <section className="py-20 bg-[#f9f9f7]">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-[#4a662d]">{t('chamber.values.title')}</h2>
                        <div className="w-16 h-1 bg-[#7c522e] mx-auto mt-4 opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: t('chamber.values.cards.integration.title'),
                                text: t('chamber.values.cards.integration.text')
                            },
                            {
                                icon: Award,
                                title: t('chamber.values.cards.innovation.title'),
                                text: t('chamber.values.cards.innovation.text')
                            },
                            {
                                icon: Scale,
                                title: t('chamber.values.cards.transparency.title'),
                                text: t('chamber.values.cards.transparency.text')
                            },
                            {
                                icon: Users,
                                title: t('chamber.values.cards.diplomacy.title'),
                                text: t('chamber.values.cards.diplomacy.text')
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-[#7c522e]/30 transition-colors group">
                                <item.icon className="w-10 h-10 text-[#7c522e] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line text-justify">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bloco 3: Governança (Board Real) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-6">
                        <div>
                            <span className="text-[#7c522e] font-bold text-xs uppercase tracking-widest mb-2 block">{t('chamber.governance.label')}</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a662d]">{t('chamber.governance.title')}</h2>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md text-right mt-4 md:mt-0">
                            {t('chamber.governance.subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                name: "Chang Yung Kong",
                                role: t('chamber.governance.roles.president'),
                                desc: t('chamber.governance.descs.president'),
                                image: "/chang-profile.jpg"
                            },
                            {
                                name: "Elber Guimarães",
                                role: t('chamber.governance.roles.director_ops'),
                                desc: t('chamber.governance.descs.director_ops'),
                                image: elberImg
                            },
                            {
                                name: "Fernando dos Santos",
                                role: t('chamber.governance.roles.director_relations'),
                                desc: t('chamber.governance.descs.director_relations'),
                                image: fernandoImg
                            },
                            {
                                name: "Raquel Lacerda",
                                role: t('chamber.governance.roles.director_investments'),
                                desc: t('chamber.governance.descs.director_investments'),
                                image: raquelImg
                            },
                            {
                                name: "Uelton Lacerda",
                                role: t('chamber.governance.roles.director_compliance'),
                                desc: t('chamber.governance.descs.director_compliance'),
                                image: ueltonImg
                            },
                            {
                                name: "Lia Tian",
                                role: t('chamber.governance.roles.director_intl_relations'),
                                desc: t('chamber.governance.descs.director_intl_relations'),
                                image: liaImg
                            },
                            {
                                name: "Rafael Varela",
                                role: t('chamber.governance.roles.executive_member'),
                                desc: t('chamber.governance.descs.executive_member'),
                                image: ricardoImg
                            },
                            {
                                name: "Jules Queiroz e Silva",
                                role: t('chamber.governance.roles.legal_consultant'),
                                desc: t('chamber.governance.descs.legal_consultant'),
                                image: julesImg
                            }
                        ].map((member, index) => (
                            <div key={index} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="aspect-[3/4] bg-gray-100 rounded-sm mb-6 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#1a1a1a]">{member.name}</h3>
                                <p className="text-[#7c522e] text-xs font-bold uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-sm text-gray-500 font-light text-justify">
                                    {member.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Chamber;
