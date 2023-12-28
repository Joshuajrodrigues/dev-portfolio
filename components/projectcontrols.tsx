"use client";
import { useTheme } from "@/store/theme";
import Button from "./button";
import { ArrowRightSquare, ArrowLeftSquare } from "lucide-react";
import { useProject } from "@/store/project";
const ProjectControl = () => {
  const theme = useTheme((s) => s.theme);
  const changeProject = useProject((s) => s.changeProject);
  const project = useProject((s) => s.project);
  return (
    <div className="flex sm:flex-col lg:text-lg sm:text-sm">
      <Button
        className={
          "w-20 sm:w-20 md:w-32 lg:w-64 p-1  m-1 h-16 flex items-center justify-center" +
          " " +
          theme
        }
        ariaLabel="Click for previous project"
        onClick={() => {
          if (project > 0) {
            changeProject(project - 1);
          } else {
            changeProject(2);
          }
        }}
      >
        <ArrowLeftSquare className=" md:mr-3 " /> Prev
      </Button>
      <Button
        className={
          "w-20 sml:w-24 sm:w-20 md:w-32 lg:w-64 p-1 m-1 lg:mt-3 h-16 flex items-center justify-center" +
          " " +
          theme
        }
        ariaLabel="Click for next project"
        onClick={() => {
          if (project < 2) {
            changeProject(project + 1);
          } else {
            changeProject(0);
          }
        }}
      >
        Next <ArrowRightSquare className=" md:ml-3 " />
      </Button>
    </div>
  );
};

export default ProjectControl;
