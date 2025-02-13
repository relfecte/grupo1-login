// Seleccionamos los elementos del DOM que vamos a manipular
const txtPuntaje = document.querySelector("#puntos"); // Elemento para mostrar el puntaje actual
const nombre = document.querySelector("#nombre"); // Elemento donde se muestra el nombre del jugador en un encabezado
const nombreJugador = document.querySelector("#nombre-jugador"); // Elemento donde se muestra el nombre del jugador en otra parte
const puntajeFinal = document.querySelector("#puntaje-final"); // Elemento para mostrar el puntaje final
const totalAcertadas = document.querySelector("#total-acertadas"); // Elemento para mostrar el número total de respuestas correctas
const totalNoAcertadas = document.querySelector("#total-no-acertadas"); // Elemento para mostrar el número total de respuestas incorrectas
const btnComenar = document.querySelector("#btn-comenzar"); // Botón para comenzar o reiniciar el juego

// Recuperamos el nombre del jugador desde Local Storage y lo mostramos en los elementos correspondientes
nombre.innerHTML = localStorage.getItem("nombre"); // Muestra el nombre en el encabezado
nombreJugador.innerHTML = localStorage.getItem("nombre"); // Muestra el nombre en otro lugar de la interfaz

// Recuperar el puntaje de la partida actual
const puntajePartida = parseInt(localStorage.getItem("puntaje-partida")) || 0; 

// Mostrar el puntaje final de la partida
txtPuntaje.innerHTML = puntajePartida; 
puntajeFinal.innerHTML = `${puntajePartida} Puntos`; 

// Calcular aciertos y errores
const correctas = puntajePartida / 100; // Cada acierto vale 100 puntos
const totalPreguntas = 10; // Cambiar si el número total de preguntas es diferente
const incorrectas = totalPreguntas - correctas; 

// Mostrar aciertos y errores
totalAcertadas.innerHTML = correctas; 
totalNoAcertadas.innerHTML = incorrectas; 

// Agregamos un evento al botón para redirigir a la página principal al hacer clic
btnComenar.addEventListener("click", () => {
    localStorage.removeItem("puntaje-partida"); // Limpiar el puntaje de la partida anterior
    location.href = "bienvenida.php"; // Redirige a la página principal
});
