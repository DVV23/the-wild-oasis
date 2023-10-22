import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://joduriuhvncecatgivlt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZHVyaXVodm5jZWNhdGdpdmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NTkyOTQsImV4cCI6MjAxMjUzNTI5NH0.pq26vY3rcYO7siDxvo482HnfgGe7N_9Wp6Mi1Mh_xf4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
