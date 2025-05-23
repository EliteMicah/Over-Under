import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Modak } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modak",
});

export const metadata: Metadata = {
  title: "Over Under, a Next.js App",
  description:
    "Created by Kierstin Havens, Sofia Spradley, Micah Woodring, and Wenbo Wang",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${modak.variable} antialiased`}
      >
        <AuthProvider>
          {children} <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
