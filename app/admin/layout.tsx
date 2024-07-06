import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Portfolio | Joshua Rodrigues",
    description: "The frontend guy.",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="mt-16 flex flex-col items-center justify-center p-5 md:m-5 md:mt-20 lg:m-32 2xl:m-72 text-black">
                {children}
            </div>
        </>
    );
}
