import { cn } from "@/lib/utils";
import { FinderFrame } from "./frame";
import { Application } from "./application";

const Projects = () => {
  return <div>Projects</div>;
};
const TechStack = () => {
  return <div>TechStack</div>;
};

export const Finder = () => {
  return (
    <FinderFrame
      application={Application()}
      projects={Projects()}
      techStack={TechStack()}
    />
  );
};
