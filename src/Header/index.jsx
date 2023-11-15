import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Portifolio Joao Pedro" />
      </div>

      <nav>
        <ul>
          <li>
            <Link
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Sobre
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Habilidades
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projetos
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
