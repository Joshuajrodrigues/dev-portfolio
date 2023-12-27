import React from "react";

import Tags from "./tags";
import { ExternalLink } from "lucide-react";
import Badge from "./badge";

const About = () => {
  return (
    <div className="md:p-2 md:text-lg">
      <section className="w-full flex flex-wrap ">
        <ul className="list-disc p-2">
          <li className="mb-2">🎓Completed computer engineering in 2021.</li>
          <li className="mb-2">
            📖 Bookworm, currently reading Prophet Song by Paul Lynch.
          </li>
          <li className="mb-2">
            🎬 Cinema enthusiast, current favourite The Mist.
          </li>
          <li className="mb-2">🧑‍🍳 Loves to cook.</li>
          <li className="mb-2">🏃‍♂️ Daily evening runs.</li>
          <li className="mb-2">
            😺 Cat person but currently owns a 🐶 dog and 💖 him too.
          </li>
        </ul>
      </section>
      <h3 className="p-2 text-bold">
        {" "}
        <u>Tech stack:</u>{" "}
      </h3>
      <section className="flex flex-wrap ">
        <Badge content="HTML/CSS" />
        <Badge content="Javascript" />
        <Badge content="TypeScript" />
        <Badge content="React" />
        <Badge content="NextJs" />
        <Badge content="Redux" />
        <Badge content="Zustand" />
        <Badge content="Jest" />
        <Badge content="AntDesign" />
        <Badge content="TailwindCss" />
        <Badge content="MaterialUI" />
        <Badge content="SCSS/LESS" />
        <Badge content="Webpack" />
        <Badge content="NodeJs" />
        <Badge content="ExpressJs" />
        <Badge content="Fastify" />
        <Badge content="Golang" />
        <Badge content="Python" />
      </section>
    </div>
  );
};

export default About;
