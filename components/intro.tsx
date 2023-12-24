"use client";

import { useTheme } from "@/store/theme";

const Intro = () => {
  const theme = useTheme((s) => s.theme);
  return (
    <div className="text-2xl font-bold">
      <h2>
        A web developer with over 2 years of specialization in frontend
        engineering to turn your buisness problems into elegant solutions.
      </h2>
    </div>
  );
};

export default Intro;
