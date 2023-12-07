import React from "react";
import '../hojas-de-estilo/Libros.css'
import { HiChevronDoubleUp } from "react-icons/hi2";

const Libros = (props) => {
  const { libros } = props;

  return (
    <div className='contenedor-principal'>
      {libros.map((libro, index) => (
        <div className='info-libros' key={index}>
          <h2 className='titulo'>{libro.titulo}</h2>
          <p> {libro.sinopsis}</p>
          <p>Año de publicación: {libro.añoPublicacion}</p>
          <button className="tapa"> tapa </button>
          <button className="compra"> lo quiero  </button>
          <a href="#navbar" class="arriba">
          <HiChevronDoubleUp />
      </a>
        </div>
      ))}
    </div>
  );
};

export default Libros;
