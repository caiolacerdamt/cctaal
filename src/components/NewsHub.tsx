import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewsHub = () => {
    // 4 quick news items for the "The Wire" / "Radar de Mercado"
    const news = [
        { source: 'Reuters Agro', title: 'Safra 2025/26 promete recorde de produtividade com nova tecnologia de sementes.', date: 'Há 2 horas' },
        { source: 'Bloomberg', title: 'Porto de Santos bate recorde histórico de movimentação mensal.', date: 'Há 4 horas' },
        { source: 'CNN Business', title: 'Acordo Mercosul-Ásia avança em pautas de infraestrutura verde.', date: 'Há 5 horas' },
        { source: 'Institucional', title: 'CCTAAL lança programa de aceleração para AgTechs brasileiras.', date: 'Ontem' },
    ];

    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                    <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">News & Insights</h2>
                    <Link to="/noticias" className="group flex items-center gap-2 text-[#7c522e] font-bold text-xs uppercase tracking-widest hover:text-[#4a662d] transition-colors">
                        Ver todas as notícias
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Highlight (Left - 2 Cols) */}
                    <Link to="/noticias/1" className="lg:col-span-2 group cursor-pointer block">
                        <div className="relative overflow-hidden rounded-sm mb-4 h-72">
                            {/* Cinematic Image: Global Trade / Logistics */}
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                alt="Mercado Global"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Minimal Overlay for readability if needed, but keeping it clean for editorial look */}
                        </div>

                        {/* Editorial Content */}
                        <div className="pr-0 lg:pr-8">
                            <span className="block text-[#7c522e] text-[10px] font-bold uppercase tracking-widest mb-2">
                                Mercado & Estratégia
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mb-2 leading-tight group-hover:text-[#4a662d] transition-colors duration-300">
                                A Nova Rota da Seda Digital: Como a tecnologia está redefinindo as exportações.
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3 font-light line-clamp-2">
                                Análise exclusiva sobre o impacto da digitalização nos corredores logísticos e a redução de custos para o agronegócio nacional.
                            </p>
                            <span className="inline-block text-[#1a1a1a] font-medium text-xs hover:underline decoration-[#7c522e] underline-offset-4">
                                Ler análise completa →
                            </span>
                        </div>
                    </Link>

                    {/* Side List "The Wire" (Right - 1 Col) */}
                    <div className="lg:col-span-1 border-l border-gray-100 pl-0 lg:pl-8 lg:-mt-1">
                        <h3 className="text-sm font-serif font-bold text-gray-400 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#4a662d] rounded-full animate-pulse"></span>
                            Radar de Mercado
                        </h3>

                        <div className="flex flex-col">
                            {news.map((item, index) => (
                                <Link
                                    to={`/noticias/wire-${index}`}
                                    key={index}
                                    className="group py-3 border-b border-gray-100 first:pt-0 last:border-0"
                                >
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-[#7c522e] text-[10px] font-bold uppercase tracking-wider">
                                            {item.source}
                                        </span>
                                        <span className="text-gray-400 text-[10px] font-mono">
                                            {item.date}
                                        </span>
                                    </div>
                                    <motion.h4
                                        className="text-sm font-medium text-[#1a1a1a] leading-snug group-hover:text-[#4a662d] transition-colors"
                                        whileHover={{ x: 2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {item.title}
                                    </motion.h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsHub;
