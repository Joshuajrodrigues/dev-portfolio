"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { PlusSquare } from "lucide-react";
import { useTheme } from "@/store/theme";
import { useProject } from "@/store/project";

type Props = {
  question: string;
  answer: ReactNode;
  isProjects?: false;
};

export default function Accordion({ question, answer, isProjects }: Props) {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme((s) => s.theme);
  const changeProject = useProject((s) => s.changeProject);
  useEffect(() => {
    if (contentRef.current) {
      if (isProjects) {
        changeProject(0);
      }
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showContent]);

  return (
    <div
      className={`w-full my-5 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
    >
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "solid 2px" : "0px" }}
        className={`flex w-full items-center justify-between rounded-[5px] border-black ${theme} p-5 font-bold`}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {question}
        <PlusSquare
          style={{ transform: `rotate(${showContent ? "45deg" : "0"})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
        />
      </button>
      <div
        ref={contentRef}
        className={` ${
          showContent ? `h-fit` : "h-0"
        } overflow-hidden rounded-[5px] bg-white font-bold transition-[height] ease-in-out`}
      >
        <div className="p-5">{answer}</div>
      </div>
    </div>
  );
}
