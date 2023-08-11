import NavTitle from "@/components/nav-title";
import DesignsGrid from "./components/designs-grid";

const UIUXPage = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-4/5 h-max m-auto my-10 rounded-[4rem] overflow-hidden">
          <video
            src="/uiux/logo-animation.mp4"
            autoPlay
            muted
            loop
            className="w-full"
          />
        </div>
        <NavTitle />
      </div>
      <div className="m-8">
        <DesignsGrid />
      </div>
    </div>
  );
};

export default UIUXPage;
