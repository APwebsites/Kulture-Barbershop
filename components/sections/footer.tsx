import { Scissors, Instagram, Facebook, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <Scissors className="w-4 h-4 text-black" />
              </div>
              <span className="text-xl font-bold text-white">Kulture Barbershop</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The best barbershop in Deltona, FL. Clean fades, sharp lineups, and a community you can count on.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Reviews", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>2820 Doyle Rd Suite 10, Deltona, FL 32738</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(321) 926-3462</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.instagram.com/kulture_barbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/Kulture-Barbershop/61560061584199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-amber-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Kulture Barbershop · Deltona, FL
          </p>
          <p className="text-zinc-700 text-xs">
            Cash Only · Walk-ins Welcome · Tue–Sat 9:30AM–5:30PM
          </p>
        </div>
      </div>
    </footer>
  )
}
