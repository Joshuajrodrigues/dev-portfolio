import React, { ReactNode } from "react";
import ProjectCard from "./projectCard";
import { Link } from "lucide-react";
import Tags from "./tags";
import ProjectControl from "./projectcontrols";
import Pagination from "./pagination";
import ProjectLink from "./projectLinks";

type props = {
  projectName: string;
  projectlink: string;
  projectImage: ReactNode;
  projectDesp: string;
  tags: string[];
  visit: string;
  git: string;
};

export const ProjectSection = (props: props) => {
  return (
    <section className="w-full lg:mx-0 lg:px-8  lg:my-0  flex flex-col md:flex-row justify-center sm:justify-between items-center sm:items-center ">
      <div className="w-full md:w-2/3 lg:w-full">
        <div className="w-full">
          <ProjectCard
            description={""}
            imageUrl={props.projectImage}
            link={props.projectlink}
            text={props.projectName}
          />
          <p className="w-full m-2 md:text-lg lg:text-xl 2xl:text-3xl">{props.projectDesp}</p>
        </div>
        <div className="flex flex-wrap">
          {props.tags!.map((item) => (
            <Tags key={item} nostyle={true}>
              {item}
            </Tags>
          ))}
        </div>
      </div>
      <div className="w-full sm:ml-3 sml:ml-0 lg:ml-0 lg:mt-0 flex justify-between md:justify-center  lg:items-center items-start md:items-center md:flex-col">
        <div className="flex flex-col items-center justify-center">
          <ProjectControl />
          <Pagination />
        </div>
        <ProjectLink visit={props.visit} code={props.git} />
      </div>
    </section>
  );
};
