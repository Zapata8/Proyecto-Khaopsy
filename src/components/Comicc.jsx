import { Link } from "react-router-dom";
import comic from "../data/ComicData";
import bannerNegro from "../assets/bannernegro.png";

export default function Comic() {
  return (
    <>
      <section className="encabezado-seccion h3 d-flex justify-content-center text-white text-center py-1">
        COMIC
      </section>

      <section className="container py-4">

        <div className="text-center mb-4">
          <h3>{comic.nombreComic}</h3>

          <p>{comic.descripcion}</p>
        </div>

        <div className="row">

          {comic.capitulos.map((cap) => (
            <div
              key={cap.id}
              className="col"
            >
              <div className="card h-80 ">

                <img
                  src={cap.imgPortada}
                  className="card-img-top"
                  alt={cap.nombreCap}
                  style={{
                    height: "150px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h6 className="card-title">
                    {cap.nombreCap}
                  </h6>

                  <p className="card-text">
                    {cap.descripcion}
                  </p>

                  <Link
                    to={`/capitulo/${cap.id}`}
                    className="btn btn-dark "
                  >
                    Ver capítulo
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}