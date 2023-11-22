import { Project } from "./Project";
import "./style.scss";

export const Projects = () => {
  return (
    <div className="container sectionProjects" data-aos="fade-up">
      <h2 className="d-flex justify-center align-center div-center title two margintop-100">
        Projetos
      </h2>
      <Project />
    </div>
  );
};
