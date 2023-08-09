import NavTitle from "@/components/nav-title";
import Image from "next/image";

const UIUXPage = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-max h-max m-auto my-10 rounded-[3rem] overflow-hidden">
          <video src="/uiux/logo-animation.mp4" autoPlay muted loop />
        </div>
        <NavTitle />
      </div>
    </div>
  );
};

export default UIUXPage;
