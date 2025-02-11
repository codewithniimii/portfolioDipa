import type { Metadata } from "next";
import { Roboto } from "next/font/google";  
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto',  
});

export const metadata: Metadata = {
  title: " Portfolio website",
  description: "This is my potfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
