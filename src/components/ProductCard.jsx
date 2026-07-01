import React, { useContext } from "react";
import cartIcon from "../assets/carrito.png";
import { CarritoContext } from "../context/CarritoContext";

function ProductCard({ title, description, price, image }) {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <article className="producto-khaopsy-card">
      <div className="producto-imagen-area">
        <img src={image} alt={title} />
      </div>

      <div className="producto-info-area">
        <span className="producto-categoria">
          COLECCIONABLE
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="producto-bottom">
          <strong>{price}</strong>

          <button
            onClick={() =>
              agregarProducto({
                title,
                description,
                price,
                image,
              })
            }
          >
            <img src={cartIcon} alt="Agregar al carrito" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;