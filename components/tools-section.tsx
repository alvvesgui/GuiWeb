"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Workflow, Zap, Brain, Settings, Cpu } from "lucide-react"

const tools = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description: "Desenvolvimento e integração de soluções de IA para automação inteligente",
    technologies: ["OpenAI", "ChatGPT", "Claude", "Gemini", "Machine Learning"],
    color: "text-cyan-400",
  },
  {
    icon: Workflow,
    title: "N8n",
    description: "Automação de workflows e integração de sistemas complexos",
    technologies: ["Workflows", "APIs", "Webhooks", "Triggers", "Nodes"],
    color: "text-red-400",
  },
  {
    icon: Zap,
    title: "Make (Integromat)",
    description: "Criação de cenários automatizados e conectores entre aplicações",
    technologies: ["Scenarios", "Modules", "Filters", "Routers", "HTTP"],
    color: "text-blue-400",
  },
  {
    icon: Settings,
    title: "Power Automate",
    description: "Automação de processos empresariais no ecossistema Microsoft",
    technologies: ["Flows", "Connectors", "Triggers", "Actions", "SharePoint"],
    color: "text-green-400",
  },
  {
    icon: Brain,
    title: "Low-Code Platforms",
    description: "Desenvolvimento rápido com plataformas visuais e drag-and-drop",
    technologies: ["Bubble", "Webflow", "Zapier", "Airtable", "No-Code"],
    color: "text-orange-400",
  },
  {
    icon: Cpu,
    title: "Automação & RPA",
    description: "Robotic Process Automation para otimização de tarefas repetitivas",
    technologies: ["UiPath", "Automation Anywhere", "Python Scripts", "Selenium"],
    color: "text-purple-400",
  },
]

export function ToolsSection() {
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

    const element = document.getElementById("ferramentas")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="ferramentas" className="py-20 circuit-pattern">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">Ferramentas & IA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialização em Low-Code, automação e inteligência artificial para soluções inovadoras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              className={`group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 animate-glow ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300 border border-primary/20`}
                  >
                    <tool.icon className={`h-6 w-6 ${tool.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{tool.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>

                <div className="flex flex-wrap gap-2">
                  {tool.technologies.map((tech) => (
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
