import React from "react";

import Tags from "./tags";

const About = () => {
  return (
    <div>
      <section className="w-full flex flex-wrap">
        <Tags>Problem Solver</Tags>
        <Tags>Bookworm</Tags>
        <Tags>Cinema enthusiast</Tags>
        <Tags>Cat and dog person</Tags>
      </section>
      <p className="p-2">
        Joshua considers himself a problem solver, with many of his projects
        stemming from a genuine desire to find solutions to challenges he has
        personally encountered.
      </p>
      <p className="p-2">
        Beyond the realm of software development, Joshua has a deep appreciation
        for cinema, particularly relishing the discovery and enjoyment of rare
        and classic films from around the world. His viewing preferences lean
        towards works from renowned directors such as Akira Kurosawa and Wong
        Kar-wai.
      </p>
      <p className="p-2">
        Devoting a significant amount of his time to reading, Joshua thoroughly
        enjoys this pastime, exploring genres like thrillers, science fiction,
        and classic literature. Currently, he is engrossed in the literary
        masterpiece, The Brothers Karamazov.
      </p>
      <p className="p-2">
        In addition to his professional and intellectual pursuits, Joshua has a
        soft spot for cats 😸, although he is a proud owner of a dog 🐶 whom he
        also holds in high regard.
      </p>
    </div>
  );
};

export default About;
