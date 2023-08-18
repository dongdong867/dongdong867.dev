import NavTitle from "@/components/nav-title";
import DesignsGrid from "./components/designs-grid";
import ExploreMore from "./components/explore-more";

const UIUXPage = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-2/3 h-max m-auto my-20 rounded-[3rem] overflow-hidden max-sm:w-4/5 max-sm:my-10 max-sm:rounded-2xl">
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
      <div className="my-10">
        <DesignsGrid />
      </div>
      <div>
        <ExploreMore />
      </div>
    </div>
  );
};

export default UIUXPage;
