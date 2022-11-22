import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pwyqcvtiasuyccpmwoai.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3eXFjdnRpYXN1eWNjcG13b2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxMzY5OTMsImV4cCI6MTk4NDcxMjk5M30.Vc03tStbcdvxc6cHco5GJWoqH-gJpJeA7TbmGlI5QCw';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
