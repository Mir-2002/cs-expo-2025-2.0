import type { Metadata } from "next";
import {
  Audiowide,
  Poppins,
  Racing_Sans_One,
  Space_Mono,
  Stalinist_One,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stalinistOne = Stalinist_One({
  variable: "--font-stalinist-one",
  subsets: ["latin"],
  weight: "400",
});

const racingSansOne = Racing_Sans_One({
  variable: "--font-racing-sans-one",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CS Expo 2025 2.0",
  description: "Charting The Echoes Of Discovery Beyond The Cosmos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stalinistOne.variable} ${racingSansOne.variable} ${spaceMono.variable} ${audiowide.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
