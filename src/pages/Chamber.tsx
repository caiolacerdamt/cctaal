import { useTranslation } from 'react-i18next';
import { Globe, Scale, Users, CheckCircle, Award } from 'lucide-react';

import elberImg from '../assets/team/elber_guimaraes.png';
import fernandoImg from '../assets/team/fernando_santos.png';
import raquelImg from '../assets/team/raquel_lacerda.jpg';
import ueltonImg from '../assets/team/uelton_lacerda.jpg';
import liaImg from '../assets/team/lia_tian.png';

const Chamber = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white min-h-screen">
            {/* Bloco 1: História e Origem */}
            <section className="bg-white lg:h-screen flex flex-col lg:flex-row overflow-hidden items-center">
                {/* Content Side */}
                <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 py-12 lg:py-0">
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

                {/* Image Side */}
                <div className="lg:w-1/2 w-full h-[400px] lg:h-full relative">
                    <div className="absolute inset-0 bg-gray-900/10 z-10 w-full h-full"></div>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Institutional Architecture"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-3 mb-6">
                                <Scale className="text-[#7c522e]" size={32} />
                                <h2 className="text-3xl font-serif font-bold text-[#4a662d]">{t('chamber.compliance.title')}</h2>
                            </div>
                            <h3 className="text-xl text-[#1a1a1a] font-medium mb-6">
                                {t('chamber.compliance.subtitle')}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {t('chamber.compliance.description')}
                            </p>
                            {/* <button className="text-[#4a662d] font-bold border-b-2 border-[#4a662d] pb-1 hover:text-[#3d5425] transition-colors">
                                {t('chamber.compliance.cta')}
                            </button> */}
                        </div>

                        <div className="lg:w-1/3 bg-white p-8 rounded-sm shadow-sm border border-gray-200 w-full">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{t('chamber.compliance.label')}</h4>
                            <ul className="space-y-4">
                                {[
                                    t('chamber.compliance.list.legal'),
                                    t('chamber.compliance.list.accountability'),
                                    t('chamber.compliance.list.responsibility'),
                                    t('chamber.compliance.list.security')
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
