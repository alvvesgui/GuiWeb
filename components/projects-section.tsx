"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Globe, Building, Users } from "lucide-react"

const projects = [
  {
    icon: Truck,
    title: "Sistema de Logística e Entregas",
    description:
      "Projeto voltado para o gerenciamento eficiente de entregas, facilitando a logística entre fornecedores e clientes. A plataforma oferece uma interface intuitiva que permite o rastreamento de pedidos, gestão de prazos e comunicação em tempo real, otimizando a experiência do usuário e melhorando a eficiência operacional.",
    technologies: ["JavaScript", "Node.js", "MySQL"],
    color: "text-blue-400",
  },
  {
    icon: Globe,
    title: "Desenvolvimento de Página Web Interativa",
    description:
      "Desenvolvi um site comercial básico para uma loja de motos, focado na apresentação de produtos e serviços. O projeto incluiu um design responsivo e fácil de navegar, utilizando HTML, CSS e JavaScript, proporcionando uma experiência intuitiva que destaca categorias de produtos e informações de contato.",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "text-green-400",
  },
  {
    icon: Building,
    title: "Desenvolvimento de Soluções de Software",
    description:
      "Atuei como desenvolvedor Full Stack em uma empresa, contribuindo para a criação e manutenção de soluções de software para a gestão de clínicas. Participei de diversas etapas do desenvolvimento, focando na resolução de problemas técnicos e na melhoria contínua dos sistemas, sempre buscando eficiência e qualidade.",
    technologies: ["JavaScript", "API", "Node.js", "React"],
    color: "text-purple-400",
  },
  {
    icon: Users,
    title: "Área de Membros Logada",
    description:
      "Desenvolvi uma área de membros completa e funcional para assinantes, implementando autenticação segura com login via Google e sistema de recuperação de senha por e-mail. O projeto foi desenvolvido de forma robusta e profissional, garantindo uma experiência de usuário fluida e segura.",
    technologies: ["HTML", "Node.js", "React", "Prisma", "Supabase", "Google Auth"],
    color: "text-cyan-400",
  },
]

export function ProjectsSection() {
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

    const element = document.getElementById("projetos")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projetos" className="py-20 bg-muted/30 tech-grid">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">Realizações Notáveis</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos que demonstram minha experiência e capacidade de entregar soluções eficazes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/50 h-full bg-card/80 backdrop-blur-sm hover:bg-card/90 animate-glow ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`p-3 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300 border border-primary/20`}
                  >
                    <project.icon className={`h-6 w-6 ${project.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl text-balance leading-tight text-foreground">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
