"use client";

import { useTheme } from "@/store/theme";
import Tags from "./tags";

const Intro = () => {
  const theme = useTheme((s) => s.theme);
  return (
    <div className=" font-bold md:font-extrabold ">
      <section className="flex flex-col items-center justify-center">
        <Tags>
          <h2 className="text-2xl md:text-3xl text-center">
            Building web solutions to everyday problems.
          </h2>
        </Tags>
        <h2 className="text-xl md:text-2xl font-medium text-center pt-2">
          Joshua is specializing in building exceptional digital experiences to make everyday life easier.
        </h2>
      </section>
    </div>
  );
};

export default Intro;
