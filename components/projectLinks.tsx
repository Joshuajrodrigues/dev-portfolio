import { ExternalLink, Github, Link } from "lucide-react";
import React from "react";

const ProjectLink = ({ visit, code }: { visit: string; code: string }) => {
  return (
    <div className="flex flex-col items-center justify-start sm:justify-center sm:mt-2 md:mt-12">
      <a target="_blank" href={visit} className="flex justify-center text-sm cursor-pointer items-center rounded-md border-2 border-black bg-white w-16 md:w-32 md:h-12 m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        Link <ExternalLink className="ml-1" />
      </a>{" "}
      <a target="_blank"href={code} className="flex justify-center text-sm  cursor-pointer items-center rounded-md border-2 border-black bg-white w-16 md:w-32 md:h-12 m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        Git <Github className="ml-1" />
      </a>
    </div>
  );
};

export default ProjectLink;
