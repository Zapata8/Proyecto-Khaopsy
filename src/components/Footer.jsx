import React from "react";
import igIcon from "../assets/icon-instagram.png";
import waIcon from "../assets/icon-whatsapp.png";
import ytIcon from "../assets/icon-youtube.png";

function Footer() {
  return (
    <footer className="seccion-pie mt-4 pt-3 pb-4">
      <div className="container">
        <div className="row justify-content-center text-white">
          <div className="col-11 col-md-6">

            <p className="titulo-pie mb-1">CONTACTO: 305 3915570</p>

            <p className="mb-3 texto-pie">
              CORREO: Khaopsy@gmail.com
            </p>

           
            <div className="d-flex justify-content-center gap-4 iconos-pie">
              
              <a href="#" className="enlace-icono-pie">
                <span className="circulo-icono-pie">
                  <img src={igIcon} alt="Instagram" className="object-fit-contain imagen-icono-pie"style={{Width:"28px" , height:"28px"}} 
                  />
                </span>
              </a>

              <a href="#" className="enlace-icono-pie">
                <span className="circulo-icono-pie">
                  <img src={waIcon} alt="WhatsApp" className="imagen-icono-pie"style={{Width:"28px" , height:"28px"}}  />
                </span>
              </a>

              <a href="#" className="enlace-icono-pie">
                <span className="circulo-icono-pie">
                  <img src={ytIcon} alt="YouTube" className="imagen-icono-pie"style={{Width:"28px" , height:"28px"}}  />
                </span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;