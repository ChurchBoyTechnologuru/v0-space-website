import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
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
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-6 md:px-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.5)] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Smart Telescope
            </h1>
            <p className="mb-8 text-base font-light tracking-wide text-cyan-100 drop-shadow-[0_0_10px_rgba(103,232,249,0.3)] sm:mb-10 sm:text-lg md:mb-12 md:text-xl lg:text-2xl">
              Explore the Universe from Your Backyard
            </p>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-12 py-6 text-lg font-bold uppercase tracking-widest text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/70 sm:px-16 sm:py-7 sm:text-xl md:px-20 md:py-8 md:text-2xl"
              asChild
            >
              <Link href="/explore">Explore</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="pb-8 sm:pb-12 md:pb-14">
          <ul className="flex flex-col items-center justify-center gap-4 text-white sm:flex-row sm:gap-6 md:gap-8 lg:gap-12">
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
              <Link
                href="/news"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/visualizations"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                Visualizations
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
