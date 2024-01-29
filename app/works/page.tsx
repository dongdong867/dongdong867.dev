import Image from "next/image";

const Works = () => {
  return (
    <div className="h-full">
      <div className="h-[20dvh]" />
      <div className="w-max m-auto md:text-xl">
        <div>On the journey to</div>
        <div className="text-xl md:text-3xl font-bold">
          improving people's life
        </div>
        <div>and</div>
        <div className="text-xl md:text-3xl font-bold">
          making a positive contribution.
        </div>
      </div>
      <div className="h-[20dvh]" />

      <div
        className="
        w-max
        flex max-md:flex-col m-auto
        place-items-start md:place-items-end
        max-md:space-y-4 md:space-x-8"
      >
        <div
          className="
          w-max p-10 rounded-3xl
          flex justify-center place-items-center
          bg-gradient-to-r from-[#6D90B9dd] to-[#bbc7dcdd]"
        >
          <Image
            src={"/works/dong-icon.png"}
            alt=""
            width={200}
            height={200}
            className="max-md:w-max drop-shadow-[10px_10px_20px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="w-max">
          <div className="text-3xl md:text-4xl font-bold">Dongdong867</div>
          <div className="text-lg md:text-xl">Icon/ Brand Design</div>
          <div className="max-md:text-sm">2023/08</div>
        </div>
      </div>
      <div className="h-[20dvh]" />

      <div className="w-4/5 m-auto space-y-8">
        <div className="w-full bg-white rounded-xl md:rounded-3xl overflow-hidden">
          <Image
            src={"/works/opennccu.png"}
            alt=""
            width={1000}
            height={800}
            className="w-full"
          />
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold">OpenNCCU</div>
          <div className="text-lg md:text-xl">Progressive Web Application</div>
          <div className="max-md:text-sm">2022/09 - Ongoing</div>
        </div>
      </div>
      <div className="h-[20dvh]" />
      
      <div className="w-full md:w-5/6 px-4 flex max-md:flex-col m-auto justify-around max-md:space-y-[20dvh]">
        <div className="w-max md:w-[30%] m-auto space-y-8">
          <div className="w-max md:w-full p-10 bg-white rounded-3xl">
            <Image
              src={"/works/go-cafe.png"}
              alt=""
              width={500}
              height={500}
              className="w-full drop-shadow-[10px_10px_20px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">Go Cafe</div>
            <div className="text-lg md:text-xl">Progressive Web Application</div>
            <div className="max-md:text-sm">2023/04 - 2023/07</div>
          </div>
        </div>
        <div className="w-max md:w-[30%] m-auto space-y-8">
          <div className="w-max md:w-full p-10 bg-white rounded-3xl">
            <Image
              src={"/works/what2eat.png"}
              alt=""
              width={500}
              height={500}
              className="w-full drop-shadow-[10px_10px_20px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">What2Eat</div>
            <div className="text-lg md:text-xl">Progressive Web Application</div>
            <div className="max-md:text-sm">2023/12 - Ongoing</div>
          </div>
        </div>
      </div>
      <div className="h-[20dvh]" />
    </div>
  );
};

export default Works;
