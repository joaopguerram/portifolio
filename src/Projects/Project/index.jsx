import { projects } from "../../data/projects";
import "./style.scss";

export const Project = () => {
  return (
    <div className="d-flex justify-center align-center div-center">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="card-project d-column  align-center margintop-50 gap-20 div-center"
          >
            <h2 className="margintop-20 title two">{project.name}</h2>
            <img
              src={project.image}
              alt=""
              className="siteImg d-flex justify-center align-center margintop-20"
            />
            <p className="text two dark padding-card text-center">
              {project.description}
            </p>
            <div>
              {project.techs.map((tech) => {
                return (
                  <img key={tech.id} src={tech} className="techImg gap-20" />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
