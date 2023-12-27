"use client";
import Button from "./button";
import { GithubIcon } from "lucide-react";
export default function Github() {
  return (
    <a
      target="_blank"
      href="https://github.com/Joshuajrodrigues"
      className="w-full  sm:ml-2 mt-2 lg:w-80 sm:mt-0 flex cursor-pointer items-center justify-center rounded-md border-2 border-black px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    >
      <span className="flex text-lg font-bolder">
        GitHub <GithubIcon className="ml-2" />{" "}
      </span>
    </a>
  );
}
