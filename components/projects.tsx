"use client";
import ProjectCard from "./projectCard";
import ProjectControl from "./projectcontrols";
import Pagination from "./pagination";
import { useProject } from "@/store/project";
import Tags from "./tags";
import ProjectLink from "./projectLinks";
import Card from "./card";
import { Scale } from "lucide-react";

const Projects = () => {
  const project = useProject((s) => s.project);

  switch (project) {
    case 0:
      return (
        <>
  
          <section className="w-full flex">
            <div>
              <ProjectCard
                description="A kitchen management web app to store kitchen stock, recipies and allow family colaboration for shopping."
                imageUrl="./images/kuzina.png"
                link="/project/kuzina"
              >
                Kuzina
              </ProjectCard>
            </div>
            <div className="flex flex-col">
              <ProjectControl />
              <Pagination />
              <ProjectLink visit="https://kuzina.vercel.app/" code="https://github.com/Joshuajrodrigues/kuzina" />
            </div>
          </section>
          <div className="flex flex-wrap">
            {["Nextjs", "Supabase", "Typescript", "TailwindCss", "ShadCn"]!.map(
              (item) => (
                <Tags key={item} nostyle={true}>
                  {item}
                </Tags>
              )
            )}
          </div>
        </>
      );
    case 1:
      return (
        <>
          <section className="w-full flex">
            <div>
              <ProjectCard
                description="A congitive behavioral therapy journaling app, for challenging negative thoughts and emotions."
                imageUrl="./images/kognitive.png"
                link="/project/kognitive"
              >
                Kognitive
              </ProjectCard>
            </div>
            <div className="flex flex-col">
              <ProjectControl />
              <Pagination />
              <ProjectLink visit="https://kognitive.vercel.app" code="https://github.com/Joshuajrodrigues/cbtjournal" />
            </div>
          </section>
          <div className="flex flex-wrap">
            {["React", "Typescript", "Supabase", "ChakraUi"]!.map((item) => (
              <Tags key={item} nostyle={true}>
                {item}
              </Tags>
            ))}
          </div>
        </>
      );
    case 2:
      return (
        <>
          <section className="w-full flex">
            <div>
              <ProjectCard
                description="College final year project to use clustering algorithms (fuzzy c strange point) to segment eye image to cup and disk then calculate the cup to disk ratio for glaucoma detection."
                imageUrl="./images/gla.png"
                link="/project/final-year-project"
              >
                Glaucoma App
              </ProjectCard>
            </div>
            <div className="flex flex-col">
              <ProjectControl />
              <Pagination />
              <ProjectLink visit="https://glaucoma-detector.vercel.app/" code="https://github.com/Joshuajrodrigues/glaucoma-detector" />
            </div>
          </section>
          <div className="flex flex-wrap">
            {["Nextjs", "Zustand", "TailwindCss"]!.map((item) => (
              <Tags key={item} nostyle={true}>
                {item}
              </Tags>
            ))}
          </div>
        </>
      );

    default:
      return (
        <>
          <section className="w-full flex">
            <div>
              <ProjectCard
                description="A kitchen management web app with collaboration"
                imageUrl="./images/kuzina.png"
                link="/project/kuzina"
              >
                Kuzina
              </ProjectCard>
            </div>
            <div className="flex flex-col">
              <ProjectControl />
              <Pagination />
              <ProjectLink visit="https://kuzina.vercel.app/" code="https://github.com/Joshuajrodrigues/kuzina" />
            </div>
          </section>
          <div className="flex flex-wrap">
            {["Nextjs", "Supabase", "TailwindCss"]!.map((item) => (
              <Tags key={item} nostyle={true}>
                {item}
              </Tags>
            ))}
          </div>
        </>
      );
  }
};

export default Projects;
