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
        <div className=" flex flex-col sm:flex-row justify-between lg:justify-evenly items-center">
          <Resume />
          <Github />
        </div>
        <section className="flex flex-wrap pt-5">
          <Intro />
        </section>

        <section className="w-full flex flex-col justify-center items-center">
          {/* <Accordion question="Blog" answer="test" /> */}
          <div id="feat" className="w-full ">
            <Accordion
              hash="#feat"
              open={true}
              question="Featured Projects"
              answer={<Projects />}
            />
          </div>
          <Accordion hash="#career" open={true} question="Career" answer={<Career />} />
          <Accordion hash="#about" question="About" answer={<About />} />
          <Accordion hash="#contact" question="Contact" answer={<Contact />} />
        </section>
      </section>
    </>
  );
}
