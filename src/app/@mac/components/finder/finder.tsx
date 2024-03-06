
import { Projects } from "./projects";
import { TechStack } from "./tech-stack";
import { Experience } from "./experience";
import { FinderFrame } from "./frame";

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
