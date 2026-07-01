
import React, { useState } from "react";

export default function EscenariosCards({
  escenarioExortacion,
  habitacionConLuz,
  habitacionExortacion,
}) {
  const escenarios = [
    {
      nombre: "Escenario de exhortación",
      tipo: "Lugar sagrado",
      imagen: escenarioExortacion,
      descripcion:
        "Un espacio religioso donde inicia parte del conflicto espiritual de la historia. Representa la fe, la advertencia y el miedo ante lo desconocido.",
    },
    {
      nombre: "Habitación con luz",
      tipo: "Lugar familiar",
      imagen: habitacionConLuz,
      descripcion:
        "Un espacio tranquilo que representa la vida cotidiana antes del caos. Aquí se siente una calma que pronto será interrumpida.",
    },
    {
      nombre: "Habitación de exhortación",
      tipo: "Lugar oscuro",
      imagen: habitacionExortacion,
      descripcion:
        "Una versión más inquietante del espacio familiar. La oscuridad y los tonos cálidos reflejan tensión, miedo y peligro.",
    },
  ];

  const [escenarioActivo, setEscenarioActivo] = useState(0);

  const escenario = escenarios[escenarioActivo];

  return (
    <>
      <span id="escenarios" className="ancla-navbar"></span>

      <div className="encabezado-seccion d-flex h2 justify-content-center text-white text-center py-1">
        ESCENARIOS
      </div>

      <section className="escenarios-showcase">
        <div className="escenarios-contenedor">
          <div className="escenarios-imagen-grande">
            <img src={escenario.imagen} alt={escenario.nombre} />

            <div className="escenarios-sombra"></div>

            <div className="escenarios-texto-principal">
              <span>{escenario.tipo}</span>

              <h2>{escenario.nombre}</h2>

              <p>{escenario.descripcion}</p>
            </div>
          </div>

          <div className="escenarios-panel">
            <span className="escenarios-label">LOCACIONES</span>

            <h3>Espacios de la historia</h3>

            <p>
              Cada escenario representa un momento diferente dentro del universo
              KHAOPSY: la fe, la calma, el miedo y el inicio del caos.
            </p>

            <div className="escenarios-lista">
              {escenarios.map((item, index) => (
                <button
                  key={index}
                  className={
                    escenarioActivo === index
                      ? "escenario-opcion activa"
                      : "escenario-opcion"
                  }
                  onClick={() => setEscenarioActivo(index)}
                >
                  <img src={item.imagen} alt={item.nombre} />

                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h4>{item.nombre}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}