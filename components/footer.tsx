"use client"
import { Unlink } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Unlink
            className={`h-5 w-5 ${mounted && theme === "dark" ? "text-primary" : "text-primary fill-primary/30"}`}
          />
          <span className="text-lg font-semibold">ClubDivo</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} ClubDivo. Tous droits réservés.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("avantages")}
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Avantages
          </button>
          <button
            onClick={() => scrollToSection("adhesion")}
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Adhésion
          </button>
          <button
            onClick={() => scrollToSection("evenements")}
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Contact
          </button>
        </nav>
      </div>
    </footer>
  )
}

