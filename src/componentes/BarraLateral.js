import React from 'react';
import InfoBiografica from './InfoBiografica';
import '../hojas-de-estilo/BarraLateral.css'

function BarraLateral() {

  const libros = ['Biografía', 'Bajar es lo peor', 'Como desparecer completamente', 'Mitología Celta', 'Mitología Egipcia', 'Alguien camina sobre tu tumba', 'Las cosas que perdimos en el fuego', 'Los peligros de fumar en la cama', 'Este es el mar', 'La hermana menor', 'Ese verano a oscuras', 'El otro lado' ]

  return(
    <div className='App'>
      <nav className='barra-lateral'>
        <header className='header'>Mariana Enriquez</header>
        
        <InfoBiografica 
        />
        <ul>
          {libros.map((libro, index) => (
            <li className='casilla' key={index}>{libro}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default BarraLateral;