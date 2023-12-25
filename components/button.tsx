"use client"

import { useTheme } from "@/store/theme"
import { cn } from "@/utils/helper"

type Props = {
    children: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?:string
    ariaLabel:string
  }
  
  export default function Button({ children, onClick,className,ariaLabel }: Props) {

    return (
      <button
        role="button"
        aria-label={ariaLabel}
        onClick={onClick}
        className={cn(`flex cursor-pointer items-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`,className)}
      >
        {children}
      </button>
    )
  }
  