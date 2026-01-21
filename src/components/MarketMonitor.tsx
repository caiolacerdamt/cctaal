import { useMarketData } from '../hooks/useMarketData';
import { Wheat, Sprout, DollarSign, Anchor, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MarketMonitor = () => {
    const { t } = useTranslation();
    const { data, loading, error } = useMarketData();

    // Helper to format currency
    const formatCurrency = (val: number | undefined, prefix = 'R$ ') => {
        if (val === undefined || isNaN(val)) return '...';
        return `${prefix}${val.toFixed(2)}`;
    };

    // Helper to format price with 2 decimals
    const formatPrice = (val: number | undefined) => {
        if (val === undefined || isNaN(val)) return '...';
        return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    // Helper to render trend
    const renderTrend = (change: number | string | undefined) => {
        if (!change) return null;

        let val = 0;
        let text = '';

        if (typeof change === 'string') {
            val = parseFloat(change);
            text = change + (change.includes('%') ? '' : '%');
        } else {
            val = change;
            text = change > 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`;
        }

        const isPositive = val >= 0;

        return (
            <span className={`flex items-center text-xs font-bold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                {isPositive ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                {text}
            </span>
        );
    };

    if (loading) {
        return (
            <section className="bg-background py-16 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full py-12 flex justify-center items-center bg-white rounded-sm border border-gray-100 shadow-sm">
                        <div className="flex flex-col items-center animate-pulse">
                            <Activity className="text-[#7c522e] mb-2" size={32} />
                            <span className="text-sm text-gray-400 font-mono">{t('market.loading')}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-background py-16 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full py-12 text-center bg-red-50 rounded-sm border border-red-100">
                        <p className="text-red-600 text-sm">{t('market.unavailable')}: {error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-background py-16 md:py-32 border-b border-gray-200">
            <div className="max-w-[1600px] mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-0">
                    <div>
                        <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#7c522e] flex items-center gap-3 md:gap-4">
                            <Activity className="text-[#7c522e] w-8 h-8 md:w-12 md:h-12" />
                            {t('market.title')}
                        </h2>
                        <p className="text-xs md:text-lg text-gray-500 mt-2 md:mt-3 uppercase tracking-widest font-bold ml-1">
                            {t('market.subtitle')}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 self-end md:self-auto">
                        <span className="relative flex h-3 w-3 md:h-5 md:w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 md:h-5 md:w-5 bg-green-500"></span>
                        </span>
                        <span className="text-xs md:text-base font-mono text-green-700 font-bold bg-green-50 px-3 py-1 md:px-4 md:py-2 rounded-sm border border-green-100">
                            {t('market.live_data')}
                        </span>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

                    {/* COL 1: COMMODITIES */}
                    <div className="bg-white p-6 md:p-10 rounded-sm border border-gray-200 shadow-sm hover:border-[#7c522e]/30 transition-colors flex flex-col justify-between">
                        <h4 className="text-gray-400 text-xs md:text-base font-bold uppercase tracking-widest mb-6 md:mb-10 border-b border-gray-100 pb-3 md:pb-4">{t('market.agricultural_commodities')}</h4>

                        {/* SOJA */}
                        <div className="mb-6 md:mb-10 group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="p-2 md:p-3 bg-[#f5f5f0] rounded text-[#7c522e] group-hover:bg-[#7c522e] group-hover:text-white transition-colors">
                                        <Sprout className="w-5 h-5 md:w-6 md:h-6" />
                                    </span>
                                    <div>
                                        <span className="block text-base md:text-xl font-bold text-gray-900">{t('market.soy')}</span>
                                        <span className="block text-[10px] md:text-sm text-gray-500 font-mono">{t('market.cbot_mar25')}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl md:text-3xl font-mono font-bold text-gray-900 group-hover:text-[#7c522e] transition-colors">
                                        {formatPrice(data?.marketData['ZS=F']?.price)}
                                    </span>
                                    {renderTrend(data?.marketData['ZS=F']?.change)}
                                </div>
                            </div>
                        </div>

                        {/* MILHO */}
                        <div className="group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="p-2 md:p-3 bg-[#f5f5f0] rounded text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                                        <Wheat className="w-5 h-5 md:w-6 md:h-6" />
                                    </span>
                                    <div>
                                        <span className="block text-base md:text-xl font-bold text-gray-900">{t('market.corn')}</span>
                                        <span className="block text-[10px] md:text-sm text-gray-500 font-mono">{t('market.cbot_spot')}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl md:text-3xl font-mono font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                        {formatPrice(data?.marketData['ZC=F']?.price)}
                                    </span>
                                    {renderTrend(data?.marketData['ZC=F']?.change)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COL 2: CÂMBIO */}
                    <div className="bg-white p-6 md:p-10 rounded-sm border border-gray-200 shadow-sm hover:border-[#7c522e]/30 transition-colors flex flex-col justify-between">
                        <h4 className="text-gray-400 text-xs md:text-base font-bold uppercase tracking-widest mb-6 md:mb-10 border-b border-gray-100 pb-3 md:pb-4">{t('market.fx_macro')}</h4>

                        {/* USD/BRL */}
                        <div className="mb-6 md:mb-10 group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="p-2 md:p-3 bg-[#f5f5f0] rounded text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
                                    </span>
                                    <div>
                                        <span className="block text-base md:text-xl font-bold text-gray-900">{t('market.usd_brl')}</span>
                                        <span className="block text-[10px] md:text-sm text-gray-500 font-mono">{t('market.ptax_closed')}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl md:text-3xl font-mono font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                        {formatCurrency(Number(data?.currencies?.USDBRL?.bid), 'R$ ')}
                                    </span>
                                    {renderTrend(data?.currencies?.USDBRL?.pctChange)}
                                </div>
                            </div>
                        </div>

                        {/* CNY/BRL */}
                        <div className="group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="p-2 md:p-3 bg-[#f5f5f0] rounded text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors flex items-center justify-center w-[36px] h-[36px] md:w-[48px] md:h-[48px]">
                                        <span className="text-xl md:text-3xl font-bold font-serif leading-none mt-[-2px]">¥</span>
                                    </span>
                                    <div>
                                        <span className="block text-base md:text-xl font-bold text-gray-900">{t('market.cny_brl')}</span>
                                        <span className="block text-[10px] md:text-sm text-gray-500 font-mono">{t('market.china_spot')}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl md:text-3xl font-mono font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                        {formatCurrency(Number(data?.currencies?.CNYBRL?.bid), 'R$ ') || '...'}
                                    </span>
                                    {renderTrend(data?.currencies?.CNYBRL?.pctChange)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COL 3: LOGÍSTICA */}
                    <div className="bg-white p-6 md:p-10 rounded-sm border border-gray-200 shadow-sm hover:border-[#7c522e]/30 transition-colors flex flex-col justify-between">
                        <h4 className="text-gray-400 text-xs md:text-base font-bold uppercase tracking-widest mb-6 md:mb-10 border-b border-gray-100 pb-3 md:pb-4">{t('market.global_logistics')}</h4>

                        {/* NASDAQ (Proxy) */}
                        <div className="mb-6 md:mb-10 group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="p-2 md:p-3 bg-[#f5f5f0] rounded text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                                    </span>
                                    <div>
                                        <span className="block text-base md:text-xl font-bold text-gray-900">{t('market.nasdaq')}</span>
                                        <span className="block text-[10px] md:text-sm text-gray-500 font-mono">{t('market.tech_index')}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl md:text-3xl font-mono font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {formatPrice(data?.marketData['^NDX']?.price)}
                                    </span>
                                    {renderTrend(data?.marketData['^NDX']?.change)}
                                </div>
                            </div>
                        </div>

                        {/* BRENT OIL */}
                        <div className="group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <span className="p-2 md:p-3 bg-[#f5f5f0] rounded text-gray-800 group-hover:bg-black group-hover:text-white transition-colors">
                                        <Anchor className="w-5 h-5 md:w-6 md:h-6" />
                                    </span>
                                    <div>
                                        <span className="block text-base md:text-xl font-bold text-gray-900">{t('market.brent_oil')}</span>
                                        <span className="block text-[10px] md:text-sm text-gray-500 font-mono">{t('market.global_energy')}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl md:text-3xl font-mono font-bold text-gray-900 group-hover:text-black transition-colors">
                                        US$ {formatPrice(data?.marketData['BZ=F']?.price)}
                                    </span>
                                    {renderTrend(data?.marketData['BZ=F']?.change)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-[#fcfcfa] px-6 md:px-8 py-3 md:py-4 border-t border-gray-100 flex justify-between items-center text-[10px] md:text-sm text-gray-400 font-mono mt-0">
                    <span>{t('market.source')}</span>
                    <span>{t('market.updated')}: {data?.timestamp ? new Date(data.timestamp).toLocaleTimeString() : '...'}</span>
                </div>
            </div>
        </section>
    );
};

export default MarketMonitor;
