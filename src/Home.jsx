import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "./context/CarritoContext";
const carritoIcon = "/assets/carrito.png";


import angelImg from "/assets/angel.png";
import fondoNegro from "/assets/fondonegro.png";
import logoPequeno from "/assets/logopequeño.png";

import personajeKael from "/assets/personaje-kael.png";
import personajeKyle from "/assets/personaje.kyle.png";
import personajePadre from "/assets/personaje.padre.png";
import personajeSandy from "/assets/personaje.sandy.png";
import personajeSt from "/assets/personaje.st.png";


import escenarioExortacion from "/assets/escenario-exortacion.png";
import habitacionConLuz from "/assets/habitacion-con-luz-png.png";
import habitacionExortacion from "/assets/habitacion-exortacion.png";


import NavBar from "./components/NavBar.jsx";
import SeccionIdea from "./components/SeccionIdea.jsx";
import CarruselPersonajes from "./components/CarruselPersonajes.jsx";
import EscenariosCards from "./components/Escenarios.jsx";

import TeaserSection from "./components/TeaserSection.jsx";
import Comic from "./components/Comicc.jsx";
import MemberCard from "./components/MemberCard.jsx";
import MembersSection from "./components/MembersSection.jsx";
import SectionStore from "./components/SectionStore.jsx";
import Footer from "./components/Footer.jsx";



export default function Home() {


  const { carrito } = useContext(CarritoContext);



  return (

    <div className="contenedor">


      <header className="titulo-principal text-center fs-2">
        KHAOPSY
      </header>



      <NavBar logoPequeno={logoPequeno} />



      <section
        className="banner my-3 rounded"
        style={{
          backgroundImage:`url(${fondoNegro})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          height:500,
        }}
      />




      <section className="encabezado-seccion h2 d-flex justify-content-center text-white text-center py-1">
        NUESTRO PROYECTO
      </section>




      <section id="idea">

        <SeccionIdea
          titulo="Proyecto"
          
        />

      </section>





      <section id="carrusel">

        <CarruselPersonajes

          personajeKael={personajeKael}
          personajeKyle={personajeKyle}
          personajePadre={personajePadre}
          personajeSandy={personajeSandy}
          personajeSt={personajeSt}

        />

      </section>






      <section id="escenario">

        <EscenariosCards

          escenarioExortacion={escenarioExortacion}
          habitacionConLuz={habitacionConLuz}
          habitacionExortacion={habitacionExortacion}

        />

      </section>






      <section id="teaser">

        <TeaserSection />

      </section>







      <section id="comic">

        <Comic />

      </section>






      <section id="miembros">

        <MembersSection />

      </section>





      <section id="miembro-card">

        <MemberCard />

      </section>






      <section id="store">

        <SectionStore />

      </section>







      <section id="footer">

        <Footer />

      </section>





{/* BOTON CARRITO FIJO */}

<Link

  to="/carrito"

  className="position-fixed"

  style={{

    width:"70px",
    height:"70px",
    bottom:"25px",
    right:"25px",
    zIndex:9999,
    background:"#ffffff",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    boxShadow:"0 0 10px #000",
    textDecoration:"none"

  }}

>


<img

src="/src/assets/carrito.png"

alt="Carrito"

style={{

width:"40px",
height:"40px",
objectFit:"contain"

}}


/>



<span

className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"

>

{carrito.length}

</span>



</Link>


    </div>


  );

}


