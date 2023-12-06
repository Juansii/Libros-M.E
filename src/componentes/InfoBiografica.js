import React from "react";
import '../hojas-de-estilo/InfoBiografica.css'

function InfoBiografica( props ) {

  const { biografia } = props;
  return(
    <div className="info-biografia">
      <h1 className="encabezado">  Bibliografia </h1>
      <p className="biografia-parrafo"> {biografia} </p>
    </div>
  );
}


export default InfoBiografica;