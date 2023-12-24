"use client";

import Button from "./button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <motion.div
      animate={{
        y: [1, 2, 3,2, 1, -2,-3,-2],
      }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      <Button
        className="text-white bg-black"
        onClick={() => {
          let a = document.createElement("a");
          a.href = "/resume/JoshuaRodrigues_resume_2023.pdf";
          a.target = "_blank";
          a.click();
        }}
      >
        <span className="flex text-lg font-bolder">
          Resume <Download className={`ml-2 `} />{" "}
        </span>
      </Button>
    </motion.div>
  );
}
