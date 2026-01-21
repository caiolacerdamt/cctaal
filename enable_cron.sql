
-- 1. Enable key extensions (Run this in Supabase SQL Editor)
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- 2. Schedule the job (Every 15 mins, Mon-Fri, 9am-6pm UTC approx)
-- Adjust '12-21' based on UTC vs BRT (BRT is UTC-3, so 09:00 BRT = 12:00 UTC)
select cron.schedule(
    'market-data-refresh',
    '*/15 12-21 * * 1-5', 
    $$
    select
      net.http_post(
          -- REPLACE WITH YOUR PROJECT URL
          url:='https://chyjvqbfgebkovkrfyni.supabase.co/functions/v1/fetch-market-data',
          
          -- SERVICE_ROLE_KEY is needed to bypass RLS if strictly secured, 
          -- but typically Anon key works if function allows it. 
          -- Prefer Service Role for internal cron jobs.
          headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
      ) as request_id;
    $$
);

-- 3. Validation query (Check if job is scheduled)
select * from cron.job;
