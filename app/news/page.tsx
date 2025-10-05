import Image from "next/image"
import Link from "next/link"

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "March 15, 2024",
      title: "New AI-Powered Object Recognition Released",
      excerpt:
        "Our latest software update includes advanced AI that can identify over 10,000 celestial objects automatically.",
    },
    {
      id: 2,
      date: "March 8, 2024",
      title: "Smart Telescope Captures Rare Supernova",
      excerpt:
        "A user in Australia captured stunning images of a supernova in the Andromeda galaxy using our automated tracking system.",
    },
    {
      id: 3,
      date: "February 28, 2024",
      title: "Partnership with International Space Station",
      excerpt: "We're excited to announce our collaboration with NASA to provide educational content from the ISS.",
    },
    {
      id: 4,
      date: "February 20, 2024",
      title: "Community Reaches 10,000 Members",
      excerpt:
        "Our global community of space enthusiasts has grown to over 10,000 active members sharing their discoveries.",
    },
  ]

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-41-hRDGX3bqiJJslls78wN8542YFBT0BI.jpg"
          alt="Space background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
          <div className="w-full max-w-5xl">
            <h1 className="mb-8 text-center text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl md:mb-10 md:text-5xl lg:mb-12 lg:text-6xl">
              Latest News
            </h1>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl bg-black/40 p-6 backdrop-blur-md transition-all hover:bg-black/50 sm:rounded-2xl sm:p-7 md:p-8"
                >
                  <time className="mb-2 block text-xs uppercase tracking-wide text-cyan-400 sm:mb-3 sm:text-sm">
                    {item.date}
                  </time>
                  <h2 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-white/80 sm:text-base">{item.excerpt}</p>
                  <button className="mt-4 text-xs font-semibold uppercase tracking-wide text-cyan-400 transition-colors hover:text-cyan-300 sm:mt-6 sm:text-sm">
                    Read More →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="pb-8 sm:pb-12 md:pb-14">
          <ul className="flex flex-col items-center justify-center gap-4 text-white sm:flex-row sm:gap-8 md:gap-12 lg:gap-16">
            <li>
              <Link
                href="/"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-base font-bold uppercase tracking-wider text-cyan-400 sm:text-lg">
                News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
