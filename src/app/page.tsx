// cd SWE-Over-Under
// npm run dev

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function landingPage() {
  /*
Logic to be applied here,
- This is to be the sign in page
- Supabase authentication for users
- If user is signed in, then redirect to /home
- If not, then sign up or sign in


*/
  const router = useRouter();

  useEffect(() => {
    router.push("/signin");
  }, [router]);

  return <div></div>;
}
