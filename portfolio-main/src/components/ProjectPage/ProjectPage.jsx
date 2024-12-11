import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

const findProjectByID = (id) => {
  return projects.find((project) => project.id === id);
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = findProjectByID(id);

  // Gérer l'absence de projet
  if (!project) {
    return (
      <section className="ContainerProjectPage">
        <h1>Projet introuvable</h1>
        <p>Le projet avec l'ID "{id}" n'existe pas ou a été supprimé.</p>
      </section>
    );
  }

  const { title, description, technologies, github, site, img_l, img_r } = project;

  return (
    <section className="ContainerProjectPage">
      <div className="projectPage">
        <h1>{title}</h1>
        <h2>Description :</h2>
        <p>{description}</p>

        <h3>Technologies :</h3>
        <ul>
          {technologies.map((techno, index) => (
            <li key={index}>{techno}</li>
          ))}
        </ul>

        <div className="links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          {site && (
            <a href={site} target="_blank" rel="noopener noreferrer">
              Site web
            </a>
          )}
        </div>

        <div className="container-img">
          {img_l && (
            <div className="img-L">
              <img src={img_l} alt={`Aperçu gauche de ${title}`} />
            </div>
          )}
          {img_r && (
            <div className="img-R">
              <img src={img_r} alt={`Aperçu droit de ${title}`} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
