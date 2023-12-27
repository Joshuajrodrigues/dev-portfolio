"use client";
import { useProject } from "@/store/project";
import { ProjectSection } from "./projectSection";

const Projects = () => {
  const project = useProject((s) => s.project);

  switch (project) {
    case 0:
      return (
        <>
          <ProjectSection
            projectDesp="A kitchen management web app to store kitchen stock, recipies and allow family colaboration for shopping."
            projectImage="/images/kuzina.png"
            projectlink="/project/kuzina"
            projectName="Kuzina"
            tags={["Nextjs", "Supabase", "Typescript", "TailwindCss", "ShadCn"]}
            visit="https://kuzina.vercel.app/"
            git="https://github.com/Joshuajrodrigues/kuzina"
          />
        </>
      );
    case 1:
      return (
        <>
          <ProjectSection
            projectDesp="A congitive behavioral therapy journaling app, for challenging negative thoughts and emotions."
            projectImage="/kognitive/test.png"
            projectlink="/project/kognitive"
            projectName="Kognitive"
            tags={["React", "Typescript", "Supabase", "ChakraUi"]}
            visit="https://kognitive.vercel.app"
            git="https://github.com/Joshuajrodrigues/cbtjournal"
          />
        </>
      );
    case 2:
      return (
        <>
          <ProjectSection
            projectDesp="College final year project to use clustering algorithms (fuzzy c strange point) to segment eye image to cup and disk then calculate the cup to disk ratio for glaucoma detection."
            projectImage="/images/gla.png"
            projectlink="/project/final-year-project"
            projectName="  Glaucoma App"
            tags={["Nextjs", "Zustand", "TailwindCss"]}
            visit="https://glaucoma-detector.vercel.app/"
            git="https://github.com/Joshuajrodrigues/glaucoma-detector"
          />
        </>
      );

    default:
      return (
        <>
          <ProjectSection
            projectDesp="A kitchen management web app to store kitchen stock, recipies and allow family colaboration for shopping."
            projectImage="/images/kuzina.png"
            projectlink="/project/kuzina"
            projectName="Kuzina"
            tags={["Nextjs", "Supabase", "Typescript", "TailwindCss", "ShadCn"]}
            visit="https://kuzina.vercel.app/"
            git="https://github.com/Joshuajrodrigues/kuzina"
          />
        </>
      );
  }
};

export default Projects;
