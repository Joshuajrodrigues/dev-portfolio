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
    className="text-black inline p-1 mr-2 text-sm  font-semibold "
  >
    <span className="flex justify-center font-bold items-center">
      Resume <Download className={`ml-1 `} size={12} />
    </span>
  </Button>
  )
}

export default SmallResume