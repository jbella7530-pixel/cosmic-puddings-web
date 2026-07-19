import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data: cards } = await supabase
    .from("cards")
    .select("*")
    .order("edition", { ascending: true })
    .limit(6);

  return (
    <main className="min-h-screen p-6">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold">
          Cosmic Puddings
        </h1>

        <p className="mt-4 text-lg">
          Collect rare cosmic dessert cards from Galaxy Origins.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards?.map((card) => (
          <Link
            key={card.id}
            href={`/puddings/${card.slug}`}
          >
            <div className="border rounded-xl p-4">
              <Image
                src={card.image_url}
                alt={card.name}
                width={300}
                height={300}
                className="rounded-lg"
              />

              <h2 className="font-bold mt-3">
                {card.name}
              </h2>

              <p>
                {card.rarity}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
