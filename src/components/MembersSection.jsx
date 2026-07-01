import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import juanJose from "../assets/juan-jose.jpg";
import juanSebastian from "../assets/juan-sebastian.jpg";

function MembersSection() {
  return (
    <section id="integrantes" className="members-section">
      <SectionHeader title="CREADORES" />

      <div className="creadores-wrapper">
        <div className="creadores-intro">
          <span>DETRÁS DE KHAOPSY</span>

          <h2>
           Los creadores del caos
          </h2>

          <p>
            Somos dos adolescentes que estudian Producción de Multimedia en el
            SENA. Creamos “KHAOPSY”, un proyecto transmedia que retrata el
            apocalipsis desde una mirada cruda, visual y realista.
          </p>

          <p>
            A través de imágenes, narrativa y contenido digital, buscamos
            generar conciencia sobre los posibles colapsos sociales y
            espirituales que enfrenta la humanidad.
          </p>
        </div>

        <div className="creadores-grid">
          <div className="creador-perfil">
            <div className="creador-foto-box">
              <img src={juanJose} alt="Juan José" />
            </div>

            <div className="creador-datos">
              <span>CREADOR</span>
              <h3>Juan José</h3>
            </div>
          </div>

          <div className="creador-perfil creador-perfil-derecha">
            <div className="creador-foto-box">
              <img src={juanSebastian} alt="Juan Sebastián" />
            </div>

            <div className="creador-datos">
              <span>CREADOR</span>
              <h3>Juan Sebastián</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembersSection;