import wpp from "../assets/whatsapp(1).png";
import gmail from "../assets/gmail(1).png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import baixar from "../assets/baixar.png";
import "./style.scss";

export const Contact = () => {
  return (
    <div className="contact div-center margintop-50">
      <ul className="listContact d-flex justify-center align-center gap-20">
        <li className="itemContact">
          <a href="https://github.com/joaopguerram" target="__blank">
            <img src={github} alt="" />
            <p className="text two dark">GITHUB</p>
          </a>
        </li>
        <li className="itemContact">
          <a href="https://www.linkedin.com/in/joaopguerram/" target="__blank">
            <img src={linkedin} alt="" />
            <p className="text two dark">LINKEDIN</p>
          </a>
        </li>
        <li className="itemContact">
          <a href="http://wa.me/+5561985524070" target="__blank">
            <img src={wpp} alt="" />
            <p className="text two dark">WHATSAPP</p>
          </a>
        </li>
        <li className="itemContact">
          <a href="mailto:jpguerra1997@gmail.com" target="__blank">
            <img src={gmail} alt="" />
            <p className="text two dark">E-MAIL</p>
          </a>
        </li>
        <li className="itemContact">
          <a
            href="https://docs.google.com/document/d/1MI_ur-NzGXXPz_fYkJNJwstaqi_Vvub0/edit?usp=sharing&ouid=110499843486799681046&rtpof=true&sd=true"
            target="__blank"
          >
            <img src={baixar} alt="" />
            <p className="text two dark">CURRICULO</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
