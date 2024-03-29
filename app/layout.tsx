import Script from 'next/script'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DApp Bootcamp Frontends",
  description: "Interactive frontend for buildstation DApp bootcamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer data-domain="buildstation.org" src="https://analytics.pyhash.com/js/script.js"></Script>
      <body className={inter.className}>
        <Providers>
          {children}   
          <Toaster />  
        </Providers>
      </body>
    </html>
  );
}
