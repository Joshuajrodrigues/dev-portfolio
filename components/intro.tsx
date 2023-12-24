"use client";

import { useTheme } from "@/store/theme";
import Tags from "./tags";

const Intro = () => {
  const theme = useTheme((s) => s.theme);
  return (
    <div className=" font-bold ">
      <section>
        <Tags>
          <h2 className="text-2xl text-center">
            Building web solutions to everyday problems.
          </h2>
        </Tags>
        <h2 className="text-xl font-medium text-center pt-2">
          Joshua is specializing in building exceptional digital experiences to make everyday life easier.
        </h2>
      </section>
    </div>
  );
};

export default Intro;
