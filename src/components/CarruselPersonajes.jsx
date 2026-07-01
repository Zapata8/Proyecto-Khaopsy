import React, { useState } from "react";

export default function CarruselPersonajes({
  personajeKael,
  personajeKyle,
  personajePadre,
  personajeSandy,
  personajeSt,
}) {
  const personajes = [
    {
      nombre: "Kael",
      rol: "Protagonista",
      imagen: personajeKael,
      descripcion:
        "Un hombre atrapado entre la fe, el miedo y las consecuencias de sus propias decisiones.",
    },
    {
      nombre: "Kyle",
      rol: "Hijo de Kael",
      imagen: personajeKyle,
      descripcion:
        "Un niño que representa la inocencia dentro de una historia marcada por el caos y la incertidumbre.",
    },
    {
      nombre: "Pedro",
      rol: "Pastor",
      imagen: personajePadre,
      descripcion:
        "Una figura ligada a las creencias, las advertencias y la interpretación de los sucesos apocalípticos.",
    },
    {
      nombre: "Sandy",
      rol: "Esposa de Kael",
      imagen: personajeSandy,
      descripcion:
        "Un personaje clave en la vida de Kael y en el conflicto familiar que atraviesa la historia.",
    },
    {
      nombre: "Satanás",
      rol: "Presencia oscura",
      imagen: personajeSt,
      descripcion:
        "La representación del miedo, la tentación y la oscuridad que persigue a los personajes.",
    },
  ];

  const [personajeActivo, setPersonajeActivo] = useState(0);

  const personaje = personajes[personajeActivo];

  const siguiente = () => {
    setPersonajeActivo((personajeActivo + 1) % personajes.length);
  };

  const anterior = () => {
    setPersonajeActivo(
      personajeActivo === 0 ? personajes.length - 1 : personajeActivo - 1
    );
  };

  return (
    <>
      <span id="personajes" className="ancla-navbar"></span>

      <div className="encabezado-seccion d-flex h2 justify-content-center text-white text-center py-1">
        PERSONAJES
      </div>

      <section className="personajes-showcase">
        <div className="personajes-contenido">
          <div className="personajes-info">
            <span className="personajes-label">PERSONAJE</span>

            <h2>{personaje.nombre}</h2>

            <h4>{personaje.rol}</h4>

            <p>{personaje.descripcion}</p>

            <div className="personajes-botones">
              <button onClick={anterior}>← Anterior</button>
              <button onClick={siguiente}>Siguiente →</button>
            </div>
          </div>

          <div className="personajes-imagen-principal">
            <div className="circulo-rojo"></div>

            <img src={personaje.imagen} alt={personaje.nombre} />
          </div>
        </div>

        <div className="personajes-miniaturas">
          {personajes.map((item, index) => (
            <button
              key={index}
              className={
                personajeActivo === index
                  ? "miniatura-personaje activa"
                  : "miniatura-personaje"
              }
              onClick={() => setPersonajeActivo(index)}
            >
              <img src={item.imagen} alt={item.nombre} />
              <span>{item.nombre}</span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}