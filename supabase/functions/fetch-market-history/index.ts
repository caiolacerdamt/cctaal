
// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { symbol, range = '1mo', interval = '90m', update_all = false } = await req.json();

        // 1. Init Supabase Client
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
        const supabase = createClient(supabaseUrl, supabaseKey);

        // --- BATCH UPDATE MODE (Cron Job) ---
        if (update_all) {
            console.log("Starting Batch Update for All Assets...");
            const ASSETS = [
                { symbol: 'ZS=F', range: '1mo', interval: '1d' },       // Soy
                { symbol: 'ZC=F', range: '1mo', interval: '1d' },       // Corn
                { symbol: 'KC=F', range: '1mo', interval: '1d' },       // Coffee
                { symbol: 'BZ=F', range: '1mo', interval: '1d' },       // Brent
                { symbol: 'USDBRL=X', range: '1mo', interval: '1d' },   // BRL
                { symbol: 'CNY=X', range: '1mo', interval: '1d' },      // CNY
            ];

            const results = [];

            for (const asset of ASSETS) {
                try {
                    console.log(`Processing ${asset.symbol}...`);
                    // Fetch from Yahoo
                    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${asset.symbol}?range=${asset.range}&interval=${asset.interval}`;
                    const res = await fetch(yahooUrl, {
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                        }
                    });

                    if (!res.ok) {
                        console.error(`Failed to fetch ${asset.symbol}: ${res.status}`);
                        results.push({ symbol: asset.symbol, status: 'error', error: `Yahoo Status ${res.status}` });
                        continue;
                    }

                    const data = await res.json();
                    const result = data.chart.result[0];
                    if (!result || !result.timestamp) throw new Error('Invalid data format');

                    // Transform
                    const quotes = result.indicators.quote[0];
                    const timestamps = result.timestamp;
                    const chartData = timestamps.map((ts: number, i: number) => ({
                        time: ts,
                        open: quotes.open[i],
                        high: quotes.high[i],
                        low: quotes.low[i],
                        close: quotes.close[i]
                    })).filter((item: any) => item.open != null && item.close != null);

                    // Update DB
                    const { error: upsertError } = await supabase
                        .from('market_history_cache')
                        .upsert({
                            symbol: asset.symbol,
                            data: chartData,
                            updated_at: new Date().toISOString()
                        });

                    if (upsertError) throw upsertError;

                    results.push({ symbol: asset.symbol, status: 'updated', count: chartData.length });

                } catch (err: any) {
                    console.error(`Error updating ${asset.symbol}:`, err);
                    results.push({ symbol: asset.symbol, status: 'error', error: err.message });
                }

                // Small delay to be nice to Yahoo
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            return new Response(
                JSON.stringify({ message: "Batch update completed", results }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // --- SINGLE MODE (Frontend) ---
        if (!symbol) {
            throw new Error('Symbol is required');
        }

        // 2. Check Cache
        const { data: cachedRow, error: dbError } = await supabase
            .from('market_history_cache')
            .select('*')
            .eq('symbol', symbol)
            .single();

        let shouldFetch = true;

        if (cachedRow && !dbError) {
            const lastUpdate = new Date(cachedRow.updated_at).getTime();
            const now = Date.now();
            const cacheDuration = 30 * 60 * 1000; // 30 minutes cache

            if (now - lastUpdate < cacheDuration) {
                shouldFetch = false;
                console.log(`Serving cached history for ${symbol}`);
                return new Response(
                    JSON.stringify({ data: cachedRow.data, source: 'cache' }),
                    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );
            }
        }

        // 3. Fetch from Yahoo Finance if needed (Fallback if Cron missed)
        if (shouldFetch) {
            console.log(`Fetching fresh history for ${symbol}...`);
            const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${range}&interval=${interval}`;

            try {
                const res = await fetch(yahooUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    }
                });

                if (!res.ok) {
                    throw new Error(`Yahoo Status ${res.status}`);
                }

                const data = await res.json();
                const result = data.chart.result[0];

                if (!result || !result.timestamp) {
                    throw new Error('Invalid data format from Yahoo');
                }

                // Transform data for lightweight-charts
                const quotes = result.indicators.quote[0];
                const timestamps = result.timestamp;

                const chartData = timestamps.map((ts: number, i: number) => ({
                    time: ts,
                    open: quotes.open[i],
                    high: quotes.high[i],
                    low: quotes.low[i],
                    close: quotes.close[i]
                })).filter((item: any) => item.open != null && item.close != null); // Filter incomplete candles

                // 4. Update Cache
                const { error: upsertError } = await supabase
                    .from('market_history_cache')
                    .upsert({
                        symbol: symbol,
                        data: chartData,
                        updated_at: new Date().toISOString()
                    });

                if (upsertError) {
                    console.error('Cache update failed:', upsertError);
                }

                return new Response(
                    JSON.stringify({ data: chartData, source: 'live' }),
                    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                );

            } catch (fetchError: any) {
                console.error("Fetch failed, attempting fallback to stale cache", fetchError);

                // FAIL-SAFE: If we have ANY cache (even if old), return it instead of erroring
                if (cachedRow) {
                    console.warn(`Serving stale cache for ${symbol} due to fetch error.`);
                    return new Response(
                        JSON.stringify({ data: cachedRow.data, source: 'cache-stale-error-fallback' }),
                        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                    );
                }

                // If no cache exists and fetch failed, rethrow
                throw fetchError;
            }
        }

    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        );
    }
});
