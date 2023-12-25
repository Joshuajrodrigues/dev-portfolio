"use client"
import { useTheme } from "@/store/theme";
import { cn } from "@/utils/helper";
import { ReactNode } from "react";

type Props = {
  heading: ReactNode;
  paragraph?: ReactNode;
  className?:string
};

export default function Card({ heading, paragraph,className }: Props) {
  const theme = useTheme((s) => s.theme);
  return (
    <div className={cn(
        `w-[250px] rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`,className)}>
      <div className="border-b-2 border-black p-4">
        <>{heading}</>
      </div>
      {paragraph && (
        <div className="p-4">
          <p>{paragraph}</p>
        </div>
      )}
    </div>
  );
}
