import "../styles/projectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <div className="stack">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        Открыть проект
      </a>
    </div>
  );
}

export default ProjectCard;