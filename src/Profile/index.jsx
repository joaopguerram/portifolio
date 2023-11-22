import profile from "../assets/profile.png";
import "./style.scss";

export const Profile = () => {
  return (
    <main className="main-profile d-flex justify-center align-center div-center margintop-50">
      <div className="profile slide-rigth">
        <img
          src={profile}
          alt="Avatar de cor marrom, com fundo em amarelo, cabelo baixo castanho e olhos castanhos"
        />
      </div>
      <div className="about slide-left">
        <p className="text">
          Olá, me chamo João Pedro. É muito bom tê-lo aqui.
        </p>
        <p className="text">
          Comecei nessa jornada da tecnologia em 2019 com cursos de lógica de
          programação e estruturas de dados, desde então venho fazendo algumas
          formações como o curso de desenvolvedor Full Stack pela Kenzie
          Academy.
        </p>
        <p className="text">
          Meu sonho é poder ver o meu trabalho sendo necessário na vida das
          pessoas, principalmente pessoas que não tenham tanto acesso a
          facilidades e confortos. Poder chegar a minha velhice e saber que
          realmente fiz a diferença para várias pessoas e pude tornar o mundo um
          lugar melhor de se viver.
        </p>
      </div>
    </main>
  );
};
