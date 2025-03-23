"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"

export function MembershipSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section id="adhesion" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Adhésion</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choisissez la formule qui correspond le mieux à vos besoins et commencez votre parcours avec ClubDivo.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Mensuel</TabsTrigger>
              <TabsTrigger value="yearly">Annuel</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Adhésion Mensuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">29€</span>
                    <span className="text-sm text-muted-foreground">/mois</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Accès à tous les événements communautaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>1 consultation juridique par mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Accès aux groupes de soutien hebdomadaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Forum de discussion privé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Ressources et guides exclusifs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setIsDialogOpen(true)} className="w-full font-medium">
                    S&apos;abonner
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="yearly">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                    Économisez 25%
                  </div>
                  <CardTitle className="text-2xl">Adhésion Annuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">1500</span>
                    <span className="text-sm text-muted-foreground">/an</span>
                    <span className="text-sm text-muted-foreground line-through">3500</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Tous les avantages de l&apos;adhésion mensuelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>2 consultations juridiques par mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Accès prioritaire aux événements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Séances de coaching personnalisées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Réductions sur les services partenaires</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setIsDialogOpen(true)} className="w-full font-medium">
                    S&apos;abonner
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}

