"use client";

import Button from "./button";
import { Download } from "lucide-react";
import {motion} from 'framer-motion'
export default function Resume() {
  return (
    <motion.div
      className=" w-full lg:w-80"
       animate={{
      
        // rotateY:[0,30,0],
         rotateZ:[-2,2,-2,2,-2,0]
       }}
      transition={{
        duration: 1,
      
        repeat: Infinity,
        repeatDelay: 4,
      }}
    >
      <Button
        className="text-white shadow-[4px_4px_0px_0px_rgba(1,1,1,1)] bg-black w-full lg:w-80 flex items-center justify-center "
        ariaLabel="Click to download resume"
        onClick={() => {
          let a = document.createElement("a");
          a.href = "/resume/Joshua-Rodrigues-Resume-2024.pdf";
          a.target = "_blank";
          a.click();
        }}
      >
        <span className=" flex text-lg font-bolder">
           Resume <Download className={`ml-2 `} />{" "}
        </span>
      </Button>
    </motion.div>
  );
}
