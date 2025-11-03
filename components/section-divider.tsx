interface SectionDividerProps {
  imageSrc: string
  alt?: string
}

export function SectionDivider({ imageSrc, alt = "Divider" }: SectionDividerProps) {
  return (
    <div className="relative h-48 md:h-64 w-full overflow-hidden">
      <img src={imageSrc || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
    </div>
  )
}
