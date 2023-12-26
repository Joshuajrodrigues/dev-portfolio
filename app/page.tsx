import About from "@/components/about";
import Accordion from "@/components/accordian";
import Career from "@/components/career";
import ColorPicker from "@/components/colorPicker";
import Contact from "@/components/contact";
import Github from "@/components/github";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Marquee from "@/components/marquee";
import Projects from "@/components/projects";
import Resume from "@/components/resume";

export type Marquee = {
  key: number;
  value: string;
}[];
let marqueeItems: Marquee = [
  { key: 0, value: "Web Development" },
  { key: 1, value: "◆" },
  { key: 2, value: "Frontend Engineering" },
  { key: 3, value: "◆" },
  { key: 4, value: "Software Solutions" },
  { key: 5, value: "◆" },
];

export default function Home() {
  return (
    <>
    

      <section className="w-full flex flex-col items-center justify-center">
        <Marquee items={marqueeItems} />
      </section>
      <section className="w-full mt-5">
        <div className="flex-col flex sm:flex-row justify-between items-center">
          <Resume />
          <Github />
        </div>
        <section className="flex flex-wrap pt-5">
          <Intro />
        </section>

        <section className="w-full flex flex-col justify-center items-center">
          {/* <Accordion question="Blog" answer="test" /> */}
          <Accordion
            open={true}
            question="Featured Projects"
            answer={<Projects />}
          />
          <Accordion open={true} question="Career" answer={<Career />} />
          <Accordion question="About" answer={<About />} />
          <Accordion question="Contact" answer={<Contact />} />
        </section>
      </section>
    </>
  );
}
