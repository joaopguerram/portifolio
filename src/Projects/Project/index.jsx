import { projects } from "../../data/projects";
import "./style.scss";

export const Project = () => {
  return (
    <div className="div-card d-flex align-center div-center gap-20">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="card-project d-column  align-center margintop-50 gap-20 div-center"
          >
            <h2 className="title two text-center">{project.name}</h2>
            <img
              src={project.image}
              alt=""
              className="siteImg d-flex justify-center align-center"
            />
            <p className="text two dark padding-card text-center">
              {project.description}
            </p>
            <div className="div-tech d-flex">
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
