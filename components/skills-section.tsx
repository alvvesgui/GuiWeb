"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Database, Wrench } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Front-end",
    description: "HTML, CSS, JavaScript, React",
    color: "text-blue-400",
  },
  {
    icon: Server,
    title: "Back-end",
    description: "Node.js, JavaScript, Python, APIs",
    color: "text-green-400",
  },
  {
    icon: Database,
    title: "Banco de dados",
    description: "SQL, MySQL, Prisma, Supabase",
    color: "text-purple-400",
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    description: "Git, AWS, Low-Code, Automação",
    color: "text-orange-400",
  },
]

export function SkillsSection() {
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

    const element = document.getElementById("habilidades")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="habilidades" className="py-20 bg-muted/30 tech-grid">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-primary">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 animate-glow ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div
                    className={`p-3 rounded-full bg-muted/50 group-hover:scale-110 transition-transform duration-300 border border-primary/20`}
                  >
                    <skill.icon className={`h-8 w-8 ${skill.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
