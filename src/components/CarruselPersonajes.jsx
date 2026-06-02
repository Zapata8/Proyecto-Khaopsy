
import React from "react";

export default function CarruselPersonajes({
  personajeKael,
  personajeKyle,
  personajePadre,
  personajeSandy,
  personajeSt,
}) {
  return (
    <>
      <div className="encabezado-seccion d-flex h2 justify-content-center  text-white text-center py-1">
        COMIC
      </div>

      <section className="seccion-personajes p-3 mb-4 bg-black text-white rounded">
        <div className="subtitulo-personajes border border-danger text-black bg-white fw-bolder d-inline-block px-5 py-1 mb-4">
          PERSONAJES
        </div>

        <div id="carruselPersonajes" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <img
                src={personajeKael}
                className="d-block mx-auto rounded"
                alt="Kael"
                style={{ width: 260, height: 260, objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={personajeKyle}
                className="d-block mx-auto rounded"
                alt="Kyle"
                style={{ width: 260, height: 260, objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={personajePadre}
                className="d-block mx-auto rounded"
                alt="Padre"
                style={{ width: 260, height: 260, objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={personajeSandy}
                className="d-block mx-auto rounded"
                alt="Sandy"
                style={{ width: 260, height: 260, objectFit: "cover" }}
              />
            </div>

            <div className="carousel-item">
              <img
                src={personajeSt}
                className="d-block mx-auto rounded"
                alt="ST"
                style={{ width: 260, height: 260, objectFit: "cover" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carruselPersonajes"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carruselPersonajes"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}