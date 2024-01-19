import React, { useState } from "react";
import '../hojas-de-estilo/navbar.css'

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a className="brand-name" href="biografia"> Mariana Enriquez </a>
      <div className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a className="home" href="#home">Inicio</a>
          </li>
          <li> <a className="biography" href="biography">Biografia</a>
            {/* <a className="about-her" href="about-her">Sobre ella</a> */}
          </li>
        </ul>
      </div>
      <button
        className={`hamburger ${isNavExpanded ? 'expanded' : ''}`}
        onClick={() => { setIsNavExpanded(!isNavExpanded) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
    </nav>
  )
};

export default Navbar;