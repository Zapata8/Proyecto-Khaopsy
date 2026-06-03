import banner from "../assets/bannernegro.png";

import cap1 from "../assets/cap1.png";
import cap2 from "../assets/cap2.png";
import cap3 from "../assets/cap3.png";
import cap4 from "../assets/cap4.png";
import cap5 from "../assets/cap5.png";

const comic = {
  nombreComic: "Libralos del mal",
  categoria: "apocalipsis",
  cantidadCap: 5,

  descripcion:
    "La llegada de cristo esta presente y la vida de kael cambia repentinamente, mostrando el punto de vista de los malditos",

  personajes: ["Kael", "Sandy", "Kyle", "Pastor", "Satanas"],

  bgBanner: banner,

  capitulos: [
    {
      id: 1,
      nombreCap: "Libranos del mal, amén.",
      imgPortada: cap1,
      video: "/videos/video.mp4",
      descripcion:
        "Kael, su esposa Sandy y su hijo Kyle suelen ir a la iglesia y se hacen ver como una familia religiosa y creyente del cristianismo.",
      personajes: ["Kael", "Kyle", "Sandy"],
    },

    {
      id: 2,
      nombreCap: "Suplicas de ayuda",
      imgPortada: cap2,
      video: "/videos/video.mp4",
      descripcion:
        "El matrimonio de Kael y Sandy cada vez está más roto. Aun así, los tres integrantes de la familia viven un duelo silencioso.",
      personajes: ["Kael", "Sandy", "Kyle"],
    },

    {
      id: 3,
      nombreCap: "Profecías de fantasía",
      imgPortada: cap3,
      video: "/videos/video.mp4",
      descripcion:
        "Suenan trompetas, gritos y relámpagos. Sandy y Kyle han desaparecido . Kael hará todo por encontrarlos y entender qué está pasando.",
      personajes: ["Kael", "Pastor"],
    },

    {
      id: 4,
      nombreCap: "No hablar con desconocidos",
      imgPortada: cap4,
      video: "/videos/video.mp4",
      descripcion:
        "El miedo invade a Kael. Aún se niega a aceptar el paradero de su familia y solo busca un lugar donde refugiarse.",
      personajes: ["Kael", "Hombre herido", "Satanas"],
    },

    {
      id: 5,
      nombreCap: "La hora del juicio",
      imgPortada: cap5,
      video: "/videos/video.mp4",
      descripcion:
        "El miedo consume a Kael y, aunque su destino es difícil de aceptar, pierde todo tipo de esperanzas.",
      personajes: ["Kael", "Kyle", "Sandy", "Satanas"],
    },
  ],
};

export default comic;