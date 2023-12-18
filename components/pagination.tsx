"use client";
import { useProject } from "@/store/project";
import { Dot, CircleDot } from "lucide-react";

const Pagination = () => {
  const project = useProject((s) => s.project);
  switch (project) {
    case 0:
      return (
        <div className="flex mt-2">
          <CircleDot /> <Dot /> <Dot />
        </div>
      );

    case 1:
      return (
        <div className="flex mt-2">
          <Dot /> <CircleDot />
          <Dot />
        </div>
      );
    case 2:
      return (
        <div className="flex mt-2">
          <Dot /> <Dot /> <CircleDot />
        </div>
      );

    default:
      return (
        <div className="flex mt-2">
          <CircleDot /> <Dot /> <Dot />
        </div>
      );
  }
};

export default Pagination;
