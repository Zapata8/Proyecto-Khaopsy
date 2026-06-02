import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="encabezado-seccion d-flex justify-content-center  text-white text-center py-1">
      <h2 className="m-0 encabezado-seccion-titulo">{title}</h2>
    </div>
  );
}

export default SectionHeader;