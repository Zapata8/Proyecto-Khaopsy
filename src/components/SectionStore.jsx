import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import ProductCard from "./ProductCard.jsx";


import hoodieImg from "../assets/product-hoodie.png";
import phoneCaseImg from "../assets/product-phonecase.png";
import maskImg from "../assets/product-mask.png";


function SectionStore() {

  return (

    <section id="tienda" className="mt-4 seccion-tienda">

      <SectionHeader title="TIENDA" />


      <div className="container mt-4 pb-4">

        <div className="row justify-content-center g-4">


          <div className="col-12 col-md-6 col-lg-4">

            <ProductCard
              title="Figura de Satanas"
              description="figura de Satanas"
              price="$120.000 COP"
              image={hoodieImg}
            />

          </div>



          <div className="col-12 col-md-6 col-lg-4">

            <ProductCard
              title="Figura de Kael"
              description="Figura de Kael"
              price="$120.000 COP"
              image={phoneCaseImg}
            />

          </div>



          <div className="col-12 col-md-6 col-lg-4">

            <ProductCard
              title="Máscara KHAOPSY"
              description="Máscara con el logo de KHAOPSY."
              price="$150.000 COP"
              image={maskImg}
            />

          </div>


        </div>

      </div>


    </section>

  );

}


export default SectionStore;