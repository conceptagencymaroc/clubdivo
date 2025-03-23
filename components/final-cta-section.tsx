"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"
import { toast } from "sonner"

export function FinalCtaSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleLearnMoreClick = () => {
    toast("Information", {
      description: "Plus d'informations seront disponibles prochainement.",
    })
  }

  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prêt à rejoindre ClubDivo?</h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Commencez votre parcours vers une nouvelle vie dès aujourd&apos;hui
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              onClick={() => setIsDialogOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium"
            >
              Rejoindre maintenant
            </Button>
            <Button
              onClick={handleLearnMoreClick}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-medium bg-transparent"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}

