import { ArrowUp, Github, Linkedin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Texto */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} JessicaDomingues.co. Todos os direitos reservados.
        </p>

        {/* Ícones sociais */}
        <div className="flex gap-4 text-muted-foreground">
          <a
            href="https://github.com/JessFlauzino"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jessica-flauzino/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a
            href="#hero"
            title="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
