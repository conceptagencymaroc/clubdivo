"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"

export function SpecialOfferSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 23,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              // Timer expired
              clearInterval(timer)
              return prev
            }
          }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, "0")

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  -50% sur votre première année d&apos;adhésion
                </h2>
                <p className="md:text-xl">Profitez de notre offre exceptionnelle pour les 100 premiers membres.</p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-medium"
                >
                  Profiter de l&apos;offre
                </Button>
                <div className="text-sm md:text-base">
                  Expire dans{" "}
                  <span className="font-bold">
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-md border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Offre Spéciale</CardTitle>
                  <CardDescription>Adhésion annuelle avec 50% de réduction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Accès à tous les événements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Consultation juridique mensuelle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Groupes de soutien illimités</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Accès à la communauté privée</span>
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">1800</span>
                    <span className="text-muted-foreground line-through">3000</span>
                    <span className="text-sm text-muted-foreground">/an</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setIsDialogOpen(true)} className="w-full font-medium">
                    Profiter de l&apos;offre
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}

