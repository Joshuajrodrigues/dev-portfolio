import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div>
      <ProjectCard
        tags={["Nextjs","Supabase","TailwindCss"]}
        description="A kitchen management web app with collaboration"
        imageUrl="./images/kuzina.png"
      >
        Kuzina
      </ProjectCard>
    </div>
  );
};

export default Projects;
