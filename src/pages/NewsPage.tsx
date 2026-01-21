import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NewsPage = () => {
    const { t, i18n } = useTranslation();

    // Helper to get translation
    const getTranslated = (item: any) => {
        const lang = i18n.language.split('-')[0];
        if (item.translations && item.translations[lang]) {
            return { ...item, ...item.translations[lang] };
        }
        return { ...item, ...item.translations['pt'] };
    };

    // Apply translation to all data first
    const localizedData = newsData.map(getTranslated);

    const featured = localizedData[0];
    const gridNews = localizedData.slice(1);

    return (
        <div className="bg-[#f9f9f7] min-h-screen pb-20">
            {/* Header */}
            <div className="bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {t('news_page.hero.title')}
                </motion.h1>
                <motion.p
                    className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t('news_page.hero.subtitle')}
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                {/* Hero News Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link to={`/noticias/${featured.id}`} className="group block">
                        <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row h-auto lg:h-[500px]">
                            <div className="lg:w-2/3 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${featured.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="bg-[#7c522e]/10 text-[#7c522e] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {featured.category}
                                    </span>
                                    <span className="text-gray-400 text-xs flex items-center gap-1">
                                        <Calendar size={12} /> {featured.date}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#4a662d] transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-600 mb-8 line-clamp-4 leading-relaxed font-light">
                                    {featured.summary}
                                </p>
                                <span className="flex items-center gap-2 text-[#4a662d] font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform">
                                    {t('news_page.ui.read_analysis')} <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {gridNews.map((news, index) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/noticias/${news.id}`} className="group flex flex-col h-full bg-white rounded-sm border border-gray-200 hover:shadow-lg hover:border-[#7c522e]/30 transition-all duration-300">
                                <div className="aspect-video relative overflow-hidden rounded-t-sm">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${news.image})` }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-[#7c522e] px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                                            {news.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-xs text-gray-400 mb-3">{news.date}</p>
                                    <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-3 group-hover:text-[#4a662d] transition-colors line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {news.summary}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-[#4a662d] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            {t('news_page.ui.read_more')} <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
