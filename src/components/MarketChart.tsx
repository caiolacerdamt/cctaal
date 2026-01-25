
import { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';
import type { IChartApi } from 'lightweight-charts';
import { supabase } from '../supabase';


const TABS = [
    { id: 'ZS=F', labelKey: 'market.soy' },
    { id: 'ZC=F', labelKey: 'market.corn' },
    { id: 'KC=F', labelKey: 'market.coffee' },
    { id: 'BZ=F', labelKey: 'market.brent_oil' },
];

const RANGES = [
    { label: '1D', value: '1d', interval: '15m' },
    { label: '5D', value: '5d', interval: '60m' },
    { label: '1M', value: '1mo', interval: '1d' },
    { label: '3M', value: '3mo', interval: '1d' },
    { label: '1A', value: '1y', interval: '1d' },
    { label: '5A', value: '5y', interval: '1wk' },
];

const CURRENCIES = [
    { label: 'USD', id: 'USD', symbol: '$' },
    { label: 'BRL', id: 'BRL', symbol: 'R$' },
    { label: 'CNY', id: 'CNY', symbol: '¥' },
];

// Unit Specs keys
const ASSET_SPECS_KEYS: Record<string, string> = {
    'ZS=F': 'market.specs.us_cents_bushel',
    'ZC=F': 'market.specs.us_cents_bushel',
    'KC=F': 'market.specs.us_cents_pound',
    'BZ=F': 'market.specs.usd_barrel',
    'USDBRL=X': 'market.specs.brl',
};

import { useTranslation } from 'react-i18next';

const MarketChart = () => {
    const { t } = useTranslation();
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    const [activeTab, setActiveTab] = useState(TABS[0]);
    const [activeRange] = useState(RANGES[2]); // Default 1M
    const [activeCurrency, setActiveCurrency] = useState(CURRENCIES[0]); // Default USD
    const [loading, setLoading] = useState(true);

    // Data State
    const [chartData, setChartData] = useState<any[]>([]);

    // Helper: Find closest timestamp
    const findClosest = (target: number, data: any[]) => {
        if (!data || data.length === 0) return null;
        let closest = data[0];
        let minDiff = Math.abs(target - closest.time);

        for (let i = 1; i < data.length; i++) {
            const diff = Math.abs(target - data[i].time);
            if (diff < minDiff) {
                minDiff = diff;
                closest = data[i];
            }
        }
        return closest;
    };

    // Helper: Fetch Helper
    const getData = async (symbol: string, range: string, interval: string) => {
        try {
            const { data } = await supabase.functions.invoke('fetch-market-history', {
                body: { symbol, range, interval }
            });
            return data?.data || [];
        } catch (err) {
            console.error("Supabase Invoke Error:", err);
            return [];
        }
    };

    // Fetch Data Effect
    useEffect(() => {
        const fetchHistory = async () => {
            setLoading(true);
            setChartData([]); // Reset on change
            try {
                // 1. Fetch Asset Data
                const assetData = await getData(activeTab.id, activeRange.value, activeRange.interval);

                if (!assetData || assetData.length === 0) {
                    return;
                }

                let finalData = assetData;

                // 2. Currency Conversion (Simple Currency-Only, no Weight Conversion)
                if (activeCurrency.id !== 'USD' && activeTab.id.includes('=F')) {
                    const conversionSymbol = activeCurrency.id === 'BRL' ? 'USDBRL=X' : 'CNY=X';
                    const currencyData = await getData(conversionSymbol, activeRange.value, activeRange.interval);

                    if (currencyData && currencyData.length > 0) {
                        finalData = assetData.map((candle: any) => {
                            const currencyCandle = findClosest(candle.time, currencyData);
                            const rate = currencyCandle ? currencyCandle.close : 1;

                            // Simple Price Conversion: Price * Rate
                            // Note: ZS/ZC/KC are in CENTS.
                            // If user selects BRL, do we show "Cents of Real" or "Reais"?
                            // Usually "Reais".
                            // 1000 US Cents = 10 USD. 10 USD = 50 BRL.
                            // So: (Price / 100) * Rate.

                            let multiplier = rate; // Default direct mul

                            if (activeTab.id === 'ZS=F' || activeTab.id === 'ZC=F' || activeTab.id === 'KC=F') {
                                multiplier = rate * 0.01; // Convert Cents to Whole Unit first
                            }

                            return {
                                time: candle.time,
                                open: candle.open * multiplier,
                                high: candle.high * multiplier,
                                low: candle.low * multiplier,
                                close: candle.close * multiplier,
                            };
                        });
                    }
                }

                if (finalData) {
                    const uniqueData = Array.from(new Map(finalData.map((item: any) => [item.time, item])).values())
                        .sort((a: any, b: any) => a.time - b.time);
                    setChartData(uniqueData);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchHistory();
    }, [activeTab, activeRange, activeCurrency]);

    // Chart Rendering Effect
    useEffect(() => {
        if (!chartContainerRef.current) return;

        // Clear container
        chartContainerRef.current.innerHTML = '';

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: 'white' },
                textColor: '#333',
                fontFamily: "'Inter', sans-serif",
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
            grid: {
                vertLines: { visible: false },
                horzLines: { color: '#f0f3fa' },
            },
            rightPriceScale: {
                borderVisible: false,
                scaleMargins: {
                    top: 0.1,
                    bottom: 0.1,
                },
            },
            timeScale: {
                borderVisible: false,
                timeVisible: true,
                secondsVisible: false,
            },
            crosshair: {
                vertLine: {
                    labelVisible: false,
                },
            },
            localization: {
                priceFormatter: (p: number) => {
                    return activeCurrency.symbol + ' ' + p.toFixed(2);
                }
            }
        });

        // Use v5 syntax: addSeries(SeriesType, options)
        const newSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#22c55e',     // Standard Green
            downColor: '#ef4444',   // Standard Red
            borderVisible: false,
            wickUpColor: '#22c55e',
            wickDownColor: '#ef4444',
        });

        if (chartData.length > 0) {
            newSeries.setData(chartData);
            chart.timeScale().fitContent();
        }

        chartRef.current = chart;

        const handleResize = () => {
            if (chartContainerRef.current) {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };

    }, [chartData, activeTab, activeCurrency]); // Re-render if currency symbol changes

    return (
        <div className="space-y-4 h-full">
            {/* Custom Chart Section */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Header Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 p-4 gap-4 flex-wrap">

                    <div className="flex flex-col w-full md:w-auto">
                        {/* Tabs (Assets) */}
                        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-2 md:mb-0 pb-1">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap flex-shrink-0 ${activeTab.id === tab.id
                                        ? `bg-gray-900 text-white`
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {t(tab.labelKey)}
                                </button>
                            ))}
                        </div>
                        {/* Specification Label */}
                        <div className="text-[10px] text-gray-400 font-medium px-1 flex items-center gap-1">
                            <span>{t('market.specs.unit')}:</span>
                            <span className="text-gray-600 font-bold uppercase truncate max-w-[200px]">
                                {activeCurrency.id === 'USD'
                                    ? t(ASSET_SPECS_KEYS[activeTab.id] || 'USD')
                                    : activeCurrency.label + ' / ' + (t(ASSET_SPECS_KEYS[activeTab.id])?.split(' / ')[1] || 'UNIT')
                                }
                            </span>
                        </div>
                    </div>

                    {/* Right Controls: Range & Currency */}
                    <div className="flex items-center gap-4 flex-shrink-0 ml-auto md:ml-0">
                        {/* Ranges Removed per User Request */}

                        {/* Currency Toggle */}
                        <div className="flex items-center gap-1 border-l border-gray-200 pl-4">
                            {CURRENCIES.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setActiveCurrency(c)}
                                    className={`text-[10px] font-bold px-2 py-1 rounded transition-colors whitespace-nowrap ${activeCurrency.id === c.id
                                        ? 'bg-green-100 text-green-700'
                                        : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chart Container */}
                <div className="relative h-full w-full min-h-[500px]">
                    {loading && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    )}
                    <div ref={chartContainerRef} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default MarketChart;
