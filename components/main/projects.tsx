import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="Welcome-box py-[8px] px-[7px] border border-[#ff6a008b] opacity-[0.9] mb-6">
        <h1 className="Welcome-text text-[13px]">What I&apos;ve Built</h1>
      </div>
      <h1 className="text-[36px] font-bold text-white mb-4">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
          Projects
        </span>
      </h1>
      <p className="text-gray-400 text-center max-w-[600px] mb-14 text-[16px]">
        Real-world apps built with modern stacks — from AI pipelines to full-stack web systems.
      </p>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[1200px]">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
