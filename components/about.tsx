import React from "react";

import Tags from "./tags";
import { ExternalLink } from "lucide-react";
import Badge from "./badge";

const About = () => {
  return (
    <div>
      <section className="w-full flex flex-wrap">
        <Tags>Completed computer engineering in 2021</Tags>
        <Tags>Over 2 years of industry experience</Tags>
        <Tags>
          <a href="https://www.teknorix.com/" target="_blank">
            <p className=" w-full">
              Currently working with the lovely people at
              <img
                src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logomark.svg"
                alt="Teknorix logo"
                className="w-2 mx-1 inline"
              />
              <u>Teknorix Pvt Ltd </u>
              <ExternalLink size={8} className="mr-1 inline text-xs" />
              since 2021
            </p>
          </a>
        </Tags>
        <Tags>Bookworm, currently reading Prophet Song by Paul Lynch</Tags>
        <Tags>Cinema enthusiast, current favourite The Mist</Tags>
        <Tags>Loves to cook</Tags>
        <Tags>Daily evening runs</Tags>
        <Tags>Cat person but owns a dog and 💖 him too.</Tags>
      </section>
      <h3 className="p-2 text-bold"> <u>Tech stack:</u> </h3>
      <section className="flex flex-wrap ">
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
      </section>
    </div>
  );
};

export default About;
