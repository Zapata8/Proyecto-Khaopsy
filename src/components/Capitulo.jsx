import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import comic from "../data/ComicData";
const bannerNegro = "/assets/bannernegro.png";

export default function Capitulo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mostrarModal, setMostrarModal] = useState(false);

  const capitulo = comic.capitulos.find(
    (cap) => cap.id === Number(id)
  );

  const volverAComic = () => {
    navigate("/");

    setTimeout(() => {
      const seccionComic = document.getElementById("comic");

      if (seccionComic) {
        seccionComic.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const abrirModalReproducir = () => {
    setMostrarModal(true);
  };

  const iniciarCapitulo = () => {
    setMostrarModal(false);
    navigate(`/video/${capitulo.id}`);
  };

  if (!capitulo) {
    return (
      <main className="capitulo-netflix-page">
        <h1>Capítulo no encontrado</h1>
      </main>
    );
  }

  return (
    <main className="capitulo-netflix-page">
      <section
        className="capitulo-hero"
        style={{
          backgroundImage: `url(${capitulo.imgPortada})`,
        }}
      >
        <div className="capitulo-hero-capa"></div>

        <button
          className="capitulo-boton-atras"
          onClick={volverAComic}
        >
          ← Volver
        </button>

        <div className="capitulo-hero-info">
          <span className="capitulo-etiqueta">
            CAPÍTULO {capitulo.id}
          </span>

          <h1>{capitulo.nombreCap}</h1>

          <p>{capitulo.descripcion}</p>

          <div className="capitulo-acciones">
            <button
              type="button"
              className="capitulo-boton-play"
              onClick={abrirModalReproducir}
            >
              ▶ Reproducir
            </button>

            <Link
              to="/"
              className="capitulo-boton-secundario"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <section
        className="capitulos-netflix-lista"
        style={{
          "--fondo-capitulos": `url(${bannerNegro})`,
        }}
      >
        <div className="capitulos-titulo-area">
          <span>EXPLORA LA HISTORIA</span>
          <h2>Capítulos</h2>
        </div>

        <div className="capitulos-scroll">
          {comic.capitulos.map((cap) => (
            <Link
              key={cap.id}
              to={`/capitulo/${cap.id}`}
              className={
                cap.id === capitulo.id
                  ? "capitulo-card-netflix activo"
                  : "capitulo-card-netflix"
              }
            >
              <div className="capitulo-mini-img">
                <img src={cap.imgPortada} alt={cap.nombreCap} />

                <div className="capitulo-mini-capa"></div>

                <span className="capitulo-mini-numero">
                  {cap.id}
                </span>

                <span className="capitulo-mini-play">
                  ▶
                </span>
              </div>

              <div className="capitulo-mini-info">
                <h3>{cap.nombreCap}</h3>
                <p>{cap.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {mostrarModal && (
        <div className="modal-interactivo-fondo">
          <div className="modal-interactivo-card">
            <button
              className="modal-interactivo-cerrar"
              onClick={() => setMostrarModal(false)}
            >
              ×
            </button>

            <h2>Antes de comenzar</h2>

            <p>
              “En cada escena de Líbralos del Mal podrás interactuar con los
              elementos dando clic. Explora, descubre y vive la historia.”
            </p>

            <button
              className="modal-interactivo-boton"
              onClick={iniciarCapitulo}
            >
              Entendido, iniciar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}