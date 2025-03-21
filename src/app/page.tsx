// cd SWE-Over-Under
// npm run dev

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/config/supabaseClient";

export default function landingPage() {
  /*
Logic to be applied here,
- This is to be the landing page
- Check if user is signed in with a session
- If user is signed in via supabase session, then redirect to /home
- If not, then router.push to signup
*/
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.push("/home");
      } else {
        router.push("/signin");
      }
    };

    checkUser();
  }, [router]);

  return <div></div>;
}
