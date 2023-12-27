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
      <Link  href={link}>
        <figure
          className={`w-full sm:w-[250px] md:w-96 lg:w-full md:h-64 lg:h-72 overflow-hidden rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
        >
          <Image
            className="w-full h-24 md:h-48  lg:h-56  lg:w-full"
            width={1000}
            height={1000}
            src={imageUrl}
            alt="project"
          />
          <figcaption className="border-t-2 flex justify-between items-center border-black p-4 lg:text-2xl ">
            {text} <em className=" lg:text-xl underline">Click to read more</em>
          </figcaption>
        </figure>
      </Link>
    
    </>
  );
}
