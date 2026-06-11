import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages.css";

function Portfolio() {
  return (
    <div className="page">
      <h1>Портфолио</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
