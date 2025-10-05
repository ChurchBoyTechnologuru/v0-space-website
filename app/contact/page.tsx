import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
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
          <div className="w-full max-w-2xl rounded-2xl bg-black/40 p-6 backdrop-blur-md sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
            <h1 className="mb-6 text-center text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white sm:text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 backdrop-blur-sm transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:px-4 sm:py-3 sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white sm:text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 backdrop-blur-sm transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:px-4 sm:py-3 sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white sm:text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 backdrop-blur-sm transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:px-4 sm:py-3 sm:text-base"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-5 text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/70 sm:py-6 sm:text-lg"
              >
                Send Message
              </Button>
            </form>
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
              <Link
                href="/news"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-base font-bold uppercase tracking-wider text-cyan-400 sm:text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
