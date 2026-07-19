export interface Pudding {
  id: number;
  name: string;
  flavor: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  image: string;
  description: string;


}

export const puddings: Pudding[] = [
  {
    id: 81,
    name: "Honeycomb Pudding",
    flavor: "Golden Honey",
    rarity: "Common",
    image: "/cards/honeycomb.png",
    description:
    "A cheerful pudding infused with warm golden honey harvested from cosmic bees.",
  },
  {
    id: 82,
    name: "Volcanic Magma Pudding",
    flavor: "Molten Chocolate",
    rarity: "Legendary",
    image: "/cards/volcanic.png",
    description:
    "A legendary pudding forged in volcanic magma with a molten chocolate core.",
  },
  {
    id: 83,
    name: "Frost Crystal Pudding",
    flavor: "Ice Vanilla",
    rarity: "Epic",
    image: "/cards/frost.png",
    description:
    "An icy crystal pudding that glows beneath frozen constellations.",
  },
  {
    id: 84,
    name: "Cotton Candy Cloud Pudding",
    flavor: "Rainbow Sugar",
    rarity: "Rare",
    image: "/cards/cloud.png",
    description:
    "A fluffy candy-cloud pudding drifting through rainbow nebulae.",
  },
  {
    id: 85,
    name: "Bamboo Mochi Pudding",
    flavor: "Matcha Moon",
    rarity: "Rare",
    image: "/cards/bamboo.png",
    description:
    "A peaceful matcha pudding inspired by ancient bamboo forests on distant moons.",
  },
  {
    id: 86,
    name: "Galaxy Berry Pudding",
    flavor: "Cosmic Fruit",
    rarity: "Epic",
    image: "/cards/galaxy.png",
    description:
    "A vibrant berry pudding infused with cosmic fruit gathered across the galaxy.",
  },
  {
    id: 87,
    name: "Nebula Vanilla Pudding",
    flavor: "Stardust Cream",
    rarity: "Common",
    image: "/cards/nebula.png",
    description:
    "A smooth vanilla pudding infused with shimmering stardust from deep space.",
  },
  {
    id: 88,
    name: "Rainbow Universe Pudding",
    flavor: "Infinite Candy",
    rarity: "Legendary",
    image: "/cards/rainbow.png",
    description:
    "The rarest pudding in existence, overflowing with every flavor in the universe.",
  },
];
