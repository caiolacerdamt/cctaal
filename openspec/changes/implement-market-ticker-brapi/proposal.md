# Change: Implementation of Buffered Real-Time Market Ticker via Brapi and Supabase

## Why
The current CCTAAL website uses hardcoded/mock data for the global market ticker (top bar). To convey institutional credibility ("Bloomberg aesthetic"), we need actual market data. However, fetching directly from the client-side exposes API keys and risks hitting rate limits immediately due to high traffic.

## What Changes
Implement a **Proxy/Cache Pattern** using Supabase as the intermediary layer.
- **Source:** Brapi.dev API (for B3 Stocks, Futures, and Currency pairs).
- **Storage:** Supabase PostgreSQL Database (Table: `market_tickers`).
- **Updater:** Supabase Edge Function scheduled via Cron (runs every 15-30 minutes).
- **Frontend:** React component subscribes/fetches data from the Supabase table.

## Impact
- **New Capability:** `market-data`
- **Affected Components:** `GlobalTicker.tsx`
- **New Infrastructure:** Supabase Table `market_tickers`, Supabase Edge Function `fetch-market-data`
