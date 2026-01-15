import { useTranslation, Trans } from 'react-i18next';
import { TrendingUp, Wheat, Globe2, BarChart3 } from 'lucide-react';
import TradingChart from '../components/TradingChart';

const Intelligence = () => {
    const { t } = useTranslation();
    const stats = [
        { label: t('intelligence.stats.gdp'), value: 'R$ 11,8 bi', sub: t('intelligence.stats.trillions'), trend: '+2.9%', icon: TrendingUp },
        { label: t('intelligence.stats.growth'), value: '+1.4%', sub: t('intelligence.stats.driven_by'), trend: t('intelligence.stats.positive'), icon: Wheat },
        { label: t('intelligence.stats.exports'), value: 'US$ 164,4 bi', sub: t('intelligence.stats.of_total'), trend: t('intelligence.stats.record'), icon: Globe2 },
        { label: t('intelligence.stats.share'), value: '24%', sub: t('intelligence.stats.agribusiness'), trend: t('intelligence.stats.stable'), icon: BarChart3 },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <header className="mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">{t('intelligence.header.title')}</h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    {t('intelligence.header.description')}
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                <stat.icon size={24} />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.trend}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-dark mb-1">{stat.value}</h3>
                        <p className="text-xs text-secondary font-medium">{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Analysis Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-sm border border-gray-100">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">{t('intelligence.analysis.title')}</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            {t('intelligence.analysis.p1')}
                        </p>
                        <p>
                            {t('intelligence.analysis.p2')}
                        </p>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                                <span>
                                    <Trans i18nKey="intelligence.analysis.list.structural" components={{ 0: <strong /> }} />
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                                <span>
                                    <Trans i18nKey="intelligence.analysis.list.productivity" components={{ 0: <strong /> }} />
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                                <span>
                                    <Trans i18nKey="intelligence.analysis.list.risk_return" components={{ 0: <strong /> }} />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="h-full min-h-[400px] flex items-center justify-center">
                    <TradingChart />
                </div>
            </div>
        </div>
    );
};

export default Intelligence;
