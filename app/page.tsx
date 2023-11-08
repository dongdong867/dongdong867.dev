import NavTitle from "@/components/nav-title";
import TechStack from "./components/tech-stack";

export default function Home() {
  return (
    <div>
      <div className="mt-[50vh] mb-[30vh]">
        <NavTitle />
      </div>
      <TechStack />
    </div>
  );
}
