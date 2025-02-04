import type { Metadata } from "next";
import { Roboto } from "next/font/google";  
import "./globals.css";


const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-roboto',  
});

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
