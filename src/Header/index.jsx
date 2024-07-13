import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header d-flex align-center">
      <div className="div-logo">
        <img src={logo} alt="Portifolio Joao Pedro" className="logo" />
      </div>

      <nav className="nav">
        <ul className="list-nav">
          <li>
            <Link
              to="sectionAbout"
              offset={-3000}
              duration={1000}
              className="btn nav text"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="sectionSkills"
              offset={-300}
              duration={500}
              className="btn nav text"
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to="sectionProjects"
              offset={-300}
              duration={500}
              className="btn nav text"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="sectionContact"
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
