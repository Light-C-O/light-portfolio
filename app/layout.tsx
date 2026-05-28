import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import {Coiny, Dangrek, Nunito, Audiowide, Anta, Changa} from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const coiny = Coiny({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-coiny" 
});
const dangrek = Dangrek({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-dangrek" 
});
const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito" 
});
const audiowide = Audiowide({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-audiowide" 
});
const anta = Anta({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-anta" 
});
const changa = Changa({ 
  subsets: ["latin"], 
  variable: "--font-changa" 
});

export const metadata: Metadata = {
  title: "L . C . O",
  description: "Creative Computing student · Building things for the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body className={`${coiny.variable} ${dangrek.variable} ${nunito.variable} ${audiowide.variable} ${anta.variable} ${changa.variable} h-full antialiased`}>
            <Providers>
              {children}
            </Providers>
          </body>
        
      </html>
    
  );
}
