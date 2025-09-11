"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Guilherme Alves</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("ferramentas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ferramentas & IA
            </button>
            <button
              onClick={() => scrollToSection("carreira")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Carreira
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Realizações Notáveis
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-primary/90">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("ferramentas")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Ferramentas & IA
              </button>
              <button
                onClick={() => scrollToSection("carreira")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Carreira
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Realizações Notáveis
              </button>
              <Button onClick={() => scrollToSection("contato")} className="w-full bg-primary hover:bg-primary/90">
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
