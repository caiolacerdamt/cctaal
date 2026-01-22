import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GlobalTicker = () => {
    const { t } = useTranslation();

    const tickers = [
        { symbol: t('market.soy'), price: 'US$ 10.64', change: '+1.1%', trend: 'up' },
        { symbol: t('market.bitcoin'), price: 'US$ 89.959', change: '+1.7%', trend: 'up' },
        { symbol: t('market.corn'), price: 'R$ 54.20', change: '-0.5%', trend: 'down' },
        { symbol: t('market.nasdaq'), price: '23.515', change: '-0.1%', trend: 'down' },
        { symbol: t('market.ibovespa'), price: '171.932', change: '+0.5%', trend: 'up' },
        { symbol: t('market.sp500'), price: '6.875', change: '+1.2%', trend: 'up' },
        { symbol: t('market.boi'), price: 'R$ 252.00', change: '+0.8%', trend: 'up' },
        { symbol: t('market.usd_brl'), price: '5.38', change: '-0.9%', trend: 'down' },
        { symbol: t('market.cny_brl'), price: '0.75', change: '+0.1%', trend: 'up' },
        { symbol: t('market.fertilizer'), price: 'US$ 850.00', change: '-1.5%', trend: 'down' },
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
                            {ticker.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalTicker;
