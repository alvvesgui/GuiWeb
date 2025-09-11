"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-20 pb-10 tech-grid">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-balance text-foreground">Guilherme Alves</h1>
              <p className="text-xl md:text-2xl text-primary font-semibold animate-glow">Dev Low-Code & IA</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Sou Guilherme, tenho 22 anos, sou formado em Análise e Desenvolvimento de Sistemas. Profissional de TI
              especializado em Low-Code, IA e automação de processos. Apaixonado por tecnologia, futebol e academia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow"
              >
                Entre em contato
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary/30 hover:bg-primary/10"
              >
                Ver projetos
              </Button>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 animate-float bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="/Guilherme.jpeg"
                  alt="Guilherme Alves"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse border-2 border-accent/50"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse border-2 border-primary/50"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
