"use client";

import Image from "next/image";
import {
  AdditionalSets,
  BackendSets,
  DatabaseSets,
  FrontendSets,
  HostingSets,
  MobileSets,
  ProgrammingLanguageSets,
} from "../lib/skill-set-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  skillSetData: {
    icon: string;
    name: string;
  }[];
};

const SkillSetCard = ({ title, skillSetData }: Props) => {
  return (
    <CarouselItem className="px-8">
      <Card className="bg-[url('/skill-stack/background.png')] bg-cover">
        <CardHeader>
          <CardTitle className="text-3xl text-white drop-shadow-[3px_4px_5px_rgba(0,0,0,0.3)]">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full gap-4 flex flex-wrap justify-center hide-scroll-bar">
            {skillSetData.map((skillSet) => {
              return (
                <div
                  key={skillSet.name}
                  className="w-max flex gap-x-2 justify-center place-items-center px-4 py-2 bg-white rounded-full shadow-[3px_4px_10px_3px_#00000020]"
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
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

const SkillSet = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-center">Skill Set</div>
      <div
        className="
        w-11/12 h-max
        flex justify-center
        space-y-3 mx-auto
        py-6"
      >
        <Carousel plugins={[Autoplay({delay: 4000})]} className="w-3/4 max-w-[1000px]">
          <CarouselContent className="flex place-items-center">
            <SkillSetCard title={"Frontend"} skillSetData={FrontendSets} />
            <SkillSetCard title={"Backend"} skillSetData={BackendSets} />
            <SkillSetCard title={"Mobile"} skillSetData={MobileSets} />
            <SkillSetCard title={"Database"} skillSetData={DatabaseSets} />
            <SkillSetCard
              title={"Programming Languages"}
              skillSetData={ProgrammingLanguageSets}
            />
            <SkillSetCard title={"Hosting"} skillSetData={HostingSets} />
            <SkillSetCard
              title={"Others (NLP, ML, Crawling)"}
              skillSetData={AdditionalSets}
            />
          </CarouselContent>
          <CarouselPrevious className="cursor-none hover:bg-gray disabled:text-transparent" />
          <CarouselNext className="cursor-none hover:bg-gray disabled:text-transparent" />
        </Carousel>
      </div>
    </div>
  );
};

export default SkillSet;
