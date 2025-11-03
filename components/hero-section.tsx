"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/naked-cake-hero.jpg" alt="Bolo elegante" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-lg">
            Bolos e doces que encantam em cada detalhe.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 text-pretty leading-relaxed font-medium drop-shadow-md font-[family-name:var(--font-playfair)]">
            Produzidos artesanalmente, sob encomenda, para tornar seus momentos inesquecíveis.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/message/XQN3JJAGEPWNB1", "_blank")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-10 py-8 shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Encomende aqui
          </Button>
        </div>
      </div>
    </section>
  )
}
