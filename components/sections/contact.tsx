import { MapPin, Clock, Phone, Instagram, Facebook, DollarSign } from "lucide-react"

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9:30 AM – 5:30 PM" },
  { day: "Wednesday", hours: "9:30 AM – 5:30 PM" },
  { day: "Thursday", hours: "9:30 AM – 5:30 PM" },
  { day: "Friday", hours: "9:30 AM – 5:30 PM" },
  { day: "Saturday", hours: "9:30 AM – 5:30 PM" },
  { day: "Sunday", hours: "Closed" },
]

export function Contact() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" })

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Find Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visit Kulture
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            No appointment needed. Walk in and we&apos;ll take care of you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-zinc-400">2820 Doyle Road, Suite 10</p>
                  <p className="text-zinc-400">Deltona, FL 32738</p>
                  <a
                    href="https://maps.google.com/?q=2820+Doyle+Road+Suite+10+Deltona+FL+32738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 text-sm mt-2 inline-block hover:text-amber-300 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+13219263462"
                    className="text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    (321) 926-3462
                  </a>
                  <p className="text-zinc-500 text-sm mt-1">
                    Walk-ins always welcome — no need to call ahead
                  </p>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Payment</h3>
                  <p className="text-zinc-400">Cash Only · Budget-friendly prices</p>
                  <p className="text-zinc-500 text-sm mt-1">
                    Please bring cash. ATM nearby.
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/kulture_barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 border border-white/5 hover:border-amber-500/30 rounded-xl px-5 py-3 text-zinc-400 hover:text-amber-400 transition-all"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">@kulture_barbershop</span>
              </a>
              <a
                href="https://www.facebook.com/people/Kulture-Barbershop/61560061584199/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 border border-white/5 hover:border-amber-500/30 rounded-xl px-5 py-3 text-zinc-400 hover:text-amber-400 transition-all"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>

          {/* Right: Hours */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Hours of Operation</h3>
            </div>

            <div className="space-y-3">
              {hours.map(({ day, hours: h }) => {
                const isToday = day === today
                const isClosed = h === "Closed"
                return (
                  <div
                    key={day}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors ${
                      isToday ? "bg-amber-500/10 border border-amber-500/20" : ""
                    }`}
                  >
                    <span
                      className={`font-medium text-sm ${
                        isToday ? "text-amber-400" : "text-zinc-300"
                      }`}
                    >
                      {day}
                      {isToday && (
                        <span className="ml-2 text-xs bg-amber-500 text-black px-1.5 py-0.5 rounded-full font-bold">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        isClosed ? "text-zinc-600" : isToday ? "text-amber-300" : "text-zinc-400"
                      }`}
                    >
                      {h}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Walk-ins welcome — no appointment needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
