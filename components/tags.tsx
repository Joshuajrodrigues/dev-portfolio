"use client";
import { useTheme } from "@/store/theme";
import { ReactNode } from "react";

export default function Tags({nostyle=false, children }: { nostyle?:boolean; children: ReactNode }) {
  let theme = useTheme((s) => s.theme);
  if(nostyle){
    theme = "bg-black text-white"
  }
  return (
    <div
      className={`w-fit m-2 rounded-md border-1 border-black ${theme} px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:animate-wiggle`}
    >
      {children}
    </div>
  );
}
