import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import CollectionExplorer from "@/components/sections/CollectionExplorer";
import About from "@/components/sections/About";
import Roadmap from "@/components/sections/Roadmap";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <Hero />

      <CollectionExplorer />

      <About />

      <Roadmap />

      <Footer />
    </main>
  );
}
