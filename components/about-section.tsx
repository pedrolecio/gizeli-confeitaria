import { ContactButton } from "@/components/contact-button"

export function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/images/gizeli-alves.jpg"
                alt="Gizeli Alves"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-sm mb-4 tracking-wider uppercase text-primary">Sobre Gizeli Alves</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Técnica, sensibilidade e ingredientes selecionados
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              
              <p>
                Sou a Gizeli, confeiteira por paixão e bacharel em administração por formação. Há 7 anos, me dedico a criar bolos e doces lindos e deliciosos! Cada pedido é preparado com cuidado e comprometimento, sempre oferecendo a melhor experiência para os meus clientes. Será um prazer fazer parte da sua festa e transformar o seu pedido em realidade!
              </p>
            </div>
          </div>
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
