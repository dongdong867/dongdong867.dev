import { cn } from "@/lib/utils"
import { SkillIcon } from "./SkillIcon"

export const Languages = () => {
  return (
    <>
      <div className={cn("space-y-2")}>
        <SkillIcon src="typescript.png" />
        <SkillIcon src="python.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="rust.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="java.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="blank.png" />
        <SkillIcon src="swift.png" />
        <SkillIcon src="blank.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="kotlin.png" />
        <SkillIcon src="blank.png" />
        <SkillIcon src="dart.png" />
      </div>
      <div className={cn("space-y-2")}>
        <SkillIcon src="javascript.png" />
        <SkillIcon src="cpp.png" />
        <SkillIcon src="csharp.png" />
      </div>
    </>
  )
}