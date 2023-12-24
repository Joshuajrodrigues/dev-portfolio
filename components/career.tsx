import React from "react";
import Tags from "./tags";
import { ExternalLink } from "lucide-react";

const Career = () => {
  return (
    <div>
      <section className="w-full flex flex-wrap">
        <p>
          <a
            className="text-lg"
            href="https://www.teknorix.com/"
            target="_blank"
          >
            <p className=" w-full">
              Currently working with the lovely people at
              <img
                src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logomark.svg"
                alt="Teknorix logo"
                className="w-6 mx-1 inline"
              />
              <u>Teknorix Pvt Ltd </u>
              <ExternalLink size={12} className="mr-1 inline text-xs" />
              since 2021 as a software developer.
            </p>
          </a>
        </p>
        <p>
          <ul className=" list-disc p-2">
            <li className="mb-2">
              Incharge of development, maintainence and shipping code to
              production for client websites primarily using React and SCSS.
            </li>
            <li className="mb-2">
              Contributing to maintaining and expanding internal ui component
              library in based on Ant Design, design system using Typescript.
            </li>
            <li className="mb-2">
              Helping train interns and monitored their capstone projects as
              well as onboarding new joinees.
            </li>
            <li className="mb-2">
              Providing rapid development and technical solutions according to
              stakeholder buisness requirments.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Career;
