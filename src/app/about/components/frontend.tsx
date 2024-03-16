import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export const Frontend = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="nextjs.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="nuxt.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="react.png" />
        <SkillIcon src="vue.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="nextauth.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="html.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="framer.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="css.png" />
        <SkillIcon src="tailwindcss.png" />
        <SkillIcon src="shadcn.png" />
      </div>
    </>
  );
};
