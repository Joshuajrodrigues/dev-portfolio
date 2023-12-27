"use client";

import Button from "./button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <motion.div
      className="w-full lg:w-80"
      animate={{
        y: [1, 2, 3, 2, 1, -2, -3, -2],
      }}
      transition={{
        duration: 1,
        ease: "anticipate",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      <Button
        className="text-white bg-black w-full lg:w-80 flex items-center justify-center "
        ariaLabel="Click to download resume"
        onClick={() => {
          let a = document.createElement("a");
          a.href = "/resume/JoshuaRodrigues-resume-2024-25.pdf";
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
