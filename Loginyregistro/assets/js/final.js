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

// Recuperamos el puntaje total desde Local Storage y lo mostramos
txtPuntaje.innerHTML = parseInt(localStorage.getItem("puntaje-total")); // Muestra el puntaje actual
puntajeFinal.innerHTML = parseInt(localStorage.getItem("puntaje-total")) + " Puntos"; // Muestra el puntaje total con una etiqueta adicional

// Calculamos el número de respuestas correctas y no correctas
const correctas = parseInt(localStorage.getItem("puntaje-total")) / 100; // Calcula las respuestas correctas (suponiendo que cada respuesta vale 100 puntos)
const incorrectas = 30 - correctas; // Calcula las respuestas incorrectas (suponiendo un total de 30 preguntas)

// Mostramos los valores calculados en los elementos correspondientes
totalAcertadas.innerHTML = correctas; // Muestra el número de respuestas correctas
totalNoAcertadas.innerHTML = incorrectas; // Muestra el número de respuestas incorrectas

// Agregamos un evento al botón para redirigir a la página principal al hacer clic
btnComenar.addEventListener("click", () => {
    location.href = "principal.html"; // Redirige a la página principal
});
