"use client"
import ProjectCard from "./projectCard";
import ProjectControl from "./projectcontrols";
import Pagination from "./pagination";
import { useProject } from "@/store/project";

const Projects = () => {
  const project = useProject((s) => s.project);

  switch (project) {
    case 0:
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
          <div className="flex flex-col">
            <ProjectControl />
            <Pagination />
          </div>
        </section>
      );
    case 1:
      return (
        <section className="w-full flex">
          <div>
            <ProjectCard
              tags={["Nextjs", "Supabase", "TailwindCss"]}
              description="A kitchen management web app with collaboration"
              imageUrl="./images/kuzina.png"
            >
              Kognitive
            </ProjectCard>
          </div>
          <div className="flex flex-col">
            <ProjectControl />
            <Pagination />
          </div>
        </section>
      );
    case 2:
      return (
        <section className="w-full flex">
          <div>
            <ProjectCard
              tags={["Nextjs", "Supabase", "TailwindCss"]}
              description="A kitchen management web app with collaboration"
              imageUrl="./images/kuzina.png"
            >
              Glaucoma App
            </ProjectCard>
          </div>
          <div className="flex flex-col">
            <ProjectControl />
            <Pagination />
          </div>
        </section>
      );

    default:
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
          <div className="flex flex-col">
            <ProjectControl />
            <Pagination />
          </div>
        </section>
      );
  }
};

export default Projects;
