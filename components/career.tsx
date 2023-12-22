import React from "react";
import Tags from "./tags";
import { ExternalLink } from "lucide-react";

const Career = () => {
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
              <ExternalLink size={8} className="mr-1 inline text-xs" />since 2021
            </p>
          </a>
        </Tags>
      </section>
    </div>
  );
};

export default Career;
