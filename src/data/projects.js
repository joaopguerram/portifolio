import { data } from "./techs";

export const projects = [
  {
    id: 1,
    name: "Site DF Guincho",
    image: "src/assets/dfguincho.png",
    description: "Site de Guincho Auto Socorro",
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
      "Site que simula um sistema de criação do combo perfeito, podendo adicionar os produtos do seu combo perfeito no carrinho",
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
    description: "API para armazenamento e controle de projetos de programação",
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
