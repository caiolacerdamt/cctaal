import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMarketData } from '../hooks/useMarketData';

const GlobalTicker = () => {
    const { t } = useTranslation();
    const { data } = useMarketData();

    // Helper: format price
    const fmt = (val: number | undefined, prefix = '') => {
        if (!val) return '...';
        return `${prefix}${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Helper: format change
    const fmtChange = (val: number | string | undefined) => {
        if (!val) return { text: '...', trend: 'neutral' };
        const num = typeof val === 'string' ? parseFloat(val) : val;
        return {
            text: num > 0 ? `+${num.toFixed(2)}%` : `${num.toFixed(2)}%`,
            trend: num > 0 ? 'up' : num < 0 ? 'down' : 'neutral'
        };
    };

    // Mapping of exact 10 items
    const tickers = [
        {
            symbol: t('market.ibovespa'),
            price: fmt(data?.marketData['^BVSP']?.price),
            ...fmtChange(data?.marketData['^BVSP']?.change)
        },
        {
            symbol: t('market.sp500'),
            price: fmt(data?.marketData['^GSPC']?.price),
            ...fmtChange(data?.marketData['^GSPC']?.change)
        },
        {
            symbol: t('market.nasdaq'),
            price: fmt(data?.marketData['^NDX']?.price),
            ...fmtChange(data?.marketData['^NDX']?.change)
        },
        {
            symbol: t('market.usd_brl'),
            price: `R$ ${fmt(Number(data?.currencies?.USDBRL?.bid))}`,
            ...fmtChange(data?.currencies?.USDBRL?.pctChange)
        },
        {
            symbol: t('market.cny_brl'),
            price: `R$ ${fmt(Number(data?.currencies?.CNYBRL?.bid))}`,
            ...fmtChange(data?.currencies?.CNYBRL?.pctChange)
        },
        {
            symbol: t('market.soy'),
            price: `US$ ${fmt(data?.marketData['ZS=F']?.price)}`,
            ...fmtChange(data?.marketData['ZS=F']?.change)
        },
        {
            symbol: t('market.corn'),
            price: `US$ ${fmt(data?.marketData['ZC=F']?.price)}`,
            ...fmtChange(data?.marketData['ZC=F']?.change)
        },
        {
            symbol: t('market.brent_oil'),
            price: `US$ ${fmt(data?.marketData['BZ=F']?.price)}`,
            ...fmtChange(data?.marketData['BZ=F']?.change)
        },
        {
            symbol: t('market.coffee'),
            price: `US$ ${fmt(data?.marketData['KC=F']?.price)}`,
            ...fmtChange(data?.marketData['KC=F']?.change)
        },
        {
            symbol: t('market.bitcoin'),
            price: `US$ ${fmt(data?.marketData['BTC-USD']?.price)}`,
            ...fmtChange(data?.marketData['BTC-USD']?.change)
        },
    ];

    return (
        <div className="bg-[#1a1a1a] text-white py-2 overflow-hidden border-b border-primary/20 relative z-50">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...tickers, ...tickers, ...tickers].map((ticker, index) => (
                    <div key={index} className="flex items-center space-x-2 mx-6 font-mono text-xs tracking-wider">
                        <span className="font-bold text-gray-400">{ticker.symbol}</span>
                        <span className="text-gray-200">{ticker.price}</span>
                        <span className={`flex items-center ${ticker.trend === 'up' ? 'text-green-500' :
                            ticker.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                            }`}>
                            {ticker.trend === 'up' ? <TrendingUp size={12} className="mr-1" /> :
                                ticker.trend === 'down' ? <TrendingDown size={12} className="mr-1" /> :
                                    <Minus size={12} className="mr-1" />}
                            {ticker.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalTicker;
