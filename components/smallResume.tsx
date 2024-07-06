"use client"

import { Download } from "lucide-react";
import Button from "./button";

const SmallResume = () => {
  return (
    <Button
      ariaLabel="Click to download resume"
      onClick={() => {
        let a = document.createElement("a");
        a.href = "/resume/Joshua-Rodrigues-Resume-2024.pdf";
        a.target = "_blank";
        a.click();
      }}
      className="text-black inline p-1 mr-2 text-sm 2xl:text-3xl hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none font-semibold "
    >
      <span className="flex justify-center font-bold items-center">
        Resume <Download className={`ml-1 2xl:mx-2 2xl:scale-150 `} size={12} />
      </span>
    </Button>
  )
}

export default SmallResume