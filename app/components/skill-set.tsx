import Image from "next/image";
import {
  SkillSetFirstLine,
  SkillSetFourthLine,
  SkillSetSecondLine,
  SkillSetThirdLine,
} from "../lib/skill-set-data";
import AutoScrollingContent from "@/components/auto-scrolling-content";

type Props = {
  skillSetData: {
    icon: string;
    name: string;
  }[];
};

const SkillSetLine = ({ skillSetData }: Props) => {
  return (
    <div className="w-full flex pr-4 gap-x-4 overflow-hidden overflow-x-scroll hide-scroll-bar">
      {skillSetData.map((skillSet) => {
        return (
          <div
            key={skillSet.name}
            className="w-max container flex gap-x-2 justify-center place-items-center px-4 py-2 bg-white rounded-full"
          >
            <Image
              src={skillSet.icon}
              alt=""
              width={200}
              height={200}
              className="w-5 h-max"
            />
            <div className="w-max whitespace-nowrap text-neutral font-semibold">
              {skillSet.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SkillSet = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-center mb-4">Skill Set</div>
      <div className="w-3/5 h-max space-y-3 px-px py-6 mx-auto overflow-hidden overflow-x-hidden rounded-[50px] bg-[url('/skill-stack/background.png')] bg-cover">
        <AutoScrollingContent baseVelocity={-5} wrapValue={{min: 0, max: -205}}>
          <SkillSetLine skillSetData={SkillSetFirstLine} />
        </AutoScrollingContent>
        <AutoScrollingContent baseVelocity={10} wrapValue={{min: 0, max: -205}}>
          <SkillSetLine skillSetData={SkillSetSecondLine} />
        </AutoScrollingContent>
        <AutoScrollingContent baseVelocity={-10} wrapValue={{min: 0, max: -188}}>
          <SkillSetLine skillSetData={SkillSetThirdLine} />
        </AutoScrollingContent>
        <AutoScrollingContent baseVelocity={5} wrapValue={{min: 0, max: -196}}>
          <SkillSetLine skillSetData={SkillSetFourthLine} />
        </AutoScrollingContent>
      </div>
    </div>
  );
};

export default SkillSet;
