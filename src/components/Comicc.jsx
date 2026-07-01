import { Link } from "react-router-dom";
import comic from "../data/ComicData";
import bannerNegro from "/assets/bannernegro.png";

export default function Comic() {
  const capituloPrincipal = comic.capitulos[0];
  const otrosCapitulos = comic.capitulos.slice(1);

  return (
    <>
      <span id="comic" className="ancla-navbar"></span>

      <section className="encabezado-seccion h3 d-flex justify-content-center text-white text-center py-1">
        COMIC
      </section>

      <section
        className="comic-section-nueva"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.96), rgba(35,0,0,.92)), url(${bannerNegro})`,
        }}
      >
        <div className="comic-contenedor-nuevo">
          <div className="comic-info-superior">
            <span>HISTORIA INTERACTIVA</span>

            <h2>{comic.nombreComic}</h2>

            <p>{comic.descripcion}</p>
          </div>

          <div className="comic-layout-nuevo">
            <div className="comic-destacado">
              <img
                src={capituloPrincipal.imgPortada}
                alt={capituloPrincipal.nombreCap}
              />

              <div className="comic-destacado-sombra"></div>

              <div className="comic-destacado-texto">
                <span>CAPÍTULO 01</span>

                <h3>{capituloPrincipal.nombreCap}</h3>

                <p>{capituloPrincipal.descripcion}</p>

                <Link
                  to={`/capitulo/${capituloPrincipal.id}`}
                  className="boton-comic-principal"
                >
                  Ver capítulo
                </Link>
              </div>
            </div>

            <div className="comic-lista-lateral">
              {otrosCapitulos.map((cap, index) => (
                <div className="comic-item-lateral" key={cap.id}>
                  <div className="numero-capitulo">
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <img src={cap.imgPortada} alt={cap.nombreCap} />

                  <div className="comic-item-texto">
                    <h4>{cap.nombreCap}</h4>

                    <p>{cap.descripcion}</p>

                    <Link
                      to={`/capitulo/${cap.id}`}
                      className="boton-comic-lateral"
                    >
                      Abrir capítulo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}