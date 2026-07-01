import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Video() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [viñetaActual, setViñetaActual] = useState(0);

  const viñetasPorCapitulo = {
    1: [
      "/viñeta1.html",
      "/viñeta2.html",
      "/viñeta3.html",
      "/viñeta4.html",
    ],

    2: [
      "/viñeta5.html",
      "/viñeta6.html",
      "/viñeta7.html",
      "/viñeta8.html",
      
    ],
  };

  const viñetas = viñetasPorCapitulo[Number(id)] || [];

  const volverACapitulo = () => {
    navigate(`/capitulo/${id}`);
  };

  const siguiente = () => {
    if (viñetaActual < viñetas.length - 1) {
      setViñetaActual(viñetaActual + 1);
    }
  };

  const anterior = () => {
    if (viñetaActual > 0) {
      setViñetaActual(viñetaActual - 1);
    }
  };

  if (viñetas.length === 0) {
    return (
      <main className="visor-vinetas-page">
        <button
          onClick={volverACapitulo}
          className="btn-volver-vineta"
        >
          ← Volver
        </button>

        <div className="sin-vinetas">
          <h1>CONTINUARA...</h1>
          <p>Este capitulo esta en desarrollo</p>
        </div>
      </main>
    );
  }

  return (
    <main className="visor-vinetas-page">
      <div className="visor-vinetas-header">
        <button
          onClick={volverACapitulo}
          className="btn-volver-vineta"
        >
          ← Volver
        </button>

        <div className="titulo-vineta">
          <span>CAPÍTULO {id}</span>
        </div>

        <div className="contador-vineta">
          {viñetaActual + 1} / {viñetas.length}
        </div>
      </div>

      <section className="visor-vinetas-contenedor">
        <iframe
          src={viñetas[viñetaActual]}
          title={`Viñeta ${viñetaActual + 1}`}
          className="iframe-vineta"
        ></iframe>
      </section>

      <div className="controles-vinetas">
        <button
          onClick={anterior}
          disabled={viñetaActual === 0}
        >
          ← Anterior
        </button>

        <button
          onClick={siguiente}
          disabled={viñetaActual === viñetas.length - 1}
        >
          Siguiente →
        </button>
      </div>
    </main>
  );
}

export default Video;