import React from "react";
import ProjectCard from "./projectCard";
import ProjectControl from "./projectcontrols";

const Projects = () => {
  return (
    <section className="w-full flex">
      <div>
        <ProjectCard
          tags={["Nextjs", "Supabase", "TailwindCss"]}
          description="A kitchen management web app with collaboration"
          imageUrl="./images/kuzina.png"
        >
          Kuzina
        </ProjectCard>
      </div>
      <div>
        <ProjectControl/>
      </div>
    </section>
  );
};

export default Projects;
