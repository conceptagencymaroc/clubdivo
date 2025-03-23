import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Meriem Lahlou",
      duration: "Membre depuis 8 mois",
      quote:
        "ClubDivo m'a apporté le soutien dont j'avais besoin pendant cette période difficile. Les conseils juridiques m'ont été précieux et j'ai rencontré des personnes formidables.",
      avatar: "ML",
      image: "/images/meriem-lahlou.png",
    },
    {
      id: 2,
      name: "Youssef Benjelloun",
      duration: "Membre depuis 1 an",
      quote:
        "Grâce aux ateliers et aux groupes de soutien, j'ai pu reconstruire ma confiance en moi. Je me sens enfin prêt à avancer et à construire une nouvelle vie.",
      avatar: "YB",
      image: "/images/youssef-benjelloun.png",
    },
    {
      id: 3,
      name: "Fatima Tazi",
      duration: "Membre depuis 6 mois",
      quote:
        "L'accompagnement juridique m'a permis d'y voir plus clair dans mes démarches. Les événements sociaux m'ont aidée à sortir de mon isolement.",
      avatar: "FT",
      image: "/images/fatima-tazi.png",
    },
  ]

  return (
    <section id="communaute" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Témoignages</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez ce que nos membres disent de leur expérience avec ClubDivo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="h-12 w-12" />
              </div>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.duration}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

