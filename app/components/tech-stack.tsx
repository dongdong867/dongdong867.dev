import Image from "next/image";
import Cone from "public/cone.png"
import Donut from "public/donut.png"

const techStack = () => {
  return (
    <div className="relative m-auto w-max h-max mb-20">
      <div className="relative w-max m-auto">
        <div className="mb-4 text-3xl font-semibold">I Develop</div>
        <div className="pl-10 md:pl-20 text-5xl md:text-8xl lg:text-9xl font-bold md:tracking-tight">
          <div className="relative z-20">Frontend</div>
          <div>Backend</div>
          <div>Database</div>
          <div>Mobile App</div>
          <div className="relative z-20">NLP, LLM</div>
        </div>
      </div>
      <Image src={Donut} alt="" width={300} height={300} className="absolute w-1/3 top-[12%] md:top-[5%] lg:top-[3%] left-[70%] z-10" />
      <Image src={Cone} alt="" width={300} height={300} className="absolute w-1/3 -left-[8%] lg:-left-[10%] -bottom-[12%]" />
    </div>
  );
};

export default techStack;
