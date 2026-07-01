import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const navigate = useNavigate();

  const {
    carrito,
    eliminarProducto,
    vaciarCarrito,
    aumentarCantidad,
    disminuirCantidad,
  } = useContext(CarritoContext);

  const [modal, setModal] = useState(false);

  const convertirPrecio = (precio) => {
    return Number(precio.replace(/\D/g, ""));
  };

  const total = carrito.reduce((acumulado, producto) => {
    return acumulado + convertirPrecio(producto.price) * producto.cantidad;
  }, 0);

  const formatoPrecio = total.toLocaleString("es-CO");

  return (
    <main className="carrito-page">
      <button className="carrito-atras" onClick={() => navigate(-1)}>
        ← Atrás
      </button>

      <section className="carrito-contenedor">
        <div className="carrito-header">
          <span>TIENDA KHAOPSY</span>
          <h1>Carrito de compras</h1>
          <p>Revisa tus productos antes de finalizar la compra.</p>
        </div>

        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <h2>Tu carrito está vacío</h2>
            <p>Agrega productos desde la tienda para verlos aquí.</p>

            <button onClick={() => navigate("/")}>
              Volver a la tienda
            </button>
          </div>
        ) : (
          <div className="carrito-layout">
            <div className="carrito-lista">
              {carrito.map((producto, index) => (
                <article className="carrito-producto" key={index}>
                  <div className="carrito-producto-img">
                    <img src={producto.image} alt={producto.title} />
                  </div>

                  <div className="carrito-producto-info">
                    <span>PRODUCTO</span>
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <strong>{producto.price}</strong>

                    <div className="carrito-controles">
                      <button onClick={() => disminuirCantidad(index)}>
                        -
                      </button>

                      <span>{producto.cantidad}</span>

                      <button onClick={() => aumentarCantidad(index)}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="carrito-eliminar"
                    onClick={() => eliminarProducto(index)}
                  >
                    Eliminar
                  </button>
                </article>
              ))}
            </div>

            <aside className="carrito-resumen">
              <h2>Resumen</h2>

              <div className="resumen-linea">
                <span>Productos</span>
                <strong>{carrito.length}</strong>
              </div>

              <div className="resumen-linea">
                <span>Total</span>
                <strong>${formatoPrecio} COP</strong>
              </div>

              <button
                className="btn-finalizar"
                onClick={() => setModal(true)}
              >
                Finalizar compra
              </button>

              <button
                className="btn-vaciar"
                onClick={vaciarCarrito}
              >
                Vaciar carrito
              </button>
            </aside>
          </div>
        )}
      </section>

      {modal && (
        <div className="modal-carrito">
          <div className="modal-carrito-card">
            <h2>Compra en proceso</h2>

            <p>
              Tu pedido está siendo procesado. Gracias por apoyar el universo
              KHAOPSY.
            </p>

            <button onClick={() => setModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Carrito;