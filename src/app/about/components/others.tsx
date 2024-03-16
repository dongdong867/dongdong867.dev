import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export const Others = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="transformers.png" />
        <SkillIcon src="pytorch.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="selenium.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="git.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="socket.png" />
        <SkillIcon src="graphql.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="linux.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="apollo.png" />
      </div>
    </>
  );
};
