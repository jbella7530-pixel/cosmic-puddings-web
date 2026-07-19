export type PuddingRarity =
  | "Common"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Cosmic";

export type Pudding = {
  id: string;
  name: string;
  rarity: PuddingRarity;
  element: string;
  flavor: string;
  description: string;
  lore: string;
  power: number;
  image?: string;
};

export const puddings: Pudding[] = [
  {
    id: "honeycomb",
    name: "Honeycomb Pudding",
    rarity: "Common",
    element: "Golden Nectar",
    flavor: "Honey Crystal",
    description: "A sweet cosmic pudding infused with ancient honey crystals.",
    lore: "Created in the first dessert galaxy, Honeycomb Pudding represents discovery and growth.",
    power: 120,
    image: "/puddings/honeycomb.png",
  },
  {
    id: "volcanic-magma",
    name: "Volcanic Magma Pudding",
    rarity: "Rare",
    element: "Fire",
    flavor: "Molten Chocolate",
    description: "A molten pudding forged inside a cosmic volcano.",
    lore: "Its core burns with energy from forgotten dessert planets.",
    power: 280,
    image: "/puddings/volcanic-magma.png",
  },
  {
    id: "bamboo-mochi",
    name: "Bamboo Mochi Pudding",
    rarity: "Epic",
    element: "Nature",
    flavor: "Green Tea Mochi",
    description: "A peaceful pudding guardian surrounded by bamboo forests.",
    lore: "Ancient monks protected this recipe for thousands of years.",
    power: 450,
    image: "/puddings/bamboo-mochi.png",
  },
  {
    id: "frost-crystal",
    name: "Frost Crystal Pudding",
    rarity: "Legendary",
    element: "Ice",
    flavor: "Frozen Vanilla Crystal",
    description: "A frozen crystal pudding from the edge of space.",
    lore: "Only collectors with patience can discover this frozen treasure.",
    power: 700,
    image: "/puddings/frost-crystal.png",
  },
  {
    id: "cotton-candy-cloud",
    name: "Cotton Candy Cloud Pudding",
    rarity: "Cosmic",
    element: "Sky",
    flavor: "Cosmic Sugar Cloud",
    description: "A mythical pudding floating beyond the universe.",
    lore: "The rarest pudding known across all cosmic dimensions.",
    power: 999,
    image: "/puddings/cotton-candy-cloud.png",
  },
];
