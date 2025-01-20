// Seleccionamos los elementos del DOM que vamos a manipular
const puntajeFinal = document.querySelector("#puntaje-final"); // Elemento para mostrar el puntaje final
const totalAcertadas = document.querySelector("#total-acertadas"); // Elemento para mostrar el número total de respuestas correctas
const totalNoAcertadas = document.querySelector("#total-no-acertadas"); // Elemento para mostrar el número total de respuestas incorrectas
const btnComenar = document.querySelector("#btn-comenzar"); // Botón para comenzar o reiniciar el juego


// Recuperar el puntaje de la partida actual
const puntajePartida = parseInt(localStorage.getItem("puntaje-partida")) || 0; 

// Mostrar el puntaje final de la partida
puntajeFinal.innerHTML = `${puntajePartida} Puntos`; 

// Calcular aciertos y errores
const correctas = puntajePartida; // Acertadas
const totalPreguntas = 10; // Cambiar si el número total de preguntas es diferente
const incorrectas = totalPreguntas - correctas; 

// Mostrar aciertos y errores
totalAcertadas.innerHTML = correctas; 
totalNoAcertadas.innerHTML = incorrectas; 

// Agregamos un evento al botón para redirigir a la página principal al hacer clic
btnComenar.addEventListener("click", () => {
    localStorage.removeItem("puntaje-partida"); // Limpiar el puntaje de la partida anterior
    location.href = "../bienvenida.php"; // Redirige a la página principal
});

// Eliminar el puntaje al abandonar la página (por ejemplo, al ir a otro sitio o recargar la página)
window.addEventListener("beforeunload", () => {
    localStorage.removeItem("puntaje-partida"); // Limpiar el puntaje
});

//ELIMINAR CATEGORIA DEL STORAGE AL SALIR O CLICKAR