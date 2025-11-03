import Image from "next/image"

export function PhotoGallery() {
  const photos = [
    {
      src: "/images/brigadeiros-gourmet.jpg",
      alt: "Brigadeiros Gourmet",
    },
    {
      src: "/images/bolo-aniversario.jpg",
      alt: "Bolo de Aniversário",
    },
    {
      src: "/images/cupcakes.jpg",
      alt: "Cupcakes Gourmet",
    },
    {
      src: "/images/brownies.jpg",
      alt: "Brownies Recheados",
    },
    {
      src: "/images/brigadeiros-decorados.jpg",
      alt: "Brigadeiros Decorados",
    },
    {
      src: "/images/naked-cake-hero.jpg",
      alt: "Naked Cake com Frutas",
    },
  ]

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Galeria de Produtos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
