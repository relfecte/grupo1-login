// Deshabilitar el cacheo de la página
window.onload = () => {
    // Agregamos un encabezado para evitar la caché en navegadores
    if ('performance' in window && performance.getEntriesByType('navigation')[0].type === 'back_forward') {
        location.reload(); // Recargar la página completamente si es navegación hacia atrás
    }
};

const txtPuntaje = document.querySelector("#puntos");
// Inicializamos el índice de la pregunta actual
let numPreguntaActual = 0; 

// Recuperamos el puntaje de la partida actual
let puntajePartida = 0;
localStorage.setItem("puntaje-partida", 0);
if (!localStorage.getItem("puntaje-partida")) { 
    puntajePartida = 0;
    txtPuntaje.innerHTML = puntajePartida;
} else { 
    puntajePartida = parseInt(localStorage.getItem("puntaje-partida"));
    txtPuntaje.innerHTML = puntajePartida;
}

// Obtener la categoría seleccionada del LocalStorage
const categoriaSeleccionada = localStorage.getItem("categoria-actual");


console.log("Categoría seleccionada desde LocalStorage:", categoriaSeleccionada);

if (!categoriaSeleccionada) {
    location.href = "../bienvenida.php";
    console.error("La categoría no está almacenada en LocalStorage.");
}

if (categoriaSeleccionada) {
    // Enviar la categoría al servidor para obtener las preguntas
    fetch('../vistas/juego.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'categoria=' + encodeURIComponent(categoriaSeleccionada),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener datos del servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos recibidos:", data);

        // Asegurarse de que 'data' sea un arreglo y contenga elementos
        if (Array.isArray(data) && data.length > 0) {
            // Procesar las preguntas
            cargarPregunta(data);
        } else {
            console.error("No se recibieron preguntas válidas");
        }
    })
    .catch(error => {
        console.error("Error al hacer la solicitud:", error);
    });
} else {
    console.error('333No se encontró ninguna categoría en el LocalStorage.');
}


// Función para mezclar un array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 y i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
}

let preguntasCategoria = [];  // Variable global de preguntas

function cargarPregunta(preguntas) {
    preguntasCategoria = preguntas; // Actualizamos la variable global
    cargarSiguientePregunta(); // Cargamos la primera pregunta
}

// Función para habilitar los botones de respuestas
function habilitarBotonesRespuestas() {
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.remove("no-events"); // Eliminar clase que podría estar bloqueando la interacción
        opcion.addEventListener("click", agregarEventListenerBoton);  // Añadir evento de clic
    });
}


// Función para cargar la siguiente pregunta
function cargarSiguientePregunta() {
    if (numPreguntaActual >= 0 && numPreguntaActual < preguntasCategoria.length) {
        const pregunta = preguntasCategoria[numPreguntaActual];
        const numPregunta = document.querySelector("#num-pregunta");
        numPregunta.textContent = numPreguntaActual + 1;
        document.querySelector("#txt-pregunta").textContent = pregunta.pregunta;

        // Crear un array con todas las opciones de respuesta
        const opciones = [
            pregunta.opcion_correcta,
            pregunta.opcion2,
            pregunta.opcion3,
            pregunta.opcion4
        ];

        // Mezclar las opciones de respuesta
        const opcionesMezcladas = shuffleArray(opciones);  // Utilizamos la función shuffleArray que ya tienes

        // Asignar las opciones mezcladas a los elementos del HTML
        document.querySelector("#a").textContent = opcionesMezcladas[0];
        document.querySelector("#b").textContent = opcionesMezcladas[1];
        document.querySelector("#c").textContent = opcionesMezcladas[2];
        document.querySelector("#d").textContent = opcionesMezcladas[3];

        habilitarBotonesRespuestas();  // Habilitar botones para poder seleccionar las opciones

        // Desactivar el botón "Siguiente" cuando se carga una nueva pregunta
        const btnSiguiente = document.getElementById("siguiente");
        if (btnSiguiente) {
            btnSiguiente.disabled = true;  // Lo deshabilitamos hasta que el usuario responda
        }

    } else {
        console.error("Índice de pregunta fuera de rango:", numPreguntaActual);
    }
}

// Función de mezcla de array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 y i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
    return array;
}

// Función para manejar la acción de "Siguiente"
function siguientePregunta() {
    if (numPreguntaActual < preguntasCategoria.length - 1) {
        numPreguntaActual++;  // Aumentamos el índice para la siguiente pregunta
        cargarSiguientePregunta();  // Cargamos la siguiente pregunta
    } else {
        finalizarQuiz();  // Si llegamos al final, finalizamos el quiz
    }
}

// Función para manejar las respuestas del usuario
function agregarEventListenerBoton(event) {
    const respuestaSeleccionada = event.target.textContent;
    console.log("Respuesta seleccionada:", respuestaSeleccionada);

    if (preguntasCategoria[numPreguntaActual]) { // Verificamos que la pregunta actual existe
        const preguntaActual = preguntasCategoria[numPreguntaActual];
        if (respuestaSeleccionada === preguntaActual.opcion_correcta) {
            console.log("Respuesta correcta");
            puntajePartida++;
            txtPuntaje.innerHTML = puntajePartida; // Actualizar puntaje

            // Agregar clase para respuesta correcta y animación
            event.target.classList.add("correcta");
        } else {
            console.log("Respuesta incorrecta");

            // Agregar clase para respuesta incorrecta y animación
            event.target.classList.add("incorrecta");
        }
    } else {
        console.error("La pregunta actual no está disponible.");
    }

    // Deshabilitar opciones después de seleccionar una respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events"); // Deshabilitar las demás opciones
    });

    // Desactivar el botón "Siguiente" cuando se carga una nueva pregunta
    const btnSiguiente = document.getElementById("siguiente");
    if (btnSiguiente) {
        btnSiguiente.disabled = false;  // Lo deshabilitamos hasta que el usuario responda
    }

    // Aplicar la animación
    event.target.classList.add("efecto"); // Agregar la animación de zoom
}


// Función que se llama al finalizar el quiz
function finalizarQuiz() {
    // Actualizar el puntaje
    localStorage.setItem("puntaje-partida", puntajePartida);

    // Establecer un indicador para verificar el acceso a final.php
    localStorage.setItem("acceso-final", "permitido");

    // Guardamos las respuestas correctas y totales
    const correctas = puntajePartida; // Cada pregunta correcta otorga 1 puntos
    const totalPreguntas = 10; // Número total de preguntas en el quiz

    // Redirigir a la página de resultados
    location.href = "final.php";
}



// Función para manejar la acción al presionar el botón "Siguiente"
document.getElementById("siguiente").addEventListener("click", function() {
    // Eliminar las clases de todas las opciones
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.remove("correcta", "incorrecta", "efecto", "no-events"); // Quitar las clases de respuesta y animación
    });

    // Habilitar todas las opciones nuevamente (si es necesario)
    botonesRespuesta.forEach(opcion => {
        opcion.classList.remove("no-events"); // Asegurarse de que las opciones se puedan seleccionar nuevamente
    });


    // Avanzar a la siguiente pregunta (esto dependerá de cómo manejes las preguntas)
    siguientePregunta();
});

