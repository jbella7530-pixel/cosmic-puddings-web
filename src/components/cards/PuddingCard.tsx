import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Pudding } from "@/data/puddings";

interface PuddingCardProps {
  pudding: Pudding;
}

const rarityColors = {
  Common: "bg-gray-700 text-white",
  Rare: "bg-blue-600 text-white",
  Epic: "bg-purple-600 text-white",
  Legendary: "bg-amber-500 text-black",
  Cosmic: "bg-pink-600 text-white",
};

export default function PuddingCard({
  pudding,
}: PuddingCardProps) {
  return (
    <Link href={`/puddings/${pudding.id}`}>
      <Card className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-white/30">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-500">
          {pudding.image ? (
            <Image
              src={pudding.image}
              alt={pudding.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="text-7xl">🍮</div>
                <p className="mt-4 font-bold text-white">
                  Artwork Coming Soon
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4 p-6">
          <h3 className="text-2xl font-black text-white">
            {pudding.name}
          </h3>

          <p className="text-gray-400">
            {pudding.flavor}
          </p>

          <div className="flex items-center justify-between">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                rarityColors[pudding.rarity]
              }`}
            >
              {pudding.rarity}
            </span>

            <span className="text-sm text-white">
              Power {pudding.power}
            </span>
          </div>

          <p className="text-sm text-gray-400">
            Element: {pudding.element}
          </p>
        </div>
      </Card>
    </Link>
  );
}
