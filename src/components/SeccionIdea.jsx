
import React from "react";


export default function SeccionIdea({ angelImg,titulo }) {
  return (
    <section className="seccion-idea"> 
    
      <div className="contenedor-imagen-idea d-block p-2 text-center position-relative my-4">
        <div className="etiqueta etiqueta-idea-superpuesta border border-danger text-black bg-white fw-bolder d-inline-block px-5 py-1 mb-3">
         {titulo}
        </div>

        <img
          src={angelImg}
          alt="Ángel del proyecto"
          className="imagen-idea rounded mx-auto d-block rounded-5"
          style={{ width: 300 }}
        />
      </div>

      <p className="texto-idea lh-sm fs-5 text-center">
        Desarrollar un proyecto multimedial transmedia que represente el
        apocalipsis de una manera cruda y realista, para advertir a la
        humanidad sobre lo que está por venir. El proyecto también pretende
        mostrar cómo la psicología influye en las decisiones de las personas
        en momentos de crisis religiosas.
      </p>
    </section>
  );
}