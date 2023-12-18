"use client";
import Button from "./button";
import { Download } from "lucide-react";
export default function Resume() {
  return (
    <Button onClick={() => {
        let a = document.createElement("a");
        a.href = "/resume/JoshuaRodrigues_resume_2023.pdf";
        a.target = "_blank";
        a.click();

    }}>
      <span className="flex text-lg font-bolder">
        Resume <Download className="ml-2" />{" "}
      </span>
    </Button>
  );
}
