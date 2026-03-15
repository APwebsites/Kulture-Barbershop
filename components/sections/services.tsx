import { Scissors, Star, Sparkles, Wind } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Precision Haircut",
    description:
      "Classic and modern haircuts tailored to your style. From textured crops to clean tapers, we cut it right.",
    highlight: "Most Popular",
  },
  {
    icon: Star,
    title: "Fade & Lineup",
    description:
      "The signature Kulture fade — crisp, clean, and sharp. Skin fades, taper fades, high or low, we do it all.",
    highlight: "Signature Service",
  },
  {
    icon: Wind,
    title: "Beard Trim & Shape",
    description:
      "Sculpt and define your beard with precision edging, clean necklines, and classic razor technique.",
    highlight: null,
  },
  {
    icon: Sparkles,
    title: "Hot Towel Shave",
    description:
      "A classic straight-razor shave experience with hot towel prep for the smoothest finish.",
    highlight: null,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <Scissors className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every service is performed with care and precision. No rush, just results you&apos;ll love.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="relative group bg-zinc-900 border border-white/5 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Cash only note */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-xl px-6 py-3">
            <span className="text-2xl">💵</span>
            <span className="text-zinc-300 text-sm font-medium">
              <span className="text-amber-400 font-bold">Cash Only</span> · Budget-friendly pricing for everyone
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
