import React from "react";
import ProjectCard from "./projectCard";
import { Link } from "lucide-react";
import Tags from "./tags";
import ProjectControl from "./projectcontrols";
import Pagination from "./pagination";
import ProjectLink from "./projectLinks";

type props = {
  projectName: string;
  projectlink: string;
  projectImage: string;
  projectDesp: string;
  tags: string[];
  visit: string;
  git: string;
};

export const ProjectSection = (props: props) => {
  return (
    <section className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start ">
      <div className="sm:w-64">
        <div>
          <ProjectCard
            description={props.projectDesp}
            imageUrl={props.projectImage}
            link={props.projectlink}
            text={props.projectName}
          />
        </div>

        <div className="flex flex-wrap">
          {props.tags!.map((item) => (
            <Tags key={item} nostyle={true}>
              {item}
            </Tags>
          ))}
        </div>
      </div>
      <div className="w-full sm:ml-3 flex justify-between sm:justify-center items-start sm:items-center sm:flex-col">
        <div>
          <ProjectControl />
          <Pagination />
        </div>
        <ProjectLink visit={props.visit} code={props.git} />
      </div>
    </section>
  );
};
