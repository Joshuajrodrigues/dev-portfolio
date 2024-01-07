"use client";

import { useTheme } from "@/store/theme";
import Link from "next/link";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  imageUrl: ReactNode;
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
   
      <motion.div
        className=" z-20"
        whileHover={{ scale: 1.05, rotateZ: -2 }}
      >
        <Link href={link}>
          <figure
            className={`w-full h-44 sm:w-[250px] md:w-96 lg:w-full  md:h-64 lg:h-72 2xl:h-96 overflow-hidden rounded-md border-2 border-black ${theme} font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
          >
            {imageUrl}
            <figcaption className="border-t-2 flex justify-between items-center border-black p-4 lg:text-2xl 2xl:text-3xl ">
              {text} <em className=" lg:text-xl 2xl:text-2xl underline">Read more</em>
            </figcaption>
          </figure>
        </Link>
      </motion.div>
   
  );
}
