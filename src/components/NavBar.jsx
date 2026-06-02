
import React from "react";

export default function NavBar({ logoPequeno }) {
  return (
    <nav className="barra encabezado-seccion d-flex align-items-center justify-content-between p-3 rounded">
      <div className="logo-barra">
        <img src={logoPequeno} alt="Logo pequeño" style={{ height: 40 }} />
      </div>

      <button className="btn btn-dark ">MENU</button>
      <button className="btn btn-dark">TIENDA</button>
    </nav>
  );
}
