"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function OrderSection() {
  return (
    <section id="encomendar" className="py-20 bg-background md:py-0">
      <div className="container mx-auto px-0 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-foreground mb-6">
            Faça sua encomenda
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Entre em contato conosco e transforme seu evento em um momento inesquecível com nossos doces artesanais.
          </p>

          <Card className="border-2 border-accent/20">
            <CardContent className="p-8 md:p-12 md:py-0">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">(31) 98829-6442</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-semibold text-foreground">(31) 98829-6442</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold text-foreground">gizeli.faria@hotmail.com</p>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/message/XQN3JJAGEPWNB1", "_blank")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              >
                Fazer pedido pelo WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
