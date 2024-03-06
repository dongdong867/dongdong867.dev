import { FinderFrame } from "./frame";
import { Projects } from "./projects";
import { TechStack } from "./tech-stack";
import { Experience } from "./experience";

export const Finder = () => {
  return (
    <FinderFrame
      experience={<Experience />}
      projects={<Projects />}
      techStack={<TechStack />}
    />
  );
};
