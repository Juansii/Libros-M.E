import React from 'react';
import '../hojas-de-estilo/InfoBiografica.css'
import biografia from '../biografia.js'
import imagenMariana from '../imagenes/Mariana.png'

function InfoBiografica( ) {

  return(
    <div className='info-biografia'>
      <h3 className='encabezado'> Biografía </h3>
      <hr />
      <img src={imagenMariana} alt='Mariana Enriquez' className='mariana-enriquez'/>
      <p className='biografia-parrafo'> {biografia.biografia}  </p> 
      <hr />
    </div>
  );
}


export default InfoBiografica;