import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "StyleIt — AI-Powered Meeting Compliance Reports",
  description:
    "Turn any meeting recording into a compliance-ready, formatted minutes report. AI-powered transcription, speaker analysis, and risk assessment for French works-council (CSE) meetings.",
  keywords: [
    "meeting minutes",
    "compliance reports",
    "CSE",
    "AI transcription",
    "speaker analysis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-tint text-ink font-sans">
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
      </body>
    </html>
  );
}
