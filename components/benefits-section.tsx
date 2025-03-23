import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section id="avantages" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos avantages</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez comment ClubDivo peut vous aider à traverser cette période difficile et à reconstruire votre
              vie.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-10">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Soutien juridique</CardTitle>
              <CardDescription>
                Accédez à des conseils juridiques professionnels pour vous guider dans vos démarches.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Consultations avec des avocats spécialisés</li>
                <li>Aide à la rédaction de documents</li>
                <li>Informations sur vos droits et obligations</li>
                <li>Accompagnement personnalisé</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Soutien émotionnel</CardTitle>
              <CardDescription>
                Bénéficiez d&apos;un accompagnement psychologique pour surmonter cette épreuve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Séances avec des psychologues</li>
                <li>Groupes de parole hebdomadaires</li>
                <li>Ateliers de développement personnel</li>
                <li>Techniques de gestion du stress</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Communauté</CardTitle>
              <CardDescription>
                Rejoignez une communauté bienveillante de personnes qui vivent la même situation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Événements sociaux réguliers</li>
                <li>Forum de discussion privé</li>
                <li>Activités de groupe</li>
                <li>Opportunités de nouvelles rencontres</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

