const SUPABASE_URL = "https://istrnsicleopzbsrapsw.supabase.co";

const SUPABASE_KEY = "sb_publishable_U_bWR5hSNYslkj4A0XPdJA_m2GMWInY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = supabaseClient;
