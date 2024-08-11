import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";
import GlobalBar from "./components/GlobalBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "MoneyBuddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link className="rounded-full h-3 w-3"  rel="icon" type="image/svg+xml"
    href="https://img.freepik.com/premium-vector/alphabet-letter-icon-logo-mb-bm_724865-195.jpg" /></head>
      <Providers>
        
        <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950`}>
          <GlobalBar/>
          {children}
        </body>
      </Providers>
    </html>
  );
}
