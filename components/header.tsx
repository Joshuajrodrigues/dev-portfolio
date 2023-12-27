"use client"

import { useTheme } from "@/store/theme";


export default function Header() {
  const theme = useTheme((s)=>s.theme)

  
  return (
    <header className={`w-full p-4 font-oneslice text-4xl md:text-5xl lg:text-6xl text-center rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
    JOSHUA RODRIGUES
  </header>
  );
}
