import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { puddings } from "@/data/puddings";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const rarityColors = {
  Common: "bg-gray-700 text-white",
  Rare: "bg-blue-600 text-white",
  Epic: "bg-purple-600 text-white",
  Legendary: "bg-amber-500 text-black",
};

export default async function PuddingPage({
  params,
}: PageProps) {
  const { id } = await params;

  const pudding = puddings.find(
    (item) => item.id === Number(id)
  );

  if (!pudding) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-10 inline-flex text-purple-400 transition hover:text-purple-300"
        >
          ← Back to Collection
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-500 shadow-2xl">
            {pudding.image ? (
              <Image
                src={pudding.image}
                alt={pudding.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl">🍮</div>
                  <p className="mt-4 font-bold">
                    Artwork Coming Soon
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <span
              className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${
                rarityColors[pudding.rarity]
              }`}
            >
              {pudding.rarity}
            </span>

            <h1 className="mt-6 text-5xl font-black md:text-6xl">
              {pudding.name}
            </h1>

            <p className="mt-4 text-xl text-purple-300">
              {pudding.flavor}
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              {pudding.description}
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Pudding ID</span>
                <span className="font-bold">#{pudding.id}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-gray-400">Flavor</span>
                <span className="font-bold">{pudding.flavor}</span>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="text-gray-400">Rarity</span>
                <span className="font-bold">{pudding.rarity}</span>
              </div>
            </div>

            <Link
              href="/"
              className="mt-10 inline-flex rounded-xl bg-purple-600 px-6 py-3 font-bold transition hover:bg-purple-500"
            >
              Explore More Puddings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
