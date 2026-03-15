"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { SystemTheme } from "@/components/ui/system-theme"
import { LightTheme } from "@/components/ui/light-theme"
import { DarkTheme } from "@/components/ui/dark-theme"

type ThemeType = "light" | "dark" | "system"

interface ThemeOption {
  value: ThemeType
  label: string
  icon: React.ComponentType
}

const themes: ThemeOption[] = [
  { value: "light", label: "Light", icon: LightTheme },
  { value: "dark", label: "Dark", icon: DarkTheme },
  { value: "system", label: "System", icon: SystemTheme },
]

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [systemTheme, setSystemTheme] = React.useState<"dark" | "light">("light")

  React.useEffect(() => {
    setMounted(true)
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(media.matches ? "dark" : "light")

    const listener = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }

    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-zinc-800 relative flex w-full scroll-m-4 flex-col rounded-lg border border-zinc-700">
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 pt-3">
        <div className="font-medium text-base text-zinc-100">Theme</div>
      </div>
      <p className="font-normal text-sm text-zinc-400 mt-0.5 px-3">
        Choose your interface color theme
      </p>
      <div className="bg-zinc-700 my-3 h-px w-full" />
      <div className="p-8 pt-4">
        <form>
          <RadioGroup
            defaultValue={theme}
            onValueChange={(value: ThemeType) => setTheme(value)}
            className="grid gap-3 max-sm:space-y-3 sm:grid-cols-3"
          >
            {themes.map((themeOption) => {
              const Icon = themeOption.icon
              const isSelected = theme === themeOption.value
              const isSystem = themeOption.value === "system"
              const currentSystemTheme = isSystem ? systemTheme : themeOption.value

              return (
                <div
                  key={themeOption.value}
                  className={cn(
                    "flex items-end justify-center rounded-md border px-1.5 pt-3 transition cursor-pointer",
                    currentSystemTheme,
                    {
                      "border-amber-500 ring-2 ring-amber-800/60": isSelected,
                      "border-zinc-600": !isSelected,
                      "bg-gray-50": themeOption.value === "light",
                      "bg-zinc-900": themeOption.value !== "light",
                    },
                  )}
                >
                  <RadioGroupItem
                    value={themeOption.value}
                    id={themeOption.value}
                    className="sr-only"
                  />
                  <label htmlFor={themeOption.value} className="relative cursor-pointer">
                    <span className="block h-full w-full overflow-hidden">
                      <span className="block rounded-t-sm border border-b-0 shadow-xl shadow-black/20 border-zinc-600">
                        <Icon />
                      </span>
                    </span>
                    <span className="absolute inset-x-0 bottom-2 flex justify-center sm:-bottom-1">
                      <span className="relative">
                        <span className="relative inline-flex h-[30px] transform-gpu touch-none select-none items-center justify-center gap-2 rounded-md border border-zinc-600 bg-zinc-800 px-3 text-[13px] font-semibold leading-none text-zinc-100 shadow-sm">
                          {themeOption.label}
                        </span>
                        {isSelected && (
                          <motion.span
                            className="absolute inset-x-1.5 -bottom-3 h-0.5 rounded-full bg-amber-500 max-sm:hidden"
                            layoutId="activeTheme"
                          />
                        )}
                      </span>
                    </span>
                  </label>
                </div>
              )
            })}
          </RadioGroup>
        </form>
      </div>
    </div>
  )
}
