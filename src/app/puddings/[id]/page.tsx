import { puddings } from "@/data/puddings";
import { notFound } from "next/navigation";

export default async function PuddingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pudding = puddings.find(
    (item) => item.id === id
  );

  if (!pudding) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold">
        {pudding.name}
      </h1>

      <div className="mt-6 space-y-3">
        <p>
          Rarity: {pudding.rarity}
        </p>

        <p>
          Element: {pudding.element}
        </p>

        <p>
          Power Level: {pudding.power}
        </p>

        <p>
          {pudding.description}
        </p>

        <p className="italic">
          {pudding.lore}
        </p>
      </div>
    </main>
  );
}
