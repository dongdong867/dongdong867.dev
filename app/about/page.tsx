import TranslatableContext from "@/components/translatable-context";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="h-20" />
      <div className="w-5/6 md:w-max flex place-items-end m-auto md:space-x-10">
        <Image
          src={"/about/avatar.jpg"}
          alt=""
          width={300}
          height={500}
          className="rounded-md max-md:hidden"
        />

        <div>
          <div className="max-md:h-[30dvh]" />
          <div className="text-xl font-semibold">About</div>
          <div className="w-max pb-2 text-4xl md:text-5xl font-bold leading-snug text-transparent bg-title-gradient bg-clip-text">
            Dongdong867.
          </div>
          <div className="h-10" />
          <div className="text-sm space-y-2">
            <div>A independent developer @Taipei, Taiwan.</div>
            <div>A junior student studying MIS @NCCU.</div>
            <div>Co-founder and Tech Lead @OpenNCCU.</div>
          </div>
          <div className="h-10" />
        </div>
      </div>

      <div className="h-[30dvh]" />
      <div className="w-4/5 m-auto">
        My journey involves mastering complex code while embracing continuous
        learning, driven by curiosity for technology and a passion for crafting
        innovative digital solutions.
      </div>
      <div className="h-[20dvh]" />

      <Image
        src={"/about/dong.jpg"}
        alt=""
        width={1000}
        height={1000}
        className="w-4/5 m-auto"
      />
      <div className="h-[20dvh]" />

      <div className="w-5/6 md:w-3/5 m-auto space-y-4">
        <div>
          I am dedicated to building meaningful connections with like-minded
          enthusiasts who share my passion for creating exceptional digital
          experiences.
        </div>
        <div className="w-max">
          <TranslatableContext>
            <div
              className="
            w-max text-3xl
            underline underline-offset-8
            hover:text-transparent hover:bg-title-gradient hover:bg-clip-text"
            >
              Feel free to contact me.
            </div>
          </TranslatableContext>
        </div>
      </div>
      <div className="h-[10dvh]" />
    </div>
  );
};

export default About;
