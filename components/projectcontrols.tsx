"use client";
import { useTheme } from "@/store/theme";
import Button from "./button";
import { ArrowRightSquare, ArrowLeftSquare } from "lucide-react";
const ProjectControl = () => {
  const theme = useTheme((s) => s.theme);
  return (
    <div className="flex flex-col">
      <Button
        className={
          "w-16 p-1 m-1 h-16 flex items-center justify-center" + " " + theme
        }
        onClick={() => {}}
      >
        <ArrowRightSquare />
      </Button>
      <Button
        className={
          "w-16 p-1 m-1 h-16 flex items-center justify-center" + " " + theme
        }
        onClick={() => {}}
      >
        <ArrowLeftSquare />
      </Button>
    </div>
  );
};

export default ProjectControl;
