import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
const findProjectID = (id) => {
  return projects.find((project) => project.id === id);
};
console.log(projects);
const ProjectPage = () => {
  const { id } = useParams();
  const project = findProjectID(id);
  const technologies =project.technologies;
  console.log(project);
  console.log("voici l'id:", id);
  return (
    <section className="ContainerProjectPage">
      <div className="projectPage">
        <h1>{project.title}</h1>
        <h2>Description:</h2>
          <p>{project.description}</p> 
        <ul>
          {technologies.map((techno,index)=>(
            <li key={("techno",index)}>{techno}</li>
          ))}
        </ul>
        <div className="links">
          <Link to={project.github} target="_blank">Code</Link>
          <Link to={project.site} target="_blank">Site web</Link>
        </div>
        <div className="container-img">
          <div className="img-L">
            <img src={project.img_l} alt={project.title} />
          </div>
          <div className="img-R">
            <img src={project.img_r} alt={project.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
