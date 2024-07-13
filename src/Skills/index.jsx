import { data } from "../data/techs";
import "./style.scss";

export const Skills = () => {
  return (
    <section className="containerSkills">
      <h3 className="title two d-flex justify-center sectionSkills">
        Habilidades
      </h3>
      <ul
        className="skills d-flex justify-center div-center "
        data-aos="fade-up"
      >
        {data.map((tech) => {
          return (
            <li
              key={tech.id}
              className="d-flex d-column justify-center align-center margintop-50 gap-20"
            >
              <img src={tech.image} alt="" className="img-skill" />
              <p className="text ">{tech.tech}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
