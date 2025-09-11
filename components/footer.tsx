export function Footer() {
  return (
    <footer className="bg-muted/50 py-8 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl animate-circuit">⚡</span>
            <span className="text-2xl animate-circuit" style={{ animationDelay: "1s" }}>
              🤖
            </span>
            <span className="text-2xl animate-circuit" style={{ animationDelay: "2s" }}>
              🚀
            </span>
          </div>

          <p className="text-muted-foreground text-center">&copy; 2024 - Guilherme Alves – Dev Low-Code & IA</p>
        </div>
      </div>
    </footer>
  )
}
