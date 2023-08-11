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
    </div>
  );
};

export default DesignsGrid;
