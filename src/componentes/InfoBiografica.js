import React from "react";
import '../hojas-de-estilo/InfoBiografica.css'

function InfoBiografica( props ) {

  const { biografia } = props;
  return(
    <div className="info-biografia">
      <h3 className="encabezado">  </h3>
      <p className="biografia-parrafo"> {biografia} </p>
    </div>
  );
}


export default InfoBiografica;