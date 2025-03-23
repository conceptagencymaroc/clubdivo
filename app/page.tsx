import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { BenefitsSection } from "@/components/benefits-section"
import { MembershipSection } from "@/components/membership-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SpecialOfferSection />
      <BenefitsSection />
      <MembershipSection />
      <EventsSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}

