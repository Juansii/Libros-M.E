let botones = document.querySelectorAll(".boton-imagen");

function mostrarImagen(imagen, segundos) {
  imagen.style.display = "block"; // Mostrar la imagen

  setTimeout(function() {
    imagen.style.display = "none"; // Ocultar la imagen después de segundos segundos
  }, segundos * 1000); // Convertir segundos a milisegundos
}

// Agregar el evento de clic a cada botón
botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    let imagen = boton.querySelector("img"); // Encontrar la imagen dentro del botón
    mostrarImagen(imagen, 2); // Mostrar la imagen durante 2 segundos
  });
});
