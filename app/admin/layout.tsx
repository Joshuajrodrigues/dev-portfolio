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

            {children}

        </>
    );
}
