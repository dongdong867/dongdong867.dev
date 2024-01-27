import NavTitle from "@/components/nav-title";
import TechStack from "./components/tech-stack";
import SkillSet from "./components/skill-set";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="w-full h-[40dvh]" />
      <NavTitle />
      <div className="w-full h-[10dvh]" />
      <TechStack />
      <SkillSet />
    </div>
  );
}
