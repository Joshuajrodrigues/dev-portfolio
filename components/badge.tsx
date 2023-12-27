"use client"
import { useTheme } from "@/store/theme";
import { ReactNode } from "react";

export default function Badge({ content }: { content: ReactNode}) {
    const theme = useTheme((s)=>s.theme)
    return (
      <div className={`w-min m-1 rounded-full border-2 border-black ${theme} px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:animate-wiggle`}>
        {content}
      </div>
    )
  }
  