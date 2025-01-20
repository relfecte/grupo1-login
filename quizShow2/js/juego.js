const txtPuntaje = document.querySelector("#puntos");
// Inicializamos el índice de la pregunta actual
let numPreguntaActual = 0; 

// Recuperamos el puntaje de la partida actual
let puntajePartida = 0;
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
    console.error('No se encontró ninguna categoría en el LocalStorage.');
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

// Función para cargar la siguiente pregunta según el índice
function cargarSiguientePregunta() {
    if (numPreguntaActual >= 0 && numPreguntaActual < preguntasCategoria.length) {
        const pregunta = preguntasCategoria[numPreguntaActual];
        const numPregunta = document.querySelector("#num-pregunta");
        numPregunta.textContent = numPreguntaActual+1;
        document.querySelector("#txt-pregunta").textContent = pregunta.pregunta;
        document.querySelector("#a").textContent = pregunta.opcion_correcta;
        document.querySelector("#b").textContent = pregunta.opcion2;
        document.querySelector("#c").textContent = pregunta.opcion3;
        document.querySelector("#d").textContent = pregunta.opcion4;

        habilitarBotonesRespuestas();
    } else {
        console.error("Índice de pregunta fuera de rango:", numPreguntaActual);
    }
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
        } else {
            console.log("Respuesta incorrecta");
        }
    } else {
        console.error("La pregunta actual no está disponible.");
    }

    // Deshabilitar opciones después de seleccionar una respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });

    // Habilitar botón "Siguiente"
    const btnSiguiente = document.getElementById("btn-siguiente");
    if (btnSiguiente) {
        btnSiguiente.disabled = false;
    }
}

// Función que se llama al finalizar el quiz
function finalizarQuiz() {
    // Actualizar el puntaje
    localStorage.setItem("puntaje-partida", puntajePartida);

    // Guardamos las respuestas correctas y totales
    const correctas = puntajePartida; // Cada pregunta correcta otorga 1 puntos
    const totalPreguntas = 10; // Número total de preguntas en el quiz

    // Redirigir a la página de resultados
    location.href = "final.php";
}

// Seleccionamos el botón de "Siguiente" y manejamos el evento de clic
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", siguientePregunta);
