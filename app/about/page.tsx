import Image from "next/image"
import Link from "next/link"

export default function About() {
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
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
          <div className="max-w-4xl rounded-2xl bg-black/40 p-6 backdrop-blur-md sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
            <h1 className="mb-6 text-center text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <div className="space-y-4 text-base leading-relaxed text-white/90 sm:space-y-5 sm:text-lg md:space-y-6">
              <p>
                Smart Telescope is revolutionizing the way we explore the cosmos. Our cutting-edge technology combines
                advanced optics with intelligent software to bring the wonders of the universe to your fingertips.
              </p>
              <p>
                Founded by a team of astronomers and engineers, we believe that everyone should have access to the
                beauty and mystery of space. Our telescopes automatically track celestial objects, identify stars and
                planets, and capture stunning images with ease.
              </p>
              <p>
                Whether you're a seasoned astronomer or just beginning your journey into the stars, Smart Telescope
                makes space exploration accessible, educational, and inspiring.
              </p>
              <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:mt-12 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-cyan-400 sm:mb-3 sm:text-4xl">10K+</div>
                  <div className="text-xs uppercase tracking-wide sm:text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-cyan-400 sm:mb-3 sm:text-4xl">50M+</div>
                  <div className="text-xs uppercase tracking-wide sm:text-sm">Images Captured</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-cyan-400 sm:mb-3 sm:text-4xl">100+</div>
                  <div className="text-xs uppercase tracking-wide sm:text-sm">Countries</div>
                </div>
              </div>
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
              <Link href="/about" className="text-base font-bold uppercase tracking-wider text-cyan-400 sm:text-lg">
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
