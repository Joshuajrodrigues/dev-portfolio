"use client"

import { useTheme } from "@/store/theme"
import { cn } from "@/utils/helper"
import {motion} from 'framer-motion'
type Props = {
    children: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?:string
    ariaLabel:string
  }

  const buttonPressVarient ={
    // translate x translate y shandow none
    translate:{
      x:3,
      y:3
    }
  }
  
  export default function Button({ children, onClick,className,ariaLabel }: Props) {

    return (
      <motion.button
        whileTap={'translate'}
      
        variants={buttonPressVarient}
        role="button"
        aria-label={ariaLabel}
        onClick={onClick}
        className={cn(`flex active:shadow-none cursor-pointer items-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] `,className)}
      >
        {children}
      </motion.button>
    )
  }
  