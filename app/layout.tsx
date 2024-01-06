import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ColorPicker from "@/components/colorPicker";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "Portfolio | Joshua Rodrigues",
  description: "The frontend guy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-amber-100"}>
        <Navbar />
        <main className="  mt-16 flex flex-col items-center justify-center p-5 md:m-5 md:mt-20 lg:m-16 text-black">
          <Header />
          <section className="w-full flex justify-end">
            <ColorPicker items={["Yellow", "Orange", "Green"]} />
          </section>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
