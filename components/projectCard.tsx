"use client";

import { useTheme } from "@/store/theme";
import { Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  imageUrl: string;
  children?: React.ReactNode;
  link: string;
  description: string;
  text?: ReactNode;
};

export default function ProjectCard({
  imageUrl,
  link,
  description,
  text,
}: Props) {
  const theme = useTheme((s) => s.theme);
  return (
    <>
      <figure
        className={`w-[250px] overflow-hidden rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      >
        <Image
          className="w-full h-24 "
          width={1000}
          height={1000}
          src={imageUrl}
          alt="project"
        />
        <figcaption className="border-t-2 border-black p-4 ">
          <Link className=" underline" href={link}>
            {text}
          </Link>
        </figcaption>
      </figure>
      <p className="m-2">{description}</p>
    </>
  );
}
