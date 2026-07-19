import { rarities } from "./rarities";

export interface CosmicCard {
  id: string;
  name: string;
  season: number;
  collection: string;
  rarity: string;
  price: number;
  image: string;
  lore: string;
  owned: boolean;
  owner: string | null;
  listed: boolean;
  certificate: boolean;
  registry: boolean;
}

const rarityDistribution = [
  { name: "Common", count: 550 },
  { name: "Rare", count: 220 },
  { name: "Epic", count: 110 },
  { name: "Legendary", count: 55 },
  { name: "Cosmic", count: 35 },
  { name: "Celestial", count: 15 },
  { name: "Transcendent", count: 8 },
  { name: "Genesis", count: 5 },
  { name: "Sovereign", count: 1 },
  { name: "Eternal One", count: 1 },
];

const cards: CosmicCard[] = [];

let current = 1;

for (const rarity of rarityDistribution) {
  const rarityInfo = rarities.find((r) => r.name === rarity.name)!;

  for (let i = 0; i < rarity.count; i++) {
    cards.push({
      id: `CP-${String(current).padStart(6, "0")}`,
      name: `${rarity.name} Cosmic Pudding #${current}`,
      season: 1,
      collection: "Galaxy Origins",
      rarity: rarity.name,
      price: rarityInfo.price,
      image: `/cards/season-1/${String(current).padStart(6, "0")}.png`,
      lore: "Lore coming soon...",
      owned: false,
      owner: null,
      listed: true,
      certificate: rarityInfo.certificate,
      registry: rarityInfo.registry,
    });

    current++;
  }
}

export default cards;
