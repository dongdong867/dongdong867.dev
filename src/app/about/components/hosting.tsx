import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export const Hosting = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="docker.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="cloudflare.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="npm.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="vercel.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="aws.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="github.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="nginx.png" />
        <SkillIcon src="gcp.png" />
      </div>
    </>
  );
};
