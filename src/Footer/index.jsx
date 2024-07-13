import Profile from "../assets/profile.png";
import wpp from "../assets/whatsapp(1).png";
import gmail from "../assets/gmail(1).png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="container-footer d-flex justify-between sectionContact margintop-20">
      <ul className="list-footer d-flex justify-between align-center div-center">
        <li className="d-flex align-center justify-center">
          <a
            href="http://wa.me/+5561985524070"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imgLinks" src={wpp} alt="" />
          </a>
        </li>
        <li className="d-flex align-center justify-center">
          <a
            href="mailto:jpguerra1997@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imgLinks" src={gmail} alt="" />
          </a>
        </li>
        <li className="itemProfile">
          <img src={Profile} alt="" />
        </li>
        <li className="d-flex align-center justify-center">
          <a
            href="https://www.linkedin.com/in/joaopguerram/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imgLinks" src={linkedin} alt="" />
          </a>
        </li>
        <li className="d-flex align-center justify-center">
          <a
            href="https://github.com/joaopguerram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imgLinks" src={github} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
