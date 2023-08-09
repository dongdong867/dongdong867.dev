import NavTitle from "@/components/nav-title";
import Image from "next/image";

const UIUXPage = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-max h-max m-auto my-10 rounded-[4rem] overflow-hidden">
          <video src="/uiux/logo-animation.mp4" autoPlay muted loop />
        </div>
        <NavTitle />
      </div>
      <div>
        <div className="w-1/4 p-20 rounded-[3rem] bg-gradient-to-r from-[#48607b] to-[#a2adbf]">
          <Image
            src={"/dong-icon.png"}
            alt="dong icon"
            width={2000}
            height={2000}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default UIUXPage;
