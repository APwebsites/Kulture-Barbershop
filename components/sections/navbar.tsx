"use client"

import * as React from "react"
import { Scissors, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [themeOpen, setThemeOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-colors">
              <Scissors className="w-4 h-4 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Kulture
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle button */}
            <div className="relative">
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-zinc-500 rounded-lg px-3 py-1.5"
              >
                <span>Theme</span>
              </button>
              {themeOpen && (
                <div className="absolute right-0 top-full mt-2 w-[380px] z-50">
                  <ThemeToggle />
                </div>
              )}
            </div>

            {/* Book CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Walk In Today
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-t border-white/10 px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-zinc-300 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
