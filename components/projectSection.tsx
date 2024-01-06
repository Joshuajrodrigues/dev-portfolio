import React from "react";
import ProjectCard from "./projectCard";
import { Link } from "lucide-react";
import Tags from "./tags";
import ProjectControl from "./projectcontrols";
import Pagination from "./pagination";
import ProjectLink from "./projectLinks";
import { StaticImageData } from "next/image";

type props = {
  projectName: string;
  projectlink: string;
  projectImage:  StaticImageData;
  projectDesp: string;
  tags: string[];
  visit: string;
  git: string;
};

export const ProjectSection = (props: props) => {
  return (
    <section className="w-full lg:mx-0 lg:px-8 sml:px-12 lg:my-0  flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-center ">
      <div className="sm:w-64 md:w-2/3 lg:w-full">
        <div className="w-full">
          <ProjectCard
            description={""}
            imageUrl={props.projectImage}
            link={props.projectlink}
            text={props.projectName}
          />
          <p className="w-full m-2 md:text-lg lg:text-xl">{props.projectDesp}</p>
        </div>
        <div className="flex flex-wrap">
          {props.tags!.map((item) => (
            <Tags key={item} nostyle={true}>
              {item}
            </Tags>
          ))}
        </div>
      </div>
      <div className="w-full sm:ml-3 sml:ml-0 lg:ml-0 lg:mt-0 flex justify-between sm:justify-center sml:items-end lg:items-center items-start sm:items-center sm:flex-col">
        <div className="flex flex-col items-center justify-center">
          <ProjectControl />
          <Pagination />
        </div>
        <ProjectLink visit={props.visit} code={props.git} />
      </div>
    </section>
  );
};
