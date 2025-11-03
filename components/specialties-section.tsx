import { ContactButton } from "@/components/contact-button"

const galleryItems = [
  {
    title: "Bolos de Aniversário",
    image: "/images/bolo-aniversario.jpg",
  },
  {
    title: "Doces Finos",
    image: "/images/brigadeiros-gourmet.jpg",
  },
  {
    title: "Cupcakes",
    image: "/images/cupcakes.jpg",
  },
  {
    title: "Doces Tradicionais",
    image: "/images/brigadeiros-decorados.jpg",
  },
  {
    title: "Bem Casado e Brownies",
    image: "/images/brownies.jpg",
  },
  {
    title: "Copinho de Chocolate",
    image: "/images/copinho.jpg",
  },
]

export function SpecialtiesSection() {
  return (
    <section id="portfolio" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm mb-4 tracking-wider uppercase text-primary">O que fazemos</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-foreground mb-4">
            Galeria de Produtos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-[family-name:var(--font-playfair)] text-white text-lg md:text-xl font-semibold text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
