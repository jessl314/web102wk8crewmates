import { createClient } from '@supabase/supabase-js'
const URL = "https://adenmrdplmkiydtmaesq.supabase.co"
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log(URL)
console.log(API_KEY)

export const supabase = createClient(URL, API_KEY)
