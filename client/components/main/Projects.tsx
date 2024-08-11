import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Horizons
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/career.jpeg"
          title="AI Career Coach"
          description="AI powered career coach who helps to navigate along the path of growth."
        />
        <ProjectCard
          src="/harmony.jpeg"
          title="Our Mission"
          description="To establish Harmony among the Intelligence forces in nature."
        />
        <ProjectCard
          src="/brain.jpeg"
          title="Values"
          description="We value sustainability and moral ethics over anything else, which are crucial for the collective development of the society."
        />
      </div>
    </div>
  );
};

export default Projects;
