
import About from "@/components/about";
import Accordion from "@/components/accordian";
import Badge from "@/components/badge";
import Button from "@/components/button";
import ColorPicker from "@/components/colorPicker";
import Contact from "@/components/contact";
import Github from "@/components/github";
import Header from "@/components/header";
import Marquee from "@/components/marquee";
import Projects from "@/components/projects";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-5 text-black">
      <Header />
      <section className="w-full flex justify-end">
        <ColorPicker items={["Yellow", "Orange", "Green"]} />
      </section>

      <section className="w-full flex flex-col items-center justify-center">
        <Marquee items={["Software", "Enginner", "Frontend", "Developer"]} />
      </section>
      <section className="w-full mt-5">
        <div className="flex justify-between items-center">
          <Resume />
          <Github />
        </div>

        <section className="flex flex-wrap py-5">
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
        <section className="w-full flex flex-col justify-center items-center">
          {/* <Accordion question="Blog" answer="test" /> */}
          <Accordion question="Projects" answer={<Projects/>} />
          <Accordion question="About" answer={<About/>} />
          <Accordion question="Contact" answer={<Contact/>} />
        </section>
      </section>
    </main>
  );
}
