import React from "react";
import '../hojas-de-estilo/Libros.css'


const Libros = (props) => {
  const { libros } = props;

  return (
    <div className='contenedor-principal'>
      {libros.map((libro, index) => (
        <div className='info-libros' key={index}>
          <h2 className='titulo'>{libro.titulo}</h2>
          <p> {libro.sinopsis}</p>
          <br />
          <p className="publicacion">Año de publicación: {libro.añoPublicacion}</p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Libros;
