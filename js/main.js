// BOTÓN BACKTOTOP
window.onscroll = function() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 500) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  

// REPRESENTACIONES RANDOM


let indexActual = 0;

function obtenerIndiceAleatorio() {
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * representaciones.length);
    } while (indiceAleatorio === indexActual); // Evitar que se repita la misma imagen consecutivamente
    return indiceAleatorio;
}

// Función para verificar si un campo existe o está vacío, si no, mostrar "s/d"
function verificarDato(dato) {
    return (dato && dato.trim() !== "") ? dato : "s/d";
}

function actualizarRepresentacion(index) {
    const representacion = representaciones[index];
    const imagenElemento = document.getElementById("representacionImagen");
    const contenedorImagen = imagenElemento.parentElement;
    const datosElemento = document.getElementById("representacionDatos");
    const contenedorInfo = datosElemento.parentElement;

    // Remover las clases "active" para reiniciar la animación
    contenedorImagen.classList.remove("active");
    contenedorInfo.classList.remove("active");

    // Actualizar la imagen y los datos en el DOM después de una pequeña espera para ver la animación de desaparición
    setTimeout(() => {
        // Actualizar el contenido de la imagen y los datos
        imagenElemento.src = representacion.imagen;
        datosElemento.innerHTML = `
            <strong>${verificarDato(representacion.titulo)}</strong><br>
            Autor: ${verificarDato(representacion.autor)} (${verificarDato(representacion.nacionalidad)})<br>
            Tipo: ${verificarDato(representacion.tipo)}<br>
            Fecha: ${verificarDato(representacion.fecha)}<br>
            <hr>
            Descripción: ${verificarDato(representacion.descripcion)}
            <hr>
            <p class="pieImg">Fuente: ${verificarDato(representacion.fuente)}</p>
        `;

        // Añadir las clases "active" para mostrar con animación
        contenedorImagen.classList.add("active");
        contenedorInfo.classList.add("active");
    }, 100);
}

// Cambiar imagen al hacer clic en el botón
document.getElementById("btnCambiarImagen").addEventListener("click", function() {
    const nuevoIndice = obtenerIndiceAleatorio();
    indexActual = nuevoIndice;
    actualizarRepresentacion(indexActual);
});

// Inicializar con la primera representación
actualizarRepresentacion(indexActual);
