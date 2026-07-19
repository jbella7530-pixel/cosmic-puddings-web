import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-black tracking-wide text-white"
        >
          Cosmic Puddings
        </Link>

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#collection" className="hover:text-white">
            Collection
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#roadmap" className="hover:text-white">
            Roadmap
          </a>
        </nav>
      </div>
    </header>
  );
}
