import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export const Mobile = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="swift.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="pwa.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="swiftui.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="flutter.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="coredata.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="swiftdata.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="uikit.png" />
      </div>
    </>
  );
};
