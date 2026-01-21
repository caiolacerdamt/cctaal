
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export interface MarketData {
    currencies: {
        USDBRL: { bid: string; pctChange: string };
        CNYBRL: { bid: string; pctChange: string };
    };
    marketData: {
        [key: string]: {
            price: number;
            change: number;
            time: string;
        };
    };
    timestamp: string;
}

export const useMarketData = () => {
    const [data, setData] = useState<MarketData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                // CHANGED: Read directly from DB (Passive/Zero Delay)
                // The Cron Job updates this table in the background.
                const { data, error } = await supabase
                    .from('market_cache')
                    .select('*')
                    .eq('id', 1)
                    .single();

                if (error) throw error;

                if (data && data.data) {
                    setData(data.data as MarketData);
                }
            } catch (err: any) {
                console.error('Error fetching market data from DB:', err);
                setError(err.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();

        // Refresh locally every 30 seconds just to keep UI fresh
        // (Even if DB only updates every 15m, this catches the change when it happens)
        const interval = setInterval(fetchMarketData, 30000);
        return () => clearInterval(interval);
    }, []);

    return { data, loading, error };
};
