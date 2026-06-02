
import React from "react";

export default function EscenariosCards({
  escenarioExortacion,
  habitacionConLuz,
  habitacionExortacion,
}) {
  return (
    <>
      <section className="seccion-escenarios">

  <div className="encabezado-seccion d-flex justify-content-center  text-white text-center py-1 h2">
    ESCENARIOS
  </div>

  <div className="container mt-4">

    <div className="row text-center">

      
      <div className="col-12 col-md-4 mb-4">
        <div className="card bg-black text-white h-100">
          <div className="ratio ratio-16x9">
            <img src={escenarioExortacion} alt="Escenario exortación" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Escenario de exortación</h5>
          </div>
        </div>
      </div>

      
      <div className="col-12 col-md-4 mb-4">
        <div className="card bg-black text-white h-100">
          <div className="ratio ratio-16x9">
            <img src={habitacionConLuz} alt="Habitación con luz" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Habitación con luz</h5>
          </div>
        </div>
      </div>

      
      <div className="col-12 col-md-4 mb-4">
        <div className="card bg-black text-white h-100">
          <div className="ratio ratio-16x9">
            <img src={habitacionExortacion} alt="Habitación exortación" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Habitación de exortación</h5>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

    </>
  );
}
