import React from "react";
import cartIcon from "../assets/carrito.png";

function ProductCard({ title, description, price, image }) {
  return (
    <div className="tarjeta-producto mb-3">
      <div className="zona-imagen-producto d-flex justify-content-center align-items-center">
        <img src={image} alt={title} className="imagen-producto" />
      </div>

      <div className="texto-producto px-2 py-2 text-center">
        <p className="descripcion-producto mb-1">{description}</p>
        <p className="precio-producto mb-0">{price}</p>

        <button className="boton-carrito">
          <img src={cartIcon} alt="Carrito" className="icono-carrito  object-fit-cover " style={{Width:"26px" , height:"26px"}}  />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;