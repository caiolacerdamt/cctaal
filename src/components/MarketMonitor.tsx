import { TrendingUp, TrendingDown, Activity, Anchor, Wheat, BadgeDollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MarketMonitor = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-background py-16 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
                            <Activity className="text-secondary" />
                            {t('market.title')}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest">{t('market.subtitle')}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono font-bold text-green-700 bg-green-50 px-2 py-1 rounded border border-green-100 uppercase">{t('market.live_data')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Commodities */}
                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Wheat size={64} className="text-primary" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('market.agricultural_commodities')}</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-dark">{t('market.soy')}</p>
                                    <p className="text-xs text-gray-500">{t('market.cbot_mar25')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold text-green-600">1,245.50</p>
                                    <p className="text-xs text-green-600 flex justify-end items-center gap-1">+1.4% <TrendingUp size={10} /></p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-dark">{t('market.corn')}</p>
                                    <p className="text-xs text-gray-500">{t('market.b3_spot')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold text-red-500">58.20</p>
                                    <p className="text-xs text-red-500 flex justify-end items-center gap-1">-0.5% <TrendingDown size={10} /></p>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Sparkline */}
                        <div className="mt-6 h-12 flex items-end gap-1">
                            {[40, 60, 45, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors"></div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Câmbio & Macro */}
                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BadgeDollarSign size={64} className="text-secondary" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('market.fx_macro')}</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-dark">{t('market.usd_brl')}</p>
                                    <p className="text-xs text-gray-500">{t('market.ptax_closed')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold text-dark">5.152</p>
                                    <p className="text-xs text-green-600 flex justify-end items-center gap-1">+0.1% <TrendingUp size={10} /></p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-dark">{t('market.selic')}</p>
                                    <p className="text-xs text-gray-500">{t('market.brazil')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold text-dark">11.25%</p>
                                    <p className="text-xs text-gray-400 flex justify-end items-center gap-1">= <span className="text-[10px]">{t('market.stable')}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Sparkline */}
                        <div className="mt-6 h-12 flex items-end gap-1">
                            {[50, 52, 51, 53, 55, 54, 56, 58, 57, 59].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-secondary/20 rounded-t-sm hover:bg-secondary/40 transition-colors"></div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3: Logística */}
                    <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Anchor size={64} className="text-blue-900" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('market.maritime_logistics')}</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-dark">{t('market.bdi_index')}</p>
                                    <p className="text-xs text-gray-500">{t('market.baltic_dry')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold text-dark">1,850</p>
                                    <p className="text-xs text-red-500 flex justify-end items-center gap-1">-25 pts <TrendingDown size={10} /></p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100"></div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-dark">{t('market.route_santos_shanghai')}</p>
                                    <p className="text-xs text-gray-500">{t('market.freight_spot')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono font-bold text-dark">US$ 3,200</p>
                                    <p className="text-xs text-green-600 flex justify-end items-center gap-1">+1.2% <TrendingUp size={10} /></p>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Sparkline */}
                        <div className="mt-6 h-12 flex items-end gap-1">
                            {[70, 65, 60, 55, 50, 45, 50, 55, 60, 55].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-900/20 rounded-t-sm hover:bg-blue-900/40 transition-colors"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketMonitor;
