import NavTitle from "@/components/nav-title";
import TechStack from "./components/tech-stack";
import SkillSet from "./components/skill-set";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="mt-[50vh] mb-[30vh]">
        <NavTitle />
      </div>
      <TechStack />
      <SkillSet />
    </div>
  );
}
