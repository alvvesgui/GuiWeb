"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

const contacts = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guilherme-rodrigues-alves-1662601a3/",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alvvesgui",
    color: "hover:text-gray-800",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:guigaralves@gmail.com",
    color: "hover:text-red-600",
  },
]

export function ContactSection() {
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

    const element = document.getElementById("contato")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Conexões Profissionais</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades e projetos interessantes
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl w-full">
            {contacts.map((contact, index) => (
              <Card
                key={contact.label}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full h-auto flex-col gap-3 hover:bg-transparent"
                    asChild
                  >
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={contact.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                      className="group"
                    >
                      <div
                        className={`p-4 rounded-full bg-muted group-hover:scale-110 transition-all duration-300 ${contact.color}`}
                      >
                        <contact.icon className="h-8 w-8" />
                      </div>
                      <span className="text-lg font-medium">{contact.label}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
