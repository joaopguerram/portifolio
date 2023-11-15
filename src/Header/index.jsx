import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="div-logo">
        <img src={logo} alt="Portifolio Joao Pedro" className="logo" />
      </div>

      <nav className="nav">
        <ul className="list-nav">
          <li>
            <Link
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn nav text"
            >
              Sobre
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="sectionSkills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn nav text"
            >
              Habilidades
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="sectionProjects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn nav text"
            >
              Projetos
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="sectionContact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn nav text"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
