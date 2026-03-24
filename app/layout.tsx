import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Amiri } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${amiri.variable} antialiased bg-[#050b18] text-white`}>
        {children}
      </body>
    </html>
  );
}
