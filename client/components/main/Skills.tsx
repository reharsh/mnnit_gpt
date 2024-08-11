import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <iframe
        height="800px"
        id="testimonialto-orion-ai-chatbot-tag-all-dark-animated"
        src="https://embed-v2.testimonial.to/w/orion-ai-chatbot?animated=on&theme=dark&shadowColor=000000&speed=1&tag=all"
        scrolling="no"
        width="100%"
      ></iframe>
    </section>
  );
};

export default Skills;
