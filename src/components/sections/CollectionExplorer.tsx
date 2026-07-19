"use client";

import { useMemo, useState } from "react";

import PuddingCard from "@/components/cards/PuddingCard";
import { puddings } from "@/data/puddings";

const rarities = [
  "All",
  "Common",
  "Rare",
  "Epic",
  "Legendary",
] as const;

export default function CollectionExplorer() {
  const [search, setSearch] = useState("");
  const [rarity, setRarity] =
    useState<(typeof rarities)[number]>("All");

  const filtered = useMemo(() => {
    return puddings.filter((pudding) => {
      const matchesSearch =
        pudding.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        pudding.flavor
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesRarity =
        rarity === "All" || pudding.rarity === rarity;

      return matchesSearch && matchesRarity;
    });
  }, [search, rarity]);

  return (
    <section
      id="collection"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-10">
        <h2 className="text-4xl font-black text-white">
          Cosmic Pudding Collection
        </h2>

        <p className="mt-3 text-gray-400">
          Browse the growing universe of collectible Cosmic
          Puddings.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <input
          type="text"
          placeholder="Search puddings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
        />

        <div className="flex flex-wrap gap-2">
          {rarities.map((item) => (
            <button
              key={item}
              onClick={() => setRarity(item)}
              className={`rounded-xl px-4 py-2 font-semibold transition ${
                rarity === item
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-8 text-sm text-gray-400">
        Showing {filtered.length} of {puddings.length} puddings
      </p>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {filtered.map((pudding) => (
          <PuddingCard
            key={pudding.id}
            pudding={pudding}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 rounded-3xl border border-dashed border-white/10 p-12 text-center">
          <div className="text-6xl">🍮</div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            No puddings found
          </h3>

          <p className="mt-3 text-gray-400">
            Try another search or rarity filter.
          </p>
        </div>
      )}
    </section>
  );
}
