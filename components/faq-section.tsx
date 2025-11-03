"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ContactButton } from "@/components/contact-button"

const faqs = [
  {
    question: "Com quanto tempo de antecedência preciso fazer meu pedido?",
    answer:
      "Recomendamos fazer o pedido com pelo menos 7 dias de antecedência para bolos personalizados e de casamento. Para pedidos menores como cupcakes e brownies, 3 dias de antecedência são suficientes.",
  },
  {
    question: "Vocês fazem entregas?",
    answer:
      "Sim! Fazemos entregas em toda a região. O valor do frete varia de acordo com a distância e o tamanho do pedido. Entre em contato pelo WhatsApp para calcular o valor da entrega.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos pagamento via PIX, transferência bancária, cartão de crédito e débito. Para pedidos grandes, trabalhamos com sinal de 50% na confirmação do pedido.",
  },
  {
    question: "Fazem bolos sem glúten ou sem lactose?",
    answer:
      "Sim! Trabalhamos com opções especiais para dietas restritivas, incluindo bolos sem glúten, sem lactose e veganos. Consulte-nos sobre disponibilidade e valores.",
  },
  {
    question: "Qual é o pedido mínimo?",
    answer:
      "Não temos pedido mínimo! Você pode encomendar desde um único cupcake até bolos de múltiplos andares para grandes eventos.",
  },
  {
    question: "Como funciona a personalização dos bolos?",
    answer:
      "Após confirmar seu pedido, agendamos uma conversa para entender sua visão. Você pode enviar referências de fotos, cores e temas. Criamos um design exclusivo baseado nas suas preferências.",
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
