
// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// BACKUP DATA (Last Resort - Only used if DB is empty AND API fails)
const BACKUP_DATA = {
    currencies: {
        USDBRL: { bid: "5.152", pctChange: "0.15" },
        CNYBRL: { bid: "0.712", pctChange: "-0.22" }
    },
    marketData: {
        "ZS=F": { price: 1245.50, change: 1.42, time: Date.now() / 1000 },
        "ZC=F": { price: 442.25, change: -0.55, time: Date.now() / 1000 },
        "BZ=F": { price: 82.40, change: 0.85, time: Date.now() / 1000 },
        "^NDX": { price: 17850.00, change: 1.25, time: Date.now() / 1000 },
        "^BVSP": { price: 127000.00, change: 0.50, time: Date.now() / 1000 },
        "^GSPC": { price: 4950.00, change: 0.25, time: Date.now() / 1000 },
        "BTC-USD": { price: 45000.00, change: 1.10, time: Date.now() / 1000 },
        "BGI=F": { price: 240.00, change: 0.10, time: Date.now() / 1000 },
        "KC=F": { price: 235.00, change: -0.45, time: Date.now() / 1000 },
        "MOS": { price: 32.50, change: 0.05, time: Date.now() / 1000 }
    }
};

serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const AWESOME_API_KEY = Deno.env.get('AWESOME_API_KEY');
        if (!AWESOME_API_KEY) {
            console.warn("AWESOME_API_KEY not set in Secrets!");
        }

        // 1. Init Supabase Admin Client
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
        const supabase = createClient(supabaseUrl, supabaseKey);

        // 2. Market Hours Logic (Brasilia Time)
        const isMarketOpen = (): boolean => {
            const now = new Date();
            const brTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
            const brDate = new Date(brTimeStr);

            const day = brDate.getDay();
            const hour = brDate.getHours();

            if (day === 0 || day === 6) return false;
            if (hour < 9 || hour >= 18) return false;
            return true;
        };

        const marketOpen = isMarketOpen();
        const freshnessThreshold = marketOpen ? 60 * 1000 : 12 * 60 * 60 * 1000;

        // 3. Check Cache (Database)
        const checkCache = async () => {
            const { data, error } = await supabase
                .from('market_cache')
                .select('*')
                .eq('id', 1)
                .single();

            if (error || !data) return null;
            return data;
        };

        const cachedRow = await checkCache();
        const cachedData = cachedRow?.data as any;

        const nowMs = Date.now();
        const cacheAge = cachedRow ? (nowMs - new Date(cachedRow.updated_at).getTime()) : 99999999;
        const isFresh = cacheAge < freshnessThreshold;

        // SCENARIO 1: Cache is valid -> Serve immediately
        if (isFresh && cachedData) {
            console.log(`Serving fresh cache (Market Open: ${marketOpen}, Age: ${Math.round(cacheAge / 1000)}s)`);
            return new Response(
                JSON.stringify({ ...cachedData, source: marketOpen ? 'cache-hit-live' : 'cache-hit-closed' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        console.log(`Cache stale (Market Open: ${marketOpen}), fetching live data...`);

        // 4. Fetch Live Data

        // A. AwesomeAPI (Currencies)
        let currencyPromise = Promise.resolve(null);
        if (AWESOME_API_KEY) {
            currencyPromise = fetch('https://economia.awesomeapi.com.br/last/USD-BRL,CNY-BRL', {
                headers: { 'x-api-key': AWESOME_API_KEY }
            }).then(res => {
                if (!res.ok) throw new Error(`AwesomeAPI ${res.status}`);
                return res.json();
            }).catch(err => {
                console.error("Currency Fetch Error:", err);
                return null;
            });
        }

        // B. Yahoo Finance
        const processYahooSymbol = async (symbol: string) => {
            try {
                const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
                const res = await fetch(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept': '*/*',
                        'Origin': 'https://finance.yahoo.com',
                        'Referer': `https://finance.yahoo.com/quote/${symbol}/`
                    }
                });

                if (!res.ok) throw new Error(`Status ${res.status}`);
                const data = await res.json();
                const meta = data?.chart?.result?.[0]?.meta;

                if (!meta) throw new Error("No metadata");

                return {
                    symbol: symbol,
                    price: meta.regularMarketPrice,
                    change: meta.regularMarketPrice - meta.chartPreviousClose,
                    pctChange: ((meta.regularMarketPrice - meta.chartPreviousClose) / meta.chartPreviousClose) * 100,
                    time: meta.regularMarketTime
                };
            } catch (err) {
                console.error(`Failed to fetch ${symbol}:`, err);
                return null;
            }
        };

        const symbols = [
            'ZS=F',   // Soja
            'ZC=F',   // Milho
            'BZ=F',   // Petróleo Brent
            '^NDX',   // NASDAQ
            '^BVSP',  // IBOVESPA
            '^GSPC',  // S&P 500
            'BTC-USD',// Bitcoin
            'BGI=F',  // Boi Gordo (Monitoramento)
            'KC=F'    // Café (Substituindo Fertilizantes)
        ];
        const yahooPromises = symbols.map(sym => processYahooSymbol(sym));
        const yahooResults = await Promise.all(yahooPromises);

        const validYahooData = yahooResults.filter(item => item !== null);
        const [currencyData] = await Promise.all([currencyPromise]);

        // 5. Construct New Data Object
        const newData: any = {
            currencies: {},
            marketData: {},
            timestamp: new Date().toISOString()
        };

        let successfulFetch = false;

        // Populate Currencies
        if (currencyData) {
            newData.currencies = currencyData;
            successfulFetch = true;
        } else if (cachedData?.currencies) {
            // Keep old data if fetch failed
            newData.currencies = cachedData.currencies;
        }

        // Populate Commodities & Indices
        // Identify which symbols we successfully fetched
        const fetchedSymbols = validYahooData.map((d: any) => d.symbol);

        if (validYahooData.length > 0) {
            validYahooData.forEach((item: any) => {
                newData.marketData[item.symbol] = {
                    price: item.price,
                    change: item.pctChange,
                    time: item.time
                };
            });
            successfulFetch = true;
        }

        // Fill gaps using Cache (DB) logic
        // If we didn't fetch a symbol, check if we have it in DB
        symbols.forEach(key => {
            if (!newData.marketData[key]) {
                if (cachedData?.marketData?.[key]) {
                    // Carry over old value from DB
                    newData.marketData[key] = cachedData.marketData[key];
                }
            }
        });

        // 6. Update Decision Logic
        // We only update if obtained at least ONE piece of fresh data
        if (successfulFetch) {
            await supabase.from('market_cache').upsert({
                id: 1,
                data: newData,
                updated_at: new Date().toISOString()
            });
            console.log("Cache updated with new data");

            return new Response(
                JSON.stringify({ ...newData, source: 'live' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // SCENARIO 2: Fetch completely failed -> Serve Stale Cache (DB)
        if (cachedData) {
            console.log("Live fetch failed, serving stale DB cache");
            return new Response(
                JSON.stringify({ ...cachedData, source: 'cache-stale' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // SCENARIO 3: Total Blackout (No Fetch, No DB) -> Use Hardcoded Backup
        // This only happens on the very first run ever if API is down
        console.log("Total failure, serving hardcoded backup");
        return new Response(
            JSON.stringify({ ...BACKUP_DATA, source: 'backup-hardcoded' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error: any) {
        console.error("Critical Edge Error:", error);
        return new Response(
            JSON.stringify({ ...BACKUP_DATA, source: 'error-fallback', error: error.message }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
        );
    }
})
