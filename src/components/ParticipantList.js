
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function ParticipantList ({ eventId }) {
   const [participants, setParticipants] = useState ([])

   useEffect (() => {
     const fetchParticipants = async () => {
       const { data, error } = await supabase
         .from('participants')
         .select('user_id, is_active, bet')
         .eg('event_id', eventId)


         if(!error) {
           setParticipants(data)

        }
     }
       fetchParticipants()
     }, [eventId])

     return(
        <div>
          <h2>Participants</h2>
          <ul>
             {participants.map((p, i) => (
                <li key={i}>
                     {p.user_id} | Active: {p.is_active ? "Yes" : "No"} | Bet: {p.bet ?? "Not set"}
                </li>
             ))}
          </ul>
        </div>
    )

}