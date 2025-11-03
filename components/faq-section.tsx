"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ContactButton } from "@/components/contact-button"

const faqs = [
  {
    question: "Com quanto tempo de antecedência preciso fazer meu pedido?",
    answer:
      "Recomendo que os pedidos sejam feitos com o mínimo de 3 dias úteis de antecedência. Para eventos maiores, pelo menos 15 dias, para garantir disponibilidade e planejamento.",
  },
  {
    question: "Como faço para encomendar?",
    answer:
      "É simples! Você pode entrar em contato pelo botão do WhatsApp, ou pelo direct do Instagram. Vou precisar de algumas informações básicas sobre o evento e o pedido.",
  },
  {
    question: "Você realiza entregas?",
    answer:
      "Não realizo entrega, mas o cliente poderá solicitar um Uber para fazer a retirada.",
  },
  {
    question: "Posso personalizar o design do bolo?",
    answer:
      "Sim! Trabalho com personalização para que cada detalhe combine perfeitamente com o tema da sua festa. Você pode me enviar inspirações ou descrever sua ideia, e juntos criaremos algo único.",
  },
  {
    question: "Seus bolos e doces atendem restrições alimentares?",
    answer:
      "Meus bolos e doces não são indicados para pessoas com intolerâncias ou alergias alimentares, pois podem conter ingredientes como glúten, lactose, ovos e oleaginosas. Meu foco é oferecer produtos tradicionais que garantam sabor e qualidade",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-12 md:py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">Tire suas dúvidas sobre nossos produtos e serviços</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <ContactButton />
      </div>
    </section>
  )
}
