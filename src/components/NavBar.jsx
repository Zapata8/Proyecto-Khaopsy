import React from "react";
import patronRojo from "../assets/patron-rojo.png";

function NavBar({ logoPequeno }) {
  const irASeccion = (id) => {
    const seccion = document.getElementById(id);

    if (seccion) {
      const alturaNavbar = 165;

      const posicion =
        seccion.getBoundingClientRect().top + window.scrollY - alturaNavbar;

      window.scrollTo({
        top: posicion,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="navbar-khaopsy"
      style={{
        "--fondo-navbar": `url(${patronRojo})`,
      }}
    >
      <div className="navbar-logo">
        <img src={logoPequeno} alt="Logo KHAOPSY" />
      </div>

      <ul className="navbar-menu">
        <li>
          <button onClick={() => irASeccion("nuestro-proyecto")}>
            Nuestro proyecto
          </button>
        </li>

     

        <li>
          <button onClick={() => irASeccion("personajes")}>
            Personajes
          </button>
        </li>

        <li>
          <button onClick={() => irASeccion("escenarios")}>
            Escenarios
          </button>
        </li>

        <li>
          <button onClick={() => irASeccion("teaser")}>
           Teaser
          </button>
        </li>
           <li>
          <button onClick={() => irASeccion("comic")}>
            Cómic
          </button>
        </li>

        <li>
          <button onClick={() => irASeccion("integrantes")}>
            Miembros
          </button>
        </li>

        <li>
          <button onClick={() => irASeccion("tienda")}>
            Tienda
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;