import { projects } from "../../data/projects";
import "./style.scss";

export const Project = () => {
  return (
    <div className="div-card align-center div-center">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="card-project d-flex d-column align-center margintop-50  div-center"
          >
            <img src={project.image} alt="" className="siteImg" />
            <div className="div-info">
              <h2 className="title two text-center">{project.name}</h2>
              {/* <p className="text two dark padding-card text-center">
                {project.description}
              </p> */}
              <div className="div-tech d-flex">
                {project.techs.map((tech) => {
                  return (
                    <img key={tech.id} src={tech} className="techImg gap-20" />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
