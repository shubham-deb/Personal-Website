import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shubham Deb — Backend Engineer & Trail-Chaser",
  description:
    "Senior Software Engineer at Charles River Development (State Street), building trading and portfolio-optimization microservices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
