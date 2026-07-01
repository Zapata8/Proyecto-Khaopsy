import React from "react";
import igIcon from "/assets/icon-instagram.png";
import waIcon from "/assets/icon-whatsapp.png";
import ytIcon from "/assets/icon-youtube.png";

function Footer() {
  return (
    <footer className="seccion-pie footer-khaopsy">
      <div className="footer-capa">
        <div className="footer-contenedor">
          
          <div className="footer-card">
            <h2>Contáctanos</h2>

            <p>
              <span>📞</span>
              Llámanos al 305 3915570
            </p>

            <p>
              <span>💬</span>
              Escríbenos por WhatsApp
            </p>

            <p>
              <span>✉️</span>
              Envíanos un correo electrónico
            </p>
          </div>

          <div className="footer-card footer-redes-card">
            <h2>
              Síguenos en <br />
              nuestras redes
            </h2>

            <div className="footer-redes">
              <a href="#" aria-label="WhatsApp">
                <img src={waIcon} alt="WhatsApp" />
              </a>

              <a href="#" aria-label="Instagram">
                <img src={igIcon} alt="Instagram" />
              </a>

              <a href="#" aria-label="YouTube">
                <img src={ytIcon} alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="footer-card">
            <h2>Correo electrónico</h2>

            <p>
              Déjanos tu correo para recibir novedades del universo KHAOPSY.
            </p>

            <div className="footer-form">
              <input
                type="email"
                placeholder="Introduce tu correo"
              />

              <button>
                Enviar
              </button>
            </div>
          </div>

        </div>

        <div className="footer-copy">
          © 2026 KHAOPSY. Proyecto transmedia.
        </div>
      </div>
    </footer>
  );
}

export default Footer;