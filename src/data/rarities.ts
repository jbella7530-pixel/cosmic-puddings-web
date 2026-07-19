export interface Rarity {
  name: string;
  price: number;
  maxSupply: number | null;
  color: string;
  border: string;
  certificate: boolean;
  registry: boolean;
  mysteryPackEligible: boolean;
}

export const rarities: Rarity[] = [
  {
    name: "Common",
    price: 5.99,
    maxSupply: null,
    color: "#D9D9D9",
    border: "border-gray-400",
    certificate: false,
    registry: false,
    mysteryPackEligible: true,
  },
  {
    name: "Rare",
    price: 13.99,
    maxSupply: null,
    color: "#3B82F6",
    border: "border-blue-500",
    certificate: false,
    registry: false,
    mysteryPackEligible: true,
  },
  {
    name: "Epic",
    price: 28.99,
    maxSupply: null,
    color: "#8B5CF6",
    border: "border-purple-500",
    certificate: true,
    registry: false,
    mysteryPackEligible: true,
  },
  {
    name: "Legendary",
    price: 38.99,
    maxSupply: null,
    color: "#F59E0B",
    border: "border-yellow-500",
    certificate: true,
    registry: true,
    mysteryPackEligible: true,
  },
  {
    name: "Cosmic",
    price: 66.99,
    maxSupply: null,
    color: "#06B6D4",
    border: "border-cyan-500",
    certificate: true,
    registry: true,
    mysteryPackEligible: true,
  },
  {
    name: "Celestial",
    price: 149.99,
    maxSupply: 5000,
    color: "#E5E7EB",
    border: "border-slate-300",
    certificate: true,
    registry: true,
    mysteryPackEligible: false,
  },
  {
    name: "Transcendent",
    price: 299.99,
    maxSupply: 1000,
    color: "#FFD700",
    border: "border-amber-400",
    certificate: true,
    registry: true,
    mysteryPackEligible: false,
  },
  {
    name: "Genesis",
    price: 999.99,
    maxSupply: 500,
    color: "#D4AF37",
    border: "border-yellow-300",
    certificate: true,
    registry: true,
    mysteryPackEligible: false,
  },
  {
    name: "Sovereign",
    price: 2499.99,
    maxSupply: 50,
    color: "#111111",
    border: "border-yellow-500",
    certificate: true,
    registry: true,
    mysteryPackEligible: false,
  },
  {
    name: "Eternal One",
    price: 100000,
    maxSupply: 1,
    color: "#000000",
    border: "border-white",
    certificate: true,
    registry: true,
    mysteryPackEligible: false,
  },
];
