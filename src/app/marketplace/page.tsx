import cards from "@/data/cards";

export default function MarketplacePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-5xl font-bold">Cosmic Marketplace</h1>

      <p className="mt-3 text-lg text-gray-400">
        Collect, own and trade Cosmic Puddings.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4"
          >
            <img
              src={card.image}
              alt={card.name}
              className="aspect-square w-full rounded-xl bg-zinc-800 object-cover"
            />

            <h2 className="mt-4 font-semibold">{card.name}</h2>

            <p className="text-sm text-gray-400">{card.id}</p>

            <p className="mt-2">{card.rarity}</p>

            <p className="font-bold text-xl">
              ${card.price.toFixed(2)}
            </p>

            <button className="mt-4 w-full rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400">
              Buy Card
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
