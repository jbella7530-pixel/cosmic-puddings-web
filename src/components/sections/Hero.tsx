import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto mb-8 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          10,000 Cosmic Puddings Collection
        </div>

        <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
          Sweetness
          <br />
          Beyond The Stars
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Cosmic Puddings are unique dessert creatures from across the universe.
          Discover rare flavors, legendary characters, and collectible stories.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg">
            Explore Collection
          </Button>

          <Button
            size="lg"
            variant="outline"
          >
            Join The Universe
          </Button>
        </div>
      </div>
    </section>
  );
}
