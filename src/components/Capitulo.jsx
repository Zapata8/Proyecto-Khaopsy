import { useParams, Link } from "react-router-dom";
import comic from "../data/ComicData";
import bannerNegro from "../assets/bannernegro.png";

export default function Capitulo() {
  const { id } = useParams();

  const capitulo = comic.capitulos.find(
    (cap) => cap.id === Number(id)
  );

  if (!capitulo) {
    return <h1>Capítulo no encontrado</h1>;
  }

  return (
    <>
      <button
        className="btn btn-danger m-3"
        onClick={() => window.history.back()}
      >
        ← Atrás
      </button>

      <div
        className="banner-capitulo"
        style={{
          backgroundImage: `url(${capitulo.imgPortada})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay-capitulo">
          <div className="numero-capitulo">
            {capitulo.id}
          </div>

          <h1>{capitulo.nombreCap}</h1>

          <p>{capitulo.descripcion}</p>

          <button className="btn-reproducir">
            Reproducir
          </button>
        </div>
      </div>

      <section
        className="lista-capitulos"
        style={{
          backgroundImage: `url(${bannerNegro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Capítulos:</h2>

        <div className="row">
          {comic.capitulos.map((cap) => (
            <div key={cap.id} className="col-md-2">
              <Link to={`/capitulo/${cap.id}`}>
                <img
                  src={cap.imgPortada}
                  alt={cap.nombreCap}
                  className="miniatura-capitulo"
                />

                <h5 className="nom">
                  {cap.id}. {cap.nombreCap}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}