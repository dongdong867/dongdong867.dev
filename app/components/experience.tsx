import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ExperienceCardProps = {
  current?: boolean;
  title: string;
  at: string;
  time: string;
  logoPath: string;
};

const ExperienceCard = ({
  current = false,
  title,
  at,
  time,
  logoPath,
}: ExperienceCardProps) => {
  return (
    <div className="w-max h-full p-4 flex flex-col place-items-center space-y-4">
      {current && <Badge className="w-max">Current</Badge>}
      <div className="w-max h-max p-6 bg-neutral rounded-3xl">
        <div className="w-full px-1">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-lg">@{at}</div>
          <div className="text-xs">{time}</div>
        </div>
        <div className="h-6" />
        <div className="w-full flex m-auto justify-center">
          <Image
            src={logoPath}
            alt=""
            width={160}
            height={160}
            className="aspect-square bg-white rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-bold text-center">Experience</div>
      <div className="px-4 md:px-10 flex m-auto place-items-end overflow-y-scroll hide-scroll-bar">
        <ExperienceCard
          current
          title="Tech Lead"
          at="OpenNCCU"
          time="2023/06-Present"
          logoPath="/experience/opennccu.png"
        />
        <ExperienceCard
          current
          title="NLP Researcher"
          at="OpenNCCU"
          time="2023/08-Present"
          logoPath="/experience/csrone.png"
        />
        <ExperienceCard
          current={true}
          title="Tech Team"
          at="GDSC NCCU"
          time="2023/09-Present"
          logoPath="/experience/gdsc.png"
        />
        <ExperienceCard
          current={true}
          title="General Affairs"
          at="BSG NCCU"
          time="2023/08-Present"
          logoPath="/experience/bsg.jpeg"
        />
        <ExperienceCard
          title="Frontend Engineer"
          at="OpenNCCU"
          time="2022/08-2023/05"
          logoPath="/experience/opennccu.png"
        />
      </div>
    </div>
  );
};

export default Experience;
