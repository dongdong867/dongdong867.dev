import NavTitle from "@/components/nav-title";
import TechStack from "./components/tech-stack";
import SkillSet from "./components/skill-set";
import Experience from "./components/experience";
import ExploreMore from "./uiux/components/explore-more";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="w-full h-[40dvh]" />
      <NavTitle />
      <div className="w-full h-[10dvh]" />
      <TechStack />
      <SkillSet />
      <Experience />
      <ExploreMore />
    </div>
  );
}
