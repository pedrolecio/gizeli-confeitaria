"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Instagram,
  Facebook,
  ImageIcon,
  MessageSquare,
  HelpCircle,
  ShoppingCart,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import NextImage from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-accent/30 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
              <NextImage
                src="/images/logo.jpg"
                alt="Gizeli Alves Confeitaria Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-primary">
                Gizeli Alves - Bolos e Doces
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Confeitaria Artesanal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => window.open("https://www.instagram.com/gizelialvesconfeitaria", "_blank")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </button>
            <button
              onClick={() => window.open("https://www.facebook.com/gizelialvesconfeitaria", "_blank")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </button>
            <button
              onClick={() => scrollToSection("encomendar")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              Encomendar
            </button>
          </nav>

          <Button
            onClick={() => window.open("https://wa.me/message/XQN3JJAGEPWNB1", "_blank")}
            className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Peça pelo WhatsApp
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground cursor-pointer">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => window.open("https://www.instagram.com/gizelialvesconfeitaria", "_blank")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </button>
            <button
              onClick={() => window.open("https://www.facebook.com/gizelialvesconfeitaria", "_blank")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </button>
            <button
              onClick={() => scrollToSection("encomendar")}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              Encomendar
            </button>
            <Button
              onClick={() => window.open("https://wa.me/message/XQN3JJAGEPWNB1", "_blank")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full shadow-md"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Peça pelo WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
