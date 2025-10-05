"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AnalysisResult {
  predicted_class: number | string
  confidence: number
  probabilities: {
    "0": number
    "1": number
    "2": number
  }
  timestamp: string
}

export default function ExplorePage() {
  const [formData, setFormData] = useState({
    koi_score: "",
    sy_pnum: "",
    koi_dikco_msky: "",
    dec: "",
    koi_dicco_msky: "",
    koi_fpflag_nt: "",
    ra: "",
    koi_ror: "",
    period: "",
    koi_model_snr: "",
  })

  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Function to convert numeric class to readable label
  const getClassLabel = (predictedClass: number | string): string => {
    const classMap: { [key: string]: string } = {
      "0": "FALSE POSITIVE",
      "1": "CONFIRMED",
      "2": "CANDIDATE"
    }
    return classMap[String(predictedClass)] || String(predictedClass)
  }

  // Function to get color based on class
  const getClassColor = (predictedClass: number | string): string => {
    const colorMap: { [key: string]: string } = {
      "0": "text-red-400",
      "1": "text-green-400",
      "2": "text-yellow-400",
      "FALSE POSITIVE": "text-red-400",
      "CONFIRMED": "text-green-400",
      "CANDIDATE": "text-yellow-400"
    }
    return colorMap[String(predictedClass)] || "text-white"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)
    setError(null)

    try {
      const response = await fetch("https://smart-telescope.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setResult(data.result)
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Error processing data. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 md:px-8">
          {/* Form Container */}
          <div className="w-full max-w-4xl rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md sm:p-8 md:p-10">
            <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-center text-2xl font-bold uppercase tracking-wider text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.5)] sm:mb-8 sm:text-3xl md:text-4xl">
              Exoplanet Analysis
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {/* KOI Score */}
                <div className="space-y-2">
                  <Label
                    htmlFor="koi_score"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    KOI Score
                  </Label>
                  <Input
                    id="koi_score"
                    name="koi_score"
                    type="number"
                    step="any"
                    value={formData.koi_score}
                    onChange={handleChange}
                    placeholder="0.85"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* System Planet Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="sy_pnum"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    System Planet Number
                  </Label>
                  <Input
                    id="sy_pnum"
                    name="sy_pnum"
                    type="number"
                    step="any"
                    value={formData.sy_pnum}
                    onChange={handleChange}
                    placeholder="1.0"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* KOI DIKCO MSKY */}
                <div className="space-y-2">
                  <Label
                    htmlFor="koi_dikco_msky"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    KOI DIKCO MSKY
                  </Label>
                  <Input
                    id="koi_dikco_msky"
                    name="koi_dikco_msky"
                    type="number"
                    step="any"
                    value={formData.koi_dikco_msky}
                    onChange={handleChange}
                    placeholder="0.320"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* Declination */}
                <div className="space-y-2">
                  <Label
                    htmlFor="dec"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    Declination (DEC)
                  </Label>
                  <Input
                    id="dec"
                    name="dec"
                    type="number"
                    step="any"
                    value={formData.dec}
                    onChange={handleChange}
                    placeholder="48.141651"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* KOI DICCO MSKY */}
                <div className="space-y-2">
                  <Label
                    htmlFor="koi_dicco_msky"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    KOI DICCO MSKY
                  </Label>
                  <Input
                    id="koi_dicco_msky"
                    name="koi_dicco_msky"
                    type="number"
                    step="any"
                    value={formData.koi_dicco_msky}
                    onChange={handleChange}
                    placeholder="0.200"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* KOI FP Flag NT */}
                <div className="space-y-2">
                  <Label
                    htmlFor="koi_fpflag_nt"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    KOI FP Flag NT
                  </Label>
                  <Input
                    id="koi_fpflag_nt"
                    name="koi_fpflag_nt"
                    type="number"
                    step="any"
                    value={formData.koi_fpflag_nt}
                    onChange={handleChange}
                    placeholder="0.0"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* Right Ascension */}
                <div className="space-y-2">
                  <Label
                    htmlFor="ra"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    Right Ascension (RA)
                  </Label>
                  <Input
                    id="ra"
                    name="ra"
                    type="number"
                    step="any"
                    value={formData.ra}
                    onChange={handleChange}
                    placeholder="291.93423"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* KOI ROR */}
                <div className="space-y-2">
                  <Label
                    htmlFor="koi_ror"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    KOI ROR
                  </Label>
                  <Input
                    id="koi_ror"
                    name="koi_ror"
                    type="number"
                    step="any"
                    value={formData.koi_ror}
                    onChange={handleChange}
                    placeholder="0.022344"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* Period */}
                <div className="space-y-2">
                  <Label
                    htmlFor="period"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    Period
                  </Label>
                  <Input
                    id="period"
                    name="period"
                    type="number"
                    step="any"
                    value={formData.period}
                    onChange={handleChange}
                    placeholder="9.488036"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>

                {/* KOI Model SNR */}
                <div className="space-y-2">
                  <Label
                    htmlFor="koi_model_snr"
                    className="text-sm font-semibold uppercase tracking-wide text-cyan-300 sm:text-base"
                  >
                    KOI Model SNR
                  </Label>
                  <Input
                    id="koi_model_snr"
                    name="koi_model_snr"
                    type="number"
                    step="any"
                    value={formData.koi_model_snr}
                    onChange={handleChange}
                    placeholder="35.8"
                    className="border-cyan-500/30 bg-black/50 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-12 py-6 text-base font-bold uppercase tracking-widest text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/70 disabled:opacity-50 sm:px-16 sm:text-lg"
                >
                  {isLoading ? "Analyzing..." : "Analyze"}
                </Button>
              </div>

              {result && (
                <div className="mt-6 rounded-lg border border-cyan-500/30 bg-black/60 p-4 sm:p-6">
                  <h2 className="mb-4 text-lg font-bold text-cyan-300 sm:text-xl">Analysis Result:</h2>

                  <div className="space-y-4">
                    {/* Predicted Class */}
                    <div className="rounded-md bg-black/40 p-3">
                      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Predicted Class</p>
                      <p className={`mt-1 text-xl font-bold ${getClassColor(result.predicted_class)}`}>
                        {getClassLabel(result.predicted_class)}
                      </p>
                    </div>

                    {/* Confidence */}
                    <div className="rounded-md bg-black/40 p-3">
                      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Confidence</p>
                      <p className="mt-1 text-xl font-bold text-white">{(result.confidence * 100).toFixed(2)}%</p>
                    </div>

                    {/* Probabilities */}
                    <div className="rounded-md bg-black/40 p-3">
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-400">Probabilities</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white">False Positive:</span>
                          <span className="font-bold text-red-400">
                            {(result.probabilities["0"] * 100).toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white">Confirmed:</span>
                          <span className="font-bold text-green-400">
                            {(result.probabilities["1"] * 100).toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white">Candidate:</span>
                          <span className="font-bold text-yellow-400">
                            {(result.probabilities["2"] * 100).toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Timestamp */}
                    <div className="rounded-md bg-black/40 p-3">
                      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Analysis Time</p>
                      <p className="mt-1 text-sm text-gray-300">{new Date(result.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-6 rounded-lg border border-red-500/30 bg-red-900/20 p-4 sm:p-6">
                  <h2 className="mb-3 text-lg font-bold text-red-400 sm:text-xl">Error:</h2>
                  <p className="text-base text-white sm:text-lg">{error}</p>
                </div>
              )}
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
              <Link
                href="/contact"
                className="text-base font-bold uppercase tracking-wider transition-colors hover:text-cyan-400 sm:text-lg"
              >
                Contact
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
          </ul>
        </nav>
      </div>
    </main>
  )
}
