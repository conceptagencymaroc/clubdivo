"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ComingSoonDialog } from "@/components/coming-soon-dialog"
import { toast } from "sonner"
import { QrCode, Shield, Calendar, CreditCard, Award, Sparkles, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const handleJoinClick = () => {
    setIsDialogOpen(true)
  }

  const handleLearnMoreClick = () => {
    toast("Information", {
      description: "Plus d'informations seront disponibles prochainement.",
    })
  }

  const toggleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped)
  }

  // Générer un numéro de membre aléatoire
  const memberNumber = "CD-" + Math.floor(10000000 + Math.random() * 90000000)

  // Date d'expiration (2 ans à partir d'aujourd'hui)
  const today = new Date()
  const expiryDate = new Date(today.setFullYear(today.getFullYear() + 2))
  const formattedExpiryDate = expiryDate.toLocaleDateString("fr-FR", { month: "2-digit", year: "numeric" })

  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Retrouvez votre équilibre avec ClubDivo
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Une communauté bienveillante pour vous accompagner pendant et après votre divorce. Soutien, conseils
                juridiques et nouvelles rencontres.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button onClick={handleJoinClick} size="lg" className="font-medium">
                Rejoindre le club
              </Button>
              <Button
                onClick={handleLearnMoreClick}
                variant="outline"
                size="lg"
                className="font-medium bg-transparent border-white text-white hover:bg-white/10"
              >
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[350px] lg:max-w-none perspective">
            <div
              className={`relative w-full h-[220px] md:h-[250px] transition-all duration-700 transform-style-3d cursor-pointer ${isCardFlipped ? "rotate-y-180" : ""}`}
              onClick={toggleCardFlip}
            >
              {/* Front of the card */}
              <div className="absolute inset-0 backface-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-700 rounded-xl shadow-xl transform-gpu"></div>
                <div className="relative h-full w-full bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl p-4 flex flex-col justify-between transform-gpu border border-amber-200 dark:border-amber-800 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-amber-900"
                          style={{
                            width: `${Math.random() * 60 + 30}px`,
                            height: `${Math.random() * 60 + 30}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg border-2 border-amber-200">
                        <span className="text-white font-bold text-sm">CD</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-900 dark:text-amber-300 text-base">ClubDivo</h3>
                        <p className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider">Premium</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-700 dark:text-amber-400">
                        <Shield className="h-3 w-3" />
                        <p className="text-xs uppercase font-semibold">Sécurisé</p>
                      </div>
                      <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">N° {memberNumber}</p>
                    </div>
                  </div>

                  {/* Chip and info */}
                  <div className="flex justify-between items-center mt-2 mb-2 relative z-10">
                    <div className="w-8 h-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded-md relative overflow-hidden">
                      {/* Chip details */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-4 border border-amber-600 rounded-sm"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-amber-600 rounded-sm"></div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-amber-700 dark:text-amber-400" />
                        <p className="text-xs text-amber-700 dark:text-amber-400">Exp: {formattedExpiryDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Member info */}
                  <div className="mt-auto relative z-10">
                    <div className="h-6 w-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-md mb-3 shadow-md"></div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider">Membre</p>
                        <p className="font-medium text-amber-900 dark:text-amber-300 text-sm">Karim Idrissi</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-wider">Statut</p>
                        <div className="flex items-center gap-1">
                          <Award className="h-3 w-3 text-amber-600 dark:text-amber-300" />
                          <p className="font-medium text-amber-600 dark:text-amber-300 font-serif text-sm">Premium</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QR code */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-md p-1 shadow-md flex items-center justify-center">
                    <QrCode className="h-10 w-10 text-amber-900" />
                  </div>

                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-20 rounded-xl pointer-events-none"></div>

                  {/* Hint to flip */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] text-amber-700 dark:text-amber-400 opacity-70 flex items-center gap-1">
                    <Sparkles className="h-2 w-2" />
                    <span>Cliquez pour voir les avantages</span>
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-700 rounded-xl shadow-xl transform-gpu"></div>
                <div className="relative h-full w-full bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl p-4 flex flex-col transform-gpu border border-amber-200 dark:border-amber-800 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-amber-900"
                          style={{
                            width: `${Math.random() * 60 + 30}px`,
                            height: `${Math.random() * 60 + 30}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-2 relative z-10">
                    <h3 className="font-bold text-amber-900 dark:text-amber-300 text-base">Avantages Premium</h3>
                    <p className="text-[10px] text-amber-700 dark:text-amber-400">Votre adhésion vous donne accès à:</p>
                  </div>

                  {/* Benefits list */}
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="h-3 w-3 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-amber-900 dark:text-amber-300">
                          Consultations juridiques illimitées
                        </p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400">
                          Accès prioritaire à nos avocats
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="h-3 w-3 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-amber-900 dark:text-amber-300">
                          Séances de coaching personnalisées
                        </p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400">
                          4 séances mensuelles avec nos experts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="h-3 w-3 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-amber-900 dark:text-amber-300">Événements exclusifs</p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400">
                          Accès VIP à tous nos événements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="h-3 w-3 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-amber-900 dark:text-amber-300">Réductions partenaires</p>
                        <p className="text-[10px] text-amber-700 dark:text-amber-400">
                          Jusqu'à 30% chez nos partenaires
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="mt-auto text-center relative z-10">
                    <p className="text-[10px] text-amber-700 dark:text-amber-400">Service membres: +212 522 123 456</p>
                    <p className="text-[10px] text-amber-700 dark:text-amber-400">support@clubdivo.ma</p>
                  </div>

                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="text-4xl font-bold text-amber-900 rotate-30">ClubDivo</div>
                  </div>

                  {/* Holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-20 rounded-xl pointer-events-none"></div>

                  {/* Hint to flip back */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] text-amber-700 dark:text-amber-400 opacity-70 flex items-center gap-1">
                    <CreditCard className="h-2 w-2" />
                    <span>Cliquez pour voir la carte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComingSoonDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}

