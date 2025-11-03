"use client"

import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Tagline */}
          <div className="text-center mb-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-2 text-primary">
              Gizeli Alves Confeitaria
            </h3>
            <p className="text-muted-foreground italic">"Bolos e Doces."</p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Gizeli Alves Confeitaria – Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MessageCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
