import { FinderFrame } from "./frame";
import { Application } from "./application";
import { Projects } from "./projects";
import { TechStack } from "./tech-stack";

export const Finder = () => {
  return (
    <FinderFrame
      application={<Application />}
      projects={<Projects />}
      techStack={<TechStack />}
    />
  );
};
