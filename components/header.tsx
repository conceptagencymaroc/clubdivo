"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Unlink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleAuthClick = () => {
    setIsDialogOpen(true)
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Unlink
              className={`h-6 w-6 ${mounted && theme === "dark" ? "text-primary" : "text-primary fill-primary/30"}`}
            />
          </div>
          <span className="text-xl font-bold">ClubDivo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("avantages")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Avantages
          </button>
          <button
            onClick={() => scrollToSection("adhesion")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Adhésion
          </button>
          <button
            onClick={() => scrollToSection("evenements")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Événements
          </button>
          <button
            onClick={() => scrollToSection("communaute")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Communauté
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" onClick={handleAuthClick}>
            Se connecter
          </Button>
          <Button onClick={handleAuthClick}>S&apos;inscrire</Button>
          <ModeToggle />
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Unlink
                  className={`h-6 w-6 ${mounted && theme === "dark" ? "text-primary" : "text-primary fill-primary/30"}`}
                />
                <span className="text-xl font-bold">ClubDivo</span>
              </Link>
              <button onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container grid gap-6 py-6">
              <button
                onClick={() => scrollToSection("avantages")}
                className="text-lg font-medium hover:text-primary transition-colors text-left"
              >
                Avantages
              </button>
              <button
                onClick={() => scrollToSection("adhesion")}
                className="text-lg font-medium hover:text-primary transition-colors text-left"
              >
                Adhésion
              </button>
              <button
                onClick={() => scrollToSection("evenements")}
                className="text-lg font-medium hover:text-primary transition-colors text-left"
              >
                Événements
              </button>
              <button
                onClick={() => scrollToSection("communaute")}
                className="text-lg font-medium hover:text-primary transition-colors text-left"
              >
                Communauté
              </button>
              <div className="flex flex-col gap-4 mt-4">
                <Button variant="outline" onClick={handleAuthClick} className="w-full">
                  Se connecter
                </Button>
                <Button onClick={handleAuthClick} className="w-full">
                  S&apos;inscrire
                </Button>
                <div className="flex justify-center mt-4">
                  <ModeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </header>
  )
}

