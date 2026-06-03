import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import juanJose from "../assets/juan-jose.jpg";
import juanSebastian from "../assets/juan-sebastian.jpg";

function MembersSection() {
  return (
    <section id="integrantes" className="members-section">
      <SectionHeader title="CREADORES" />

      <div className="container mt-4 members-wrapper">
        <div className="row justify-content-center">

         
          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
            
            <div className="mb-4">
              <h5 className="mb-2">Juan Jose</h5>
              <img
                src={juanJose}
                alt="Juan Jose"
                className=" miembro-foto"
              />
            </div>

            
            <div>
              <h5 className="mb-2">Juan Sebastian</h5>
              <img
                src={juanSebastian}
                alt="Juan Sebastian"
                className=" miembro-foto"
              />
            </div>
          </div>

          
          <div className="col-12 col-md-5 d-flex align-items-center">
            <p className=" fs-4    miembro-descripcion">
              Somos dos adolescentes que estudian Producción de Multimedia en el SENA.
              Comprometidos con contar historias profundas y provocadoras, creamos
              “KHAOPSY”, un proyecto transmedia que retrata el apocalipsis de forma
              cruda y realista. A través de imágenes, narrativa y contenido digital,
              buscamos generar conciencia sobre los posibles colapsos sociales y
              espirituales que enfrenta la humanidad. Nuestro enfoque explora cómo la
              psicología y la fe influyen en las decisiones humanas durante momentos de
              crisis extremas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembersSection;