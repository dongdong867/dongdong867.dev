import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export const Backend = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="express.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="vapor.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="nestjs.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="java.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="nodejs.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="flask.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="spring.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="django.png" />
      </div>
    </>
  );
};
