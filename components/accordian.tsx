"use client";

import { useTheme } from "@/store/theme";
import { motion } from 'framer-motion';
import { MinusSquare, PlusSquare } from "lucide-react";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
type Props = {
  open?: boolean;
  question: string;
  answer: ReactNode;
  isProjects?: false;
  hash?: string;
};

export default function Accordion({
  question,
  answer,
  isProjects,
  open = false,
  hash,
}: Props) {
  const [showContent, setShowContent] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const theme = useTheme((s) => s.theme);

  useEffect(() => {
    //  console.log("pathname", window.location.hash);
    if (window.location.hash === hash) {
      setShowContent(true);
    }
  }, [params]);

  return (
    <div
      className={`w-full my-5 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
    >
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? "solid 2px" : "0px" }}
        className={`flex font-oneslice w-full text-xl lg:text-2xl 2xl:text-4xl font-bolder items-center justify-between rounded-[5px] border-black ${theme} p-5 font-bold`}
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {question}
        {!showContent && (
          <PlusSquare
            style={{ transform: `rotate(${showContent ? "45deg" : "0"})` }}
            className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
          />
        )}
        {showContent && (
          <MinusSquare

            className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
          />
        )}
      </button>
      <motion.div
        transition={{
          duration: 0.8,
          ease: showContent ? "easeOut" : "easeIn",
          type: "spring"
        }}
        animate={{
          height: showContent ? "fit-content" : 0
        }}
        ref={contentRef}
        className={`  overflow-hidden rounded-[5px]  bg-white font-bold `}
      >
        <div className="p-5">{answer}</div>
      </motion.div>
    </div>
  );
}
