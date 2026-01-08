## ADDED Requirements
### Requirement: Real-Time Market Data
The system SHALL display real-time (or buffered) market data for currencies, agro stocks, and commodities.

#### Scenario: Data Fetching and Display
- **WHEN** the user loads the application
- **THEN** the Global Ticker SHALL display the latest market data from the `market_tickers` database table.
- **AND** if the data fetch fails, it SHALL fall back to hardcoded mock data.

### Requirement: Market Data Updates
The system SHALL update market data periodically using a scheduled background process.

#### Scenario: Edge Function Execution
- **WHEN** the scheduled interval (15 minutes) triggers
- **THEN** the edge function `fetch-market-data` SHALL fetch latest quotes from Brapi.dev
- **AND** upsert the results into `market_tickers` table.
