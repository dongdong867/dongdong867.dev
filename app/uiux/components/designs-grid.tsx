import Image from "next/image";

const DesignsGrid = () => {
  return (
    <div className="grid grid-flow-row grid-cols-12 row-auto gap-6">
      <div className="col-span-5 row-span-2 aspect-square flex justify-center place-items-center rounded-[3rem] bg-gradient-to-r from-[#48607b] to-[#a2adbf]">
        <Image
          src={"/dong-icon.png"}
          alt="dong icon"
          width={2000}
          height={2000}
          className="w-2/3 h-auto aspect-auto"
        />
      </div>
      <div className="col-span-3 row-span-2 flex flex-col justify-between place-items-center space-y-6">
        <div className="w-full h-1/2 flex justify-center place-items-center rounded-[3rem] bg-neutral">
          <Image
            src={"/uiux/lets-beat-google.svg"}
            alt="let's beat google"
            width={2000}
            height={2000}
            className="w-5/12 h-auto aspect-auto"
          />
        </div>
        <div className="w-full h-1/2 flex justify-center place-items-center rounded-[3rem] bg-neutral">
          <Image
            src={"/uiux/github-issue-manager.svg"}
            alt="github issue manager"
            width={2000}
            height={2000}
            className="w-5/12 h-auto aspect-auto"
          />
        </div>
      </div>
      <div className="h-full aspect-[1/2] col-span-4 row-span-3 flex flex-col justify-center place-items-center rounded-[3rem] bg-neutral">
        <Image
          src={"/uiux/tricargo.png"}
          alt="tricargo"
          width={2000}
          height={6000}
          className="w-4/5 h-auto aspect-auto"
        />
      </div>
      <div className="w-full h-full aspect-[3/1] col-span-8 row-span-1 flex justify-center place-items-center rounded-[3rem] bg-neutral">
        <Image
          src={"/uiux/tricargo-logo.svg"}
          alt="tricargo"
          width={4000}
          height={2000}
          className="w-4/5 h-auto aspect-auto"
        />
      </div>
      <div className="h-full aspect-[1/2] col-span-4 row-span-3 flex flex-col justify-center place-items-center rounded-[3rem] bg-neutral">
        <Image
          src={"/uiux/go-cafe.png"}
          alt="go cafe"
          width={2000}
          height={6000}
          className="w-4/5 h-auto aspect-auto"
        />
      </div>
      <div className="w-full h-full aspect-[3/1] col-span-8 row-span-1 flex justify-center place-items-center rounded-[3rem] bg-neutral">
        <Image
          src={"/dong-logo.svg"}
          alt="dong logo"
          width={4000}
          height={2000}
          className="w-4/5 h-auto aspect-auto dark:invert"
        />
      </div>
    </div>
  );
};

export default DesignsGrid;
