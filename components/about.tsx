import React from "react";

import Tags from "./tags";

const About = () => {
  return (
    <div>
      <section className="flex flex-wrap">
        <Tags>Over 2 years of industry experience</Tags>
        <Tags>Problem solver</Tags>
        <Tags>Currently working at Teknorix</Tags>
        <Tags>Contributes to open-source projects</Tags>
        <Tags>Team player</Tags>
        <Tags>Passionate</Tags>
        <Tags>Positive</Tags>
      </section>
      <p className="p-2">
        With over 2 years of dedicated experience in frontend engineering and
        web development, Joshua is a passionate professional committed to
        crafting innovative, web-based solutions that address the challenges of
        everyday life. Currently contributing expertise at Teknorix, Joshua
        thrives on being a problem solver, with many projects inspired by the
        quest to find solutions to real-world challenges.
      </p>
      <p className="p-2">
        His commitment to the tech community is evident through regular
        contributions to open-source projects, sharing knowledge gained from
        hands-on experience.
      </p>
      <p className="p-2">
        Joshua brings a unique blend of technical expertise, problem-solving
        prowess, and a passion for creativity to every project. Through a
        combination of professional achievements and personal interests, Joshua
        paints a comprehensive picture of a dedicated frontend engineer,
        continuously seeking to make a positive impact in the digital and
        real-world spaces.
      </p>
    </div>
  );
};

export default About;
