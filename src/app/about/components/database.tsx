import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export const Database = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="postgres.png" />
        <SkillIcon src="mongo.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="mysql.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="drizzle.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="firebase.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="prisma.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="sqlite.png" />
        <SkillIcon src="redis.png" />
      </div>
    </>
  );
};
