import React from "react";
import angel from "/assets/angel.png";

function SeccionIdea() {
  return (
    <section
      id="nuestro-proyecto"
      className="seccion-proyecto"
      style={{ "--fondo-proyecto": `url(${angel})` }}
    >
      <div className="contenedor-textos-proyecto">
        <div className="caja-texto-proyecto">
          <p>
           Las crisis religiosas han influido mucho en la historia de la humanidad, especialmente en momentos de miedo, duda y grandes cambios. En este proyecto se busca mostrar cómo las personas reaccionan cuando creen que se acerca el fin del mundo, usando como referencia las Siete Trompetas del Apocalipsis.

A través de una historia visual e interactiva, el proyecto muestra cómo el miedo, las creencias y las emociones pueden cambiar la forma en que las personas piensan, actúan y enfrentan una crisis religiosa.

          </p>
        </div>

        <div className="caja-texto-proyecto">
          <p>
            Por medio de una narrativa inmersiva, el usuario podrá seguir la historia de una familia que enfrenta los acontecimientos descritos en las profecías bíblicas, experimentando de cerca los conflictos, decisiones y desafíos que surgen en un contexto de incertidumbre. De esta manera, el proyecto no solo busca entretener, sino también generar reflexión sobre la influencia de la fe, la psicología y las creencias en el comportamiento humano frente a situaciones extremas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SeccionIdea;