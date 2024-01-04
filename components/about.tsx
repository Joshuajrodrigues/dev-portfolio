
import Skill from "./skill";

const About = () => {
  return (
    <div id="about" className="md:p-2 md:text-lg lg:text-xl lg:p-2">
      <section className="w-full flex flex-wrap ">
        <ul className="list-disc p-2">
          <li className="mb-2">🎓Completed computer engineering in 2021.</li>
          <li className="mb-2">
            📖 Bookworm, currently reading Prophet Song by Paul Lynch.
          </li>
          <li className="mb-2">
            🎬 Cinema enthusiast, current favourite The Mist.
          </li>
          <li className="mb-2">🧑‍🍳 Loves to cook.</li>
          <li className="mb-2">🏃‍♂️ Daily evening runs.</li>
          <li className="mb-2">
            😺 Cat person but currently owns a 🐶 dog and 💖 him too.
          </li>
        </ul>
      </section>
      <h3 className="p-2 text-bold">
        {" "}
        <u>Tech stack:</u>{" "}
      </h3>
      <section className="flex flex-wrap lg:w-2/3">
        <Skill skills={skills} />
      </section>
    </div>
  );
};

const skills = [
  {
    id: 1,
    name: "HTML/CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "TypeScript",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "NextJs",
  },
  {
    id: 6,
    name: "Redux",
  },
  {
    id: 7,
    name: "Zustand",
  },
  {
    id: 8,
    name: "Jest",
  },
  {
    id: 9,
    name: "AntDesign",
  },
  {
    id: 10,
    name: "TailwindCss",
  },
  {
    id: 11,
    name: "MaterialUI",
  },
  {
    id: 12,
    name: "SCSS/LESS",
  },
  {
    id: 13,
    name: "Webpack",
  },
  {
    id: 14,
    name: "NodeJs",
  },
  {
    id: 15,
    name: "ExpressJs",
  },
  
  {
    id: 16,
    name: "Fastify",
  },
  {
    id: 17,
    name: "Golang",
  },
  {
    id: 18,
    name: "Python",
  },
];

export default About;
