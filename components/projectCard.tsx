"use client";

import { useTheme } from "@/store/theme";
import Tags from "./tags";
import Link from "next/link";

type Props = {
  imageUrl: string;
  children: React.ReactNode;

  description: string;
};

export default function ProjectCard({
  imageUrl,

  description,
  children,
}: Props) {
  const theme = useTheme((s) => s.theme);
  return (
    <>
      <figure
        className={`w-[250px] overflow-hidden rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      >
        <img className="w-full h-24 object-fill" src={imageUrl} alt="image" />
        <figcaption className="border-t-2 border-black p-4 flex justify-between items-center">
          {children}{" "}
          <small>
            <u>
              <Link href={""}>Read more</Link>
            </u>
          </small>
        </figcaption>
      </figure>
      <p className="m-2">{description}</p>
    </>
  );
}
