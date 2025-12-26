import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsData';
import { ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SingleNewsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const article = newsData.find(item => item.id === id);
    const relatedNews = newsData.filter(item => item.id !== id).slice(0, 2); // Get 2 other random-ish articles

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f9f9f7]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Artigo não encontrado</h2>
                    <Link to="/noticias" className="text-[#4a662d] font-bold underline">Voltar para notícias</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f9f9f7] min-h-screen pb-20">
            {/* Nav Back */}
            <div className="bg-white border-b border-gray-100 sticky top-20 z-40">
                <div className="max-w-4xl mx-auto px-4 h-12 flex items-center">
                    <button
                        onClick={() => navigate('/noticias')}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#4a662d] transition-colors"
                    >
                        <ArrowLeft size={16} /> Voltar para Insights
                    </button>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block border border-[#7c522e] text-[#7c522e] px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                        {article.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-500 text-sm border-t border-b border-gray-200 py-4 max-w-lg mx-auto">
                        <span className="flex items-center gap-1"><Clock size={14} /> {article.date}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-medium text-[#4a662d]">Por Redação CCTAAL</span>
                    </div>
                </div>

                {/* Main Image */}
                <motion.div
                    className="mb-12 rounded-sm overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src={article.image} alt={article.title} className="w-full h-auto object-cover max-h-[500px]" />
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Share Sidebar (Desktop) */}
                    <div className="hidden lg:flex lg:col-span-2 flex-col gap-4 sticky top-40 h-fit">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Compartilhar</span>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                            <Linkedin size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] transition-all">
                            <Twitter size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2] transition-all">
                            <Facebook size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all">
                            <Share2 size={18} />
                        </button>
                    </div>

                    {/* Text Body */}
                    <div className="lg:col-span-8">
                        <div
                            className="prose prose-lg prose-headings:font-serif prose-headings:text-[#1a1a1a] prose-p:text-gray-700 prose-p:leading-8 prose-img:rounded-sm focus:outline-none"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Tags / Footer of article */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-sm">#Agro</span>
                                <span className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-sm">#BrasilChina</span>
                                <span className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-sm">#{article.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related News */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-8 border-l-4 border-[#7c522e] pl-4">
                    Continue Lendo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedNews.map(news => (
                        <Link key={news.id} to={`/noticias/${news.id}`} className="group flex bg-white rounded-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                            <div className="w-1/3 relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${news.image})` }}
                                />
                            </div>
                            <div className="w-2/3 p-6 flex flex-col justify-center">
                                <span className="text-xs text-[#7c522e] font-bold uppercase mb-2">{news.category}</span>
                                <h4 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#4a662d] transition-colors leading-tight mb-2">
                                    {news.title}
                                </h4>
                                <span className="text-xs text-gray-400">{news.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleNewsPage;
