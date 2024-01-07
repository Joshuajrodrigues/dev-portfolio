import { ExternalLink, Github } from "lucide-react";
import React from "react";

const SmallLinks = ({
    visit,
    git
}:{
    visit:string;
    git:string
}) => {
  return (
    <div className="flex flex-col items-center justify-start ml-3 2xl:mr-3 ">
      <a
        target="_blank"
        href={visit}
        className="flex justify-center text-sm 2xl:scale-150 2xl:mb-5 cursor-pointer items-center rounded-md border-2 border-black bg-white w-16  m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
      >
        Link <ExternalLink className="ml-1" />
      </a>{" "}
      <a
        target="_blank"
        href={git}
        className="flex justify-center text-sm 2xl:scale-150 cursor-pointer items-center rounded-md border-2 border-black bg-white w-16  m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
      >
        Git <Github className="ml-1" />
      </a>
    </div>
  );
};

export default SmallLinks;
