import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import {AppState} from 'react-native';

const supabaseURL = 'https://yntvkoxeyrkclqecyqtp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludHZrb3hleXJrY2xxZWN5cXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDAyNTgsImV4cCI6MjA1ODA3NjI1OH0.zOhFeZS9-vUO3UOpPGhr_0wqsqgsHO-Qbw73iYXWdEA';

export const supabase = createClient(supabaseURL, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
