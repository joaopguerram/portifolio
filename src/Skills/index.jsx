import { data } from "../data/techs";
import "./style.scss";

export const Skills = () => {
  return (
    <>
      <h3 className="title two d-flex justify-center margintop-100 sectionSkills">
        Habilidades
      </h3>
      <div className="skills d-flex justify-center div-center ">
        {data.map((tech) => {
          return (
            <li
              key={tech.id}
              className="d-column justify-center align-center margintop-50 gap-20"
            >
              <img src={tech.image} alt="" className="img-skill" />
              <p className="text ">{tech.tech}</p>
            </li>
          );
        })}
      </div>
    </>
  );
};
