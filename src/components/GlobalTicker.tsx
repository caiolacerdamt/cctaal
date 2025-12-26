import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const GlobalTicker = () => {
    const tickers = [
        { symbol: 'SOJA (CBOT)', price: 'US$ 12.40', change: '+1.2%', trend: 'up' },
        { symbol: 'MILHO (B3)', price: 'R$ 58.20', change: '-0.5%', trend: 'down' },
        { symbol: 'BOI GORDO', price: 'R$ 240.00', change: '0.0%', trend: 'flat' },
        { symbol: 'USD/BRL', price: '5.15', change: '+0.1%', trend: 'up' },
        { symbol: 'CNY/BRL', price: '0.72', change: '+0.05%', trend: 'up' },
        { symbol: 'PETRÓLEO BRENT', price: 'US$ 82.00', change: '+0.8%', trend: 'up' },
        { symbol: 'FERTILIZANTES (FOB)', price: 'US$ 340.00', change: '-1.2%', trend: 'down' },
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
