import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ColorPicker from "@/components/colorPicker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Joshua Rodrigues",
  description: "What is a frontend dev but a miserable pile of divs ?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-center p-5 md:m-5 text-black">
          <Header />
          <section className="w-full flex justify-end">
            <ColorPicker items={["Yellow", "Orange", "Green"]} />
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
