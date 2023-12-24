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
    <main className="flex flex-col items-center justify-center p-5 text-black">
      <Header />
      <section className="w-full flex justify-end">
        <ColorPicker items={["Yellow", "Orange", "Green"]} />
      </section>

      <section className="w-full flex flex-col items-center justify-center">
        <Marquee items={marqueeItems} />
      </section>
      <section className="w-full mt-5">
        <div className="flex justify-between items-center">
          <Resume />
          <Github />
        </div>
        <section className="flex flex-wrap pt-5">
          <Intro />
        </section>
        

        <section className="w-full flex flex-col justify-center items-center">
          {/* <Accordion question="Blog" answer="test" /> */}
          <Accordion open={true} question="Career" answer={<Career/>} />
          <Accordion
            open={true}
            question="Featured Projects"
            answer={<Projects />}
          />
          <Accordion question="About" answer={<About />} />
          <Accordion question="Contact" answer={<Contact />} />
        </section>
      </section>
    </main>
  );
}
