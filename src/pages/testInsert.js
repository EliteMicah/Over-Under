import React from 'react';
import { addEventDetails } from '../supabase/addEventDetails';
import { addEventParameters } from '../supabase/addEventParameters';

export default function TestInsertPage() {
  const testInsert = async () => {
    const event = await addEventDetails("Test Match", "This is a test", "2025-05-01T20:00:00");

    if (event) {
      const params = await addEventParameters(event.id, 2, 10, 500);
      console.log("Inserted Event + Params:", event, params);
      alert("Success! Check your Supabase table.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Insert Page</h1>
      <button onClick={testInsert}>Test Insert</button>
    </div>
  );
}
