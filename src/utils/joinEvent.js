
import { supabase } from '../lib/supabaseClient'

export async function joinEvent ({ eventCode, userId }) {
   
    const { data: event, error: findError } = await supabase
       .from('events')
       .select('id')
       .eg('code', eventCode)
       .single()


    if (findError || !event) {

      return { success: false, messsge: "Event not found" }
    }

    const { error: insertError } = await supabase.from('participants').insert({
       event_id: event.id,
       user_id: userId,
       is_active: true,
       bet: null

})

if (insertError) {
 
  return { success: false, message: "Join failure"}

}

return { success: true, eventId: event.id }

}