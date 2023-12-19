import React from "react";

const ProjectLink = ({ visit, code }: { visit: string; code: string }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <a className="flex cursor-pointer items-center rounded-md border-2 border-black bg-white w-16 m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        Visit
      </a>{" "}
      <a className="flex cursor-pointer items-center rounded-md border-2 border-black bg-white w-16 m-1 px-2  font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        Code
      </a>
    </div>
  );
};

export default ProjectLink;
