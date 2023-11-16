import profile from "../assets/profile.png";
import "./style.scss";

export const Profile = () => {
  return (
    <main className="main-profile d-flex justify-center align-center div-center">
      <div className="profile">
        <img
          src={profile}
          alt="Avatar de cor marrom, com fundo em amarelo, cabelo baixo castanho e olhos castanhos"
        />
      </div>
      <div className="about">
        <p className="text">
          Olá, me chamo João Pedro. É muito bom tê-lo e espero que goste.
        </p>
        <p className="text">
          Comecei nessa jornada da tecnologia em 2019 com cursos de lógica de
          programação e estruturas de dados, desde então venho fazendo algumas
          formações como o curso de desenvolvedor Full Stack pela Kenzie
          Academy, curso de Java pela Alura ONE, entre outros.
        </p>
        <p className="text">
          Atualmente trabalho com projetos freelances e estou em busca da minha
          primeira oportunidade efetiva no mercado.
        </p>
      </div>
    </main>
  );
};
