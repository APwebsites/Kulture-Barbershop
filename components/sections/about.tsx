import { Heart, Users, Award, Scissors } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Precision Craft",
    description: "Every cut is executed with skill and attention to detail — no shortcuts, ever.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Kulture is more than a barbershop — it's a neighborhood hub built on trust and respect.",
  },
  {
    icon: Heart,
    title: "Inclusive Atmosphere",
    description: "We welcome everyone. Our barbers take extra care for all clients, including those with sensory needs.",
  },
  {
    icon: Scissors,
    title: "Walk-in Friendly",
    description: "No appointment needed. Come as you are and leave looking your best.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-amber-400 text-sm font-medium">Our Story</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              More Than a
              <br />
              <span className="text-amber-400">Haircut.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Kulture Barbershop was built on the belief that a great barbershop is the heart of its community.
              Located in Deltona, FL, we&apos;ve earned a reputation for delivering clean fades,
              sharp lineups, and genuine care for every client who walks through our door.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We take pride in creating an environment where everyone feels welcome — from long-time regulars
              to first-timers, kids to adults. Our barbers don&apos;t rush. We listen, we communicate, and we
              deliver results that speak for themselves.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">4.3★</div>
                <div className="text-zinc-500 text-sm mt-1">Google Rating</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">33+</div>
                <div className="text-zinc-500 text-sm mt-1">Reviews</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">5★</div>
                <div className="text-zinc-500 text-sm mt-1">Service</div>
              </div>
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-zinc-800/50 border border-white/5 rounded-2xl p-6 hover:border-amber-500/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
