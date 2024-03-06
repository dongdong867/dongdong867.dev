import { FinderFrame } from "./frame";
import { Projects } from "./projects";
import { TechStack } from "./tech-stack";
import { Experience } from "./experience";

export const Finder = () => {
  return (
    <div id="finder">
      <FinderFrame
        experience={<Experience />}
        projects={<Projects />}
        techStack={<TechStack />}
      />
    </div>
  );
};
