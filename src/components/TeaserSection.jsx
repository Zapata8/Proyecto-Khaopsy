import React from "react";
import SectionHeader from "./SectionHeader";
import teaserImg from "../assets/teaser.jpg";

function TeaserSection() {
  return (
    <section id="teaser">
      <SectionHeader title="CORTO" />

      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-11 col-md-6 text-center">
            <div className="position-relative contenedor-imagen-teaser">
              <img
                src={teaserImg}
                alt="Teaser"
                className="img-fluid shadow-sm"
              />
              <button className="btn btn-danger btn-sm boton-teaser-superpuesto">
                VER TEASER
              </button>
            </div>

            <div className="mt-3">
              <button className="btn btn-secondary w-100 mb-1">
                INGRESA AQUI AL COMIC 👇
              </button>
              <button className="btn btn-dark px-5">VER COMIC</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeaserSection;