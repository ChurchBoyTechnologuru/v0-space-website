import Image from "next/image"
import Link from "next/link"

export default function Visualizations() {
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
        <div className="flex-1 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-center text-3xl font-bold uppercase tracking-wider text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.5)] sm:mb-12 sm:text-4xl md:text-5xl lg:text-6xl">
              Data Visualizations
            </h1>

            <div className="space-y-12 md:space-y-16">
              {/* Correlation Heatmap */}
              <div className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-cyan-400 sm:text-2xl md:text-3xl">
                  Correlation Heatmap of Top 20 Features
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
                  This heatmap reveals the relationships between the most important features in the exoplanet dataset.
                  Red cells indicate positive correlations, while blue cells show negative correlations. Strong
                  correlations help identify which parameters are interconnected, such as planetary radius and orbital
                  characteristics.
                </p>
                <div className="overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/K2_correlation_heatmap-o6PpG96Mj1fpngOTN7dXDGim6DdZHZ.png"
                    alt="Correlation Heatmap"
                    width={1200}
                    height={1000}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Feature Importances */}
              <div className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-cyan-400 sm:text-2xl md:text-3xl">Feature Importances</h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
                  This bar chart displays which features have the greatest impact on exoplanet classification. The
                  planet name (pl_name) and host star name (hostname) show the highest importance scores, followed by
                  the number of planets in the system (sy_pnum). Understanding feature importance helps prioritize which
                  measurements are most critical for accurate predictions.
                </p>
                <div className="overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/K2_feature_importances-vOfZrn5qYWCdUily37KBfiXPThzTrS.png"
                    alt="Feature Importances"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Feature Distributions */}
              <div className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-cyan-400 sm:text-2xl md:text-3xl">Feature Distributions</h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
                  These distribution plots would show how key exoplanet parameters are spread across the dataset,
                  including orbital period, planetary radius, insolation flux, transit signal-to-noise ratio, stellar
                  temperature, and eccentricity. Distribution analysis helps identify patterns and outliers in the data.
                </p>
                <div className="overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/K2_feature_distributions-UyPXMOxinsiLaOJGLr8zLMIKKM8ztP.png"
                    alt="Feature Distributions"
                    width={1200}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Key Relationships */}
              <div className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md sm:p-8">
                <h2 className="mb-4 text-xl font-bold text-cyan-400 sm:text-2xl md:text-3xl">Key Relationships</h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
                  These scatter plots visualize the relationships between critical exoplanet parameters. By examining
                  how different features interact, we can identify trends such as the relationship between orbital
                  period and planetary size, or how stellar properties affect planetary characteristics.
                </p>
                <div className="overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/K2_key_relationships-RVmsHvnl3PiLxZdeYfKnYkVkmydxXq.png"
                    alt="Key Relationships"
                    width={1200}
                    height={1200}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
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
                className="text-base font-bold uppercase tracking-wider text-cyan-400 transition-colors hover:text-cyan-400 sm:text-lg"
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
