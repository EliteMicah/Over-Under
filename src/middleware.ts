import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("Middleware - Session:", !!session);
  console.log("Middleware - Path:", req.nextUrl.pathname);
  console.log("Middleware - Cookies:", req.cookies.toString());

  // If this is a fresh login response, don't redirect yet
  const isAuthResponse = req.cookies.has("supabase-auth-token") && !session;
  if (isAuthResponse) {
    console.log("Middleware - Detected auth in progress, allowing navigation");
    return res;
  }

  // List of public routes that don't require authentication
  const publicRoutes = ["/signin", "/signup"];

  if (!session && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // If user is signed in and tries to access auth pages, redirect to home
  if (session && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
