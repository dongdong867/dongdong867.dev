import TranslatableContext from "@/components/translatable-context";

const ExploreMore = () => {
  return (
    <div className="w-max m-auto font-display font-black">
      <div className="h-20" />
      <div className="text-6xl max-sm:text-3xl">
        <div>Explore</div>
        <div>More in</div>
      </div>
      <TranslatableContext className="w-max p-2 rounded-xl">
        <div
          className="
          text-8xl max-sm:text-5xl
          underline underline-offset-8
          hover:text-transparent hover:bg-title-gradient hover:bg-clip-text"
        >
          WORKS.
        </div>
      </TranslatableContext>
      <div className="h-40" />
    </div>
  );
};

export default ExploreMore;
