import { supabase } from './supabaseClient';

export async function addEventParameters(eventId, min, max, betLimit) {
  const { data, error } = await supabase
    .from('event_parameters')
    .insert([
      {
        event_id: eventId,
        min_participants: min,
        max_participants: max,
        bet_limit: betLimit
      }
    ]);

  if (error) {
    console.error("❌ Failed to store event parameters:", error.message);
    return null;
  }

  console.log("✅ Parameters stored:", data);
  return data[0];
}
