import type { Metadata } from "next";
import { Anton, DM_Sans, Amiri } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Big display title — ILM RETREAT
const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

// UI elements, buttons, labels
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Arabic text
const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ilm Retreat — TMU MSA",
  description: "A full-day Islamic knowledge conference hosted by TMU MSA.",
  openGraph: {
    title: "Ilm Retreat — TMU MSA",
    description: "A full-day Islamic knowledge conference hosted by TMU MSA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${anton.variable} ${dmSans.variable} ${amiri.variable} antialiased bg-[#0B0B1E] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
