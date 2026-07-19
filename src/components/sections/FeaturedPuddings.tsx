import PuddingCard from "@/components/cards/PuddingCard";
import { puddings } from "@/data/puddings";

export default function FeaturedPuddings() {
  return (
    <section
      id="collection"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black text-white">
          Featured Cosmic Puddings
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          The first generation of collectible dessert creatures from across the
          universe.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {puddings.map((pudding) => (
          <PuddingCard
            key={pudding.id}
            pudding={pudding}
          />
        ))}
      </div>
    </section>
  );
}
