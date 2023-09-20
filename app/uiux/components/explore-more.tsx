import TranslatableContext from "@/components/translatable-context";

const ExploreMore = () => {
  return (
    <div className="w-2/3 m-auto font-display font-black my-60 max-sm:my-40">
      <div className="text-6xl max-sm:text-3xl">
        <div>Explore</div>
        <div>More in</div>
      </div>
      <TranslatableContext className="p-2 rounded-xl">
        <div className="text-8xl underline underline-offset-8 max-sm:text-5xl">
          WORKS.
        </div>
      </TranslatableContext>
    </div>
  );
};

export default ExploreMore;
