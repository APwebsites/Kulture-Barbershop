"use client"

import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"
import { MapPin, Clock, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Grid background */}
      <GridPattern
        strokeDasharray="2"
        width={60}
        height={60}
        className={cn(
          "fill-amber-500/5 stroke-amber-500/10",
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-400 text-sm font-medium">Walk-ins Welcome · Deltona, FL</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
          Kulture
          <br />
          <span className="text-amber-400">Barbershop</span>
        </h1>

        {/* Gooey morphing text */}
        <div className="h-[100px] flex items-center justify-center mb-8">
          <GooeyText
            texts={["Clean Fades", "Sharp Lineups", "Beard Trims", "Fresh Cuts"]}
            morphTime={1.2}
            cooldownTime={2}
            className="font-bold"
            textClassName="text-zinc-300 text-4xl md:text-5xl"
          />
        </div>

        <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          The best barbershop in Deltona. Precision cuts, clean fades, and sharp
          beard work — every single time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            Get Your Cut Today
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-white/20 hover:border-amber-500/50 text-white hover:text-amber-400 font-semibold px-8 py-3.5 rounded-xl text-base transition-all"
          >
            View Services
          </a>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>2820 Doyle Rd Suite 10, Deltona, FL</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Tue–Sat · 9:30AM – 5:30PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(321) 926-3462</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
