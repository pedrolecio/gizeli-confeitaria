"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactButton() {
  return (
    <div className="flex justify-center mt-12">
      <Button
        onClick={() => window.open("https://wa.me/message/XQN3JJAGEPWNB1", "_blank")}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Entre em Contato
      </Button>
    </div>
  )
}
