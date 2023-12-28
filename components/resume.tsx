"use client";

import Button from "./button";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div
      className=" animate-wiggle w-full lg:w-80"
      // animate={{
      //   y: [1, 2, 3, 2, 1, -2, -3, -2],
      // }}
      // transition={{
      //   duration: 1,
      //   ease: "anticipate",
      //   repeat: Infinity,
      //   repeatDelay: 0,
      // }}
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
    </div>
  );
}
