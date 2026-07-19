import Link from "next/link";
import { puddings } from "@/data/puddings";

export default function CollectionPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Cosmic Puddings Collection
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {puddings.map((pudding) => (
          <Link
            key={pudding.id}
            href={`/puddings/${pudding.id}`}
            className="rounded-xl border p-6 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">{pudding.name}</h2>
            <p>Rarity: {pudding.rarity}</p>
            <p>Element: {pudding.element}</p>
            <p className="mt-3">{pudding.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
