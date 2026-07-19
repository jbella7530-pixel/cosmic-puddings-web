import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function PuddingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: card } = await supabase
    .from("cards")
    .select("*")
    .eq("slug", id)
    .single();

  if (!card) {
    notFound();
  }

  return (
    <main className="p-6">
      <div className="max-w-xl mx-auto">
        <Image
          src={card.image_url}
          alt={card.name}
          width={500}
          height={500}
          className="rounded-xl"
        />

        <h1 className="text-4xl font-bold mt-6">
          {card.name}
        </h1>

        <p className="mt-3">
          Rarity: {card.rarity}
        </p>

        <p className="mt-3">
          {card.description}
        </p>

        <p className="mt-3">
          Edition: #{card.edition}
        </p>
      </div>
    </main>
  );
}
