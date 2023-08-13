import TranslatableContext from "@/components/translatable-context";

const ExploreMore = () => {
  return (
    <div className="w-max font-display font-black translate-x-[20%] my-60">
      <div className="text-6xl">
        <div>Explore</div>
        <div>More in</div>
      </div>
      <TranslatableContext className="p-2 rounded-xl">
        <div className="text-8xl underline underline-offset-8">WORKS.</div>
      </TranslatableContext>
    </div>
  );
};

export default ExploreMore;
