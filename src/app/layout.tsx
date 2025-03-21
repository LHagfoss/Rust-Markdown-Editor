import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const googleFont = Playfair_Display({
  variable: "--googleFont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cecilie Skogstad",
  description: "Cecilie Skogstad - Gestaltterapeut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
