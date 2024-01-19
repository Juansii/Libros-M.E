import React from 'react';
import  '../hojas-de-estilo/tapas.css'
import tapa1 from '../imagenes/tapa-bajar-es-lo-peor.jpeg'
import tapa2 from '../imagenes/tapa-como-desaparecer-completamente.jpeg'
import tapa3 from '../imagenes/tapa-mitologia-celta.jpeg'
import tapa4 from '../imagenes/tapa-mitologia-egipcia.jpeg'
import tapa5 from '../imagenes/tapa-alguien-camina.jpeg'
import tapa6 from '../imagenes/tapa-las-cosas-que-perdimos.jpeg'
import tapa7 from '../imagenes/tapa-los-peligros-de-fumar-en-la-cama.jpeg'
import tapa8 from '../imagenes/tapa-este-es-el-mar.jpeg'
import tapa9 from '../imagenes/tapa-la-hermana-menor.jpeg'
import tapa10 from '../imagenes/tapa-nuestra-parte-de-noche.jpeg'
import tapa11 from '../imagenes/tapa-el-otro-lado.jpeg'


function Tapas() {
  const imagenes = [tapa1, tapa2, tapa3, tapa4, tapa5, tapa6, tapa7, tapa8, tapa9, tapa10, tapa11]

  return (
    <div>
      <div className="contenedor-principal-tapa">
        <div className="contenedor-imagen">
          {imagenes.map((imagen, index) => (
            <div key={index} className='tapa-libro'>
              <img src={imagen} alt={`tapa-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tapas;





