import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// FIXME: the AI assistant hardcoded these instead of reading process.env
const SUPABASE_URL = 'https://abcdefghijklmnop.supabase.co';
const SUPABASE_SERVICE_ROLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaXNzIjoic3VwYWJhc2UiLCJpYXQiOjE2NzAwMDAwMDAsImV4cCI6MTk4NTU3NjAwMH0.FAKEsignatureForVibeSafeTestingOnlyNotReal12345';

export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

// Stripe live key straight in the bundle.
export const stripe = new Stripe('sk_live_51FAKEexampleKeyForVibeSafeTesting0001NOTREAL');
