

import { ExternalLink } from "lucide-react";

import SmallResume from "./smallResume";

const Career = () => {
  return (
    <div id="career">
      <section className="w-full flex flex-wrap md:p-2 2xl:p-4">
        <p>
          <a
            className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl"
            href="https://www.teknorix.com/"
            target="_blank"
          >
            <span className=" w-full">
              Currently working with the lovely people at
              <img
                src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logomark.svg"
                alt="Teknorix logo"
                width={24}
                height={24}
                className="w-6 mx-1 inline"
              />
              <u>Teknorix Pvt Ltd </u>
              <ExternalLink size={12} className="mr-1 inline text-xs" />
              since 2021 as a software developer.
            </span>
          </a>
        </p>
        <div className=" md:text-lg lg:text-xl 2xl:text-3xl">
          <ul className="list-disc p-2 lg:p-4 2xl:p-6">
            <li className="mb-2 lg:mb-4  2xl:mb-6">
              Led development, maintenance, and deployment of ReactJS, NextJS,
              Typescript, and LESS/SASS code for client websites.
            </li>
            <li className="mb-2 lg:mb-4 2xl:mb-6">
              Managed various projects, including a feature-rich CRM, an
              expanded Design System Monorepo, and improvements to News and
              Publications and Knowledgebase systems.
            </li>
            <li className="mb-2 lg:mb-4 2xl:mb-6">
              Provided stability and updates to a Grants and Reimbursement
              System, Catalog Dashboard, and Document Recognition System.
            </li>
            <li className="mb-2 lg:mb-4 2xl:mb-6">
              Mentored interns, onboarded team members, and maintained coding
              standards through code reviews and pair programming.
            </li>
            <li className="mb-2 lg:mb-4 2xl:mb-6">
              Contributed to open-source projects, addressing bugs, and
              expanding features for company benefit.
            </li>
            <li className="mb-2 lg:mb-4 2xl:mb-6">
              Do check out the{" "}
              <SmallResume/>
              for more info.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Career;
