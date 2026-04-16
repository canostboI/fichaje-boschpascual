const SUPABASE_URL = "https://istrnsicleopzbsrapsw.supabase.co";

const SUPABASE_KEY = "TU_CLAVE_PUBLICABLE_AQUI";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = supabaseClient;
