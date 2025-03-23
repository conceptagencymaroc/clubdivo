"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"

export function EventsSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const events = [
    {
      id: 1,
      title: "Consultation juridique personnalisée",
      date: "15 avril 2024",
      time: "18:30 - 20:00",
      location: "Casablanca, Maarif",
      description:
        "Rencontrez nos avocats spécialisés pour une consultation individuelle sur vos droits et démarches juridiques.",
      image: "/images/consultation-juridique.jpeg",
    },
    {
      id: 2,
      title: "Café-rencontre au Petit Palais",
      date: "22 avril 2024",
      time: "19:00 - 22:00",
      location: "Rabat, Centre",
      description:
        "Un moment convivial dans un cadre élégant pour échanger et créer de nouvelles connexions dans une ambiance détendue.",
      image: "/images/cafe-rencontre.jpeg",
    },
    {
      id: 3,
      title: "Groupe de soutien et partage d'expériences",
      date: "29 avril 2024",
      time: "10:00 - 12:00",
      location: "Marrakech, Guéliz",
      description:
        "Rejoignez notre groupe de discussion où chacun peut partager son parcours et bénéficier du soutien de personnes vivant des situations similaires.",
      image: "/images/groupe-soutien.png",
    },
  ]

  return (
    <section id="evenements" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Événements à venir</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Participez à nos événements pour rencontrer d&apos;autres membres et bénéficier de conseils
              d&apos;experts.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm line-clamp-2 mt-2">{event.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button onClick={() => setIsDialogOpen(true)} className="w-full">
                  S&apos;inscrire
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button onClick={() => setIsDialogOpen(true)} variant="outline" className="font-medium">
            Voir tous les événements
          </Button>
        </div>
      </div>
      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}

