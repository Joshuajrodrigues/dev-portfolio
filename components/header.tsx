"use client"

import { useTheme } from "@/store/theme";
import Link from "next/link";

export default function Header() {
  const theme = useTheme((s)=>s.theme)

  
  return (
    <header className={`w-full p-2 font-oneslice font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-center rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
   <Link href={'/'}>
   Joshua Rodrigues
   </Link>
  </header>
  );
}
