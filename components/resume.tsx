"use client";

import Button from "./button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
export default function Resume() {
  return (
    <motion.div
      animate={{
        y: [1, 4, -4, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",

        repeat: Infinity,
        repeatDelay: 1,
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
