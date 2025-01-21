// Seleccionamos los elementos del DOM que vamos a manipular
const puntajeFinal = document.querySelector("#puntaje-final"); // Elemento para mostrar el puntaje final
const totalAcertadas = document.querySelector("#total-acertadas"); // Elemento para mostrar el número total de respuestas correctas
const totalNoAcertadas = document.querySelector("#total-no-acertadas"); // Elemento para mostrar el número total de respuestas incorrectas
const btnComenar = document.querySelector("#btn-comenzar"); // Botón para comenzar o reiniciar el juego

// Verificar el indicador de acceso
const accesoPermitido = localStorage.getItem("acceso-final");

if (!accesoPermitido) {
    console.error("Acceso no autorizado a final.php. Redirigiendo a bienvenida...");
    location.href = "../bienvenida.php";
} else {
    // Eliminar el indicador para evitar que el usuario vuelva
    localStorage.removeItem("acceso-final");
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

    // Enviar el puntaje a final.php utilizando fetch
    /*fetch('../vistas/final.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'puntajePartida=' + encodeURIComponent(puntajePartida)
    })
    .then(response => response.json())  // Cambiar a json()
    .then(data => {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    });*/
    /*const formData = new FormData();
    formData.append('puntajePartida', puntajePartida);

    fetch('../vistas/final.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Aseguramos que la respuesta sea JSON
    .then(data => {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    });*/

    const formData = new FormData();
formData.append('puntajePartida', puntajePartida);

fetch('../vistas/final.php', {
    method: 'POST',
    body: formData
})
    .then(response => response.json()) // Asegúrate de que la respuesta sea JSON
    .then(data => {
        console.log("Respuesta del servidor:", data);

        if (data.status === "success") {
            // Actualiza el porcentaje en la página
            const puntosElement = document.querySelector(".puntos");
            puntosElement.textContent = `${data.nuevoPorcentaje}%`;
        } else {
            console.error("Error en el servidor:", data.message);
        }
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    });
    
    


    // Agregamos un evento al botón para redirigir a la página principal al hacer clic
    btnComenar.addEventListener("click", () => {
        localStorage.removeItem("puntaje-partida"); // Limpiar el puntaje de la partida anterior
        localStorage.removeItem("categoria-actual");
        localStorage.removeItem("acceso-final");
        location.href = "../bienvenida.php"; // Redirige a la página principal
    });

    // Eliminar el puntaje al abandonar la página (por ejemplo, al ir a otro sitio o recargar la página)
    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("puntaje-partida"); // Limpiar el puntaje
        localStorage.removeItem("categoria-actual");
        localStorage.removeItem("acceso-final");
    });


}
