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
        <div>
          <ul className="list-disc p-2">
            <li className="mb-2">
              In charge of development, maintenance, and shipping code to
              production for client websites, primarily using React and SCSS.
            </li>
            <li className="mb-2">
              Contributing to maintaining and expanding the internal UI
              component library based on Ant Design, a design system using
              TypeScript.
            </li>
            <li className="mb-2">
              Helping train interns and monitoring their capstone projects, as
              well as onboarding new joiners.
            </li>
            <li className="mb-2">
              Providing rapid development and technical solutions according to
              stakeholder business requirements.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Career;
