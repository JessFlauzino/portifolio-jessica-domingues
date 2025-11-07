import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects";

const Projetos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary">Projetos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes. Cada projeto foi desenvolvido com cuidado,
          atenção aos detalhes, desempenho e experiência do usuário.
        </p>

        
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-12">
            Nenhum projeto localizado.
          </p>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JessFlauzino"
          >
            Veja meu Github <ArrowRight size={16} />
          </a>
      </div>
      </div>
    </section>
  );
};

export default Projetos;
