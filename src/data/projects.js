import { data } from "./techs";

export const projects = [
  {
    id: 1,
    name: "Site DF Guincho",
    image: "src/assets/dfguincho.png",
    description:
      "Site criado para empresa de guincho e auto socorro usando o React. Foi necessário criar tudo, como figma, paleta de cores, padronização de fontes e tamanhos. Foi um desafio muito divertido e de grande aprendizado e ver tomar forma aquilo que estava no papel foi muito legal.",
    techs: [
      data[0].image,
      data[1].image,
      data[2].image,
      data[3].image,
      data[7].image,
    ],
    github: "https://github.com/joaopguerram/DFGuincho",
    link: "https://dfguincho.vercel.app/",
  },
  {
    id: 2,
    name: "Hamburgueria Kenzie",
    image: "src/assets/hamburgueria.png",
    description:
      "Site que simula um sistema de criação do combo perfeito, podendo adicionar os produtos do seu combo perfeito no carrinho. A primeira vez usando a lógica de um carrinho de compras, foi o maior desafio com certeza mas foi extremamente prazeroso ver ele funcionar.",
    techs: [
      data[0].image,
      data[1].image,
      data[2].image,
      data[3].image,
      data[7].image,
    ],
    github:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-v02-joaopguerram/tree/main/hamburgueria-v2-joaopguerram",
    link: "https://react-entrega-hamburgueria-da-kenzie-joaopguerram.vercel.app/",
  },
  {
    id: 3,
    name: "Controle de Projetos Dev",
    image: "src/assets/controleProjetos.png",
    description:
      "API para armazenamento e controle de projetos de programação. Uma aplicação que me enche de orgulho porque sempre tive na minha cabeça que o Back-end seria muito dificil mas meti as caras e achei muito tranquilo e divertido fazer, principalmente a manipulação do banco de dados.",
    techs: [
      data[4].image,
      data[5].image,
      data[6].image,
      data[7].image,
      data[8].image,
    ],
    github:
      "https://github.com/Kenzie-Academy-Brasil-Developers/controle-de-projetos-developers",
    link: "*",
  },
];
