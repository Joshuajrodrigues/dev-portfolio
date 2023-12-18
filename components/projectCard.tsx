"use client";

import { useTheme } from "@/store/theme";
import Tags from "./tags";

type Props = {
  imageUrl: string;
  children: React.ReactNode;
  tags: string[];
  description: string;
};

export default function ProjectCard({
  imageUrl,
  tags,
  description,
  children,
}: Props) {
  const theme = useTheme((s) => s.theme);
  return (
    <>
      <figure
        className={`w-[250px] overflow-hidden rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      >
        <img className="w-full" src={imageUrl} alt="image" />
        <figcaption className="border-t-2 border-black p-4 flex justify-between items-center">
          {children}{" "}
          <small>
            <a>
              <u>Visit</u>
            </a>{" "}
            <a>
              <u>Code</u>
            </a>
          </small>
        </figcaption>
      </figure>
      <p className="m-2">{description}</p>
      <div className="flex flex-wrap">
        {tags!.map((item) => (
          <Tags key={item} nostyle={true}>
            {item}
          </Tags>
        ))}
      </div>
    </>
  );
}
