import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center py-12">Projeto não encontrado.</div>;

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-6 rounded-lg" />
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.demoUrl} target="_blank" className="text-primary hover:underline">Demo</a>
        <a href={project.githubUrl} target="_blank" className="text-primary hover:underline">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectDetail;