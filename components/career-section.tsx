"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Zap, Briefcase } from "lucide-react"

const careerSteps = [
  {
    icon: Building2,
    title: "Desenvolvedor full stack",
    period: "Primeiro Emprego",
    description:
      "Iniciei minha carreira como desenvolvedor full stack, adquirindo experiência sólida em desenvolvimento e compreensão dos processos empresariais de tecnologia.",
    technologies: ["Desenvolvimento", "Soluções de Software", "Processos Empresariais"],
    color: "text-blue-400",
  },
  {
    icon: Zap,
    title: "Especialista em Suporte e Infraestrutura",
    period: "1 Ano de Experiência",
    description:
      "Desenvolvi expertise em suporte técnico e infraestrutura, trabalhando com redes, Wi-Fi, switches e distribuição de sinal em hotéis e escritórios de advocacia. Foquei em segurança de dados e operação eficiente de sistemas, garantindo alta disponibilidade e performance.",
    technologies: ["Redes", "Wi-Fi", "Switches", "Segurança de Dados", "Infraestrutura"],
    color: "text-green-400",
  },
  {
    icon: Briefcase,
    title: "Desenvolvedor Low-Code & IA",
    period: "Experiência Atual",
    description:
      "Atualmente especializado no desenvolvimento de integrações de IA e automação em projetos empresariais. Foco na melhoria de processos operacionais, aumentando significativamente a eficiência e lucratividade das empresas através de soluções inovadoras e automatizadas.",
    technologies: ["IA", "Automação", "Low-Code", "Processos Empresariais", "Eficiência Operacional"],
    color: "text-cyan-400",
  },
]

export function CareerSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("carreira")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="carreira" className="py-20 bg-background circuit-pattern">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">Carreira</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e evolução na área de tecnologia
          </p>
        </div>

        <div className="space-y-8">
          {careerSteps.map((step, index) => (
            <Card
              key={step.title}
              className={`group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 animate-glow ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300 border border-primary/20 flex-shrink-0`}
                  >
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl text-balance leading-tight text-foreground">{step.title}</CardTitle>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary w-fit">
                        {step.period}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pl-16">
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                <div className="flex flex-wrap gap-2">
                  {step.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default bg-secondary/50 border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
