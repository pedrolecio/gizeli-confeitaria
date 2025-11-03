import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { ContactButton } from "@/components/contact-button"

const testimonials = [
  {
    name: "Márcia DWindson",
    text: "Ficou maravilhoso o bolo e os docinhos então nem se fala. Muito obrigada por sua atenção e dedicação em fazer nosso dia muito lindo.",
  },
  {
    name: "Renata Fonseca",
    text: "Menina que bolo maravilhoso!! O pessoal amou! Vc está de parabéns!",
  },
  {
    name: "Isabela",
    text: "O bolo estava uma gracinha e o sabor maravilhoso. Todo mundo gostou, até quem não é muito fã de doce elogiou.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-foreground mb-4">
            💬 O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
