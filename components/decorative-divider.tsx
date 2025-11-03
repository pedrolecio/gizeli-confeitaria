export function DecorativeDivider() {
  return (
    <div className="relative h-12 w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />

      <div className="relative w-full max-w-4xl h-px">
        <div className="absolute inset-0 bg-accent/30" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          <div
            className="w-1 h-1 rounded-full bg-primary/30 animate-pulse"
            style={{ animationDelay: "0ms", animationDuration: "3s" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse"
            style={{ animationDelay: "300ms", animationDuration: "3s" }}
          />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div
            className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse"
            style={{ animationDelay: "300ms", animationDuration: "3s" }}
          />
          <div
            className="w-1 h-1 rounded-full bg-primary/30 animate-pulse"
            style={{ animationDelay: "0ms", animationDuration: "3s" }}
          />
        </div>
      </div>
    </div>
  )
}
