import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { OrderSection } from "@/components/order-section"
import { Footer } from "@/components/footer"
import { DecorativeDivider } from "@/components/decorative-divider"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DecorativeDivider />
      <AboutSection />
      <DecorativeDivider />
      <SpecialtiesSection />
      <DecorativeDivider />
      <TestimonialsSection />
      <DecorativeDivider />
      <FaqSection />
      <DecorativeDivider />
      <OrderSection />
      <Footer />
    </main>
  )
}
