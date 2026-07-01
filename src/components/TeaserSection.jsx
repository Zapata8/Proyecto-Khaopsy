import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import teaserImg from "/assets/teaser.jpg";
import teaserVideo from "/assets/teaserfinal.mp4";

function TeaserSection() {
  const [verVideo, setVerVideo] = useState(false);

  return (
    <section id="teaser">
      <SectionHeader title="TEASER" />

      <section className="khaopsy-teaser-section">
        <div className="khaopsy-teaser-card">
          {!verVideo ? (
            <>
              <img
                src={teaserImg}
                alt="Teaser KHAOPSY"
                className="khaopsy-teaser-img"
              />

              <div className="khaopsy-teaser-overlay"></div>

              <div className="khaopsy-teaser-content">
                <span className="khaopsy-teaser-label">
                  TEASER OFICIAL
                </span>

                <h2>
                  MÁS ALLÁ DE <br />
                  LA PROFECÍA
                </h2>

                <p>
                  Una historia oscura donde la fe, el miedo y el fin de los
                  tiempos se cruzan en un mismo lugar.
                </p>
              </div>

            

              <div className="khaopsy-teaser-bottom">
                <button
                  className="khaopsy-teaser-button"
                  onClick={() => setVerVideo(true)}
                >
                  VER TEASER
                </button>
              </div>
            </>
          ) : (
            <div className="khaopsy-video-box">
              <button
                className="khaopsy-back-button"
                onClick={() => setVerVideo(false)}
              >
                ← VOLVER
              </button>

              <video className="khaopsy-video" controls autoPlay>
                <source src={teaserVideo} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default TeaserSection;