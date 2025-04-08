import { supabase } from './supabaseClient';

export async function addEventDetails(title, description, date) {
  const { data, error } = await supabase
    .from('events')
    .insert([{ title, description, date }]);

  if (error) {
    console.error("❌ Failed to store event details:", error.message);
    return null;
  }

  console.log("✅ Event details stored:", data);
  return data[0];
}
