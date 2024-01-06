"use client";
import { useProject } from "@/store/project";
import { ProjectSection } from "./projectSection";

import kognitiveImage from '@/public/images/kognitive.png'
import kuzinaImage from '@/public/images/kuzina.png'
import gla from '@/public/images/gla.png'
const Projects = () => {
  const project = useProject((s) => s.project);

  switch (project) {
    case 1:
      return (
        <>
          <ProjectSection
            projectDesp="A kitchen management web app to store kitchen stock, recipes, shopping list and allow family collaboration. Allows people to join a group and collaboarate privately."
            projectImage={kuzinaImage}
            projectlink="/project/kuzina"
            projectName="Kuzina"
            tags={["Nextjs", "Supabase", "Typescript", "TailwindCss", "ShadCn"]}
            visit="https://kuzina.vercel.app/"
            git="https://github.com/Joshuajrodrigues/kuzina"
          />
        </>
      );
    case 0:
      return (
        <>
          <ProjectSection
            projectDesp="A cognitive behavioral therapy journaling app, for challenging negative thoughts and emotions. With froms for anger mangement, stress, goal building. Comes with PWA support."
            projectImage={kognitiveImage}
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
            projectImage={gla}
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
            projectDesp="A kitchen management web app to store kitchen stock, recipes, shopping list and allow family collaboration. Allows people to join a group and collaboarate privately."
            projectImage={kuzinaImage}
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
