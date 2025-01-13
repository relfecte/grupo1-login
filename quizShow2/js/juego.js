

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
let indicePregunta = 0;  // Índice de la pregunta actual

// Función para cargar la primera pregunta
/*function cargarPregunta(preguntas) {
    console.log(preguntas[0]);  // Muestra la primera pregunta como ejemplo
    document.getElementById("txt-pregunta").textContent = preguntas[0].pregunta;
    // Cargar las opciones de respuesta
    document.getElementById("a").textContent = preguntas[0].opcion2;
    document.getElementById("b").textContent = preguntas[0].opcion3;
    document.getElementById("c").textContent = preguntas[0].opcion4;
    document.getElementById("d").textContent = preguntas[0].opcion_correcta;

    // Asegúrate de que los botones están habilitados para recibir clics
    habilitarBotonesRespuestas();
}*/
function cargarPregunta(preguntas) {
    preguntasCategoria = preguntas; // Actualizamos la variable global
    indicePregunta = 0; // Reiniciamos el índice al comienzo
    cargarSiguientePregunta(); // Cargamos la primera pregunta
}

// Función para habilitar los botones de respuestas (asegúrate de que los botones no estén deshabilitados)
function habilitarBotonesRespuestas() {
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.remove("no-events"); // Eliminar clase que podría estar bloqueando la interacción
        opcion.addEventListener("click", agregarEventListenerBoton);  // Añadir evento de clic
    });
}

// Función para cargar la siguiente pregunta según el índice
/*function cargarSiguientePregunta() {
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    // Asegúrate de que los elementos existan
    if (!numPregunta || !txtPregunta || !opcionA || !opcionB || !opcionC || !opcionD) {
        console.error("Uno o más elementos del DOM no fueron encontrados.");
        return;
    }

    // Verifica que el índice esté dentro del rango de preguntas
    if (indicePregunta >= 0 && indicePregunta < preguntasCategoria.length) {
        // Actualizamos los contenidos de la pregunta y las opciones
        numPregunta.innerHTML = indicePregunta + 1;  // Número de la pregunta
        txtPregunta.innerHTML = preguntasCategoria[indicePregunta].pregunta;  // Título de la pregunta
        opcionA.innerHTML = preguntasCategoria[indicePregunta].opcion_correcta; // Opción correcta
        opcionB.innerHTML = preguntasCategoria[indicePregunta].opcion2;
        opcionC.innerHTML = preguntasCategoria[indicePregunta].opcion3;
        opcionD.innerHTML = preguntasCategoria[indicePregunta].opcion4;

        // Reiniciar los eventos para las opciones de respuesta (por si están bloqueados o deshabilitados)
        habilitarBotonesRespuestas();
    } else {
        console.error("Índice de pregunta fuera de rango");
    }

    // Eliminar clase de efecto si existe
    const txtPuntaje = document.querySelector("#txt-puntaje");
    if (txtPuntaje) {
        txtPuntaje.classList.remove("efecto");
    }
}*/
function cargarSiguientePregunta() {
    if (indicePregunta >= 0 && indicePregunta < preguntasCategoria.length) {
        const pregunta = preguntasCategoria[indicePregunta];
        document.querySelector("#txt-pregunta").textContent = pregunta.pregunta;
        document.querySelector("#a").textContent = pregunta.opcion_correcta;
        document.querySelector("#b").textContent = pregunta.opcion2;
        document.querySelector("#c").textContent = pregunta.opcion3;
        document.querySelector("#d").textContent = pregunta.opcion4;

        habilitarBotonesRespuestas();
    } else {
        console.error("Índice de pregunta fuera de rango:", indicePregunta);
    }
}


// Función para manejar la acción de "Siguiente" (puedes llamarla desde el evento de click)
function siguientePregunta() {
    if (indicePregunta < preguntasCategoria.length - 1) {
        indicePregunta++;  // Aumentar el índice para la siguiente pregunta
        cargarSiguientePregunta();  // Cargar la siguiente pregunta
    } else {
        console.log("Has llegado al final del quiz.");
    }
}


// Función para manejar las respuestas del usuario
/*function agregarEventListenerBoton(event) {
    const respuestaSeleccionada = event.target.textContent;
    console.log("Respuesta seleccionada:", respuestaSeleccionada);

    // Puedes comparar la respuesta seleccionada con la opción correcta aquí
    // y aplicar lógica para verificar si la respuesta es correcta
    if (respuestaSeleccionada === preguntasCategoria[indicePregunta].opcion_correcta) { //EERRROR!!!
        console.log("Respuesta correcta");
        // Lógica para manejar respuestas correctas
    } else {
        console.log("Respuesta incorrecta");
        // Lógica para manejar respuestas incorrectas
    }

    // Deshabilitar opciones tras una selección
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");  // Deshabilitar interacciones después de seleccionar una respuesta
    });

    // Habilitar el botón de "Siguiente" después de responder
    document.getElementById("btn-siguiente").disabled = false;  // Asegúrate de que el botón "Siguiente" esté habilitado
}*/
function agregarEventListenerBoton(event) {
    const respuestaSeleccionada = event.target.textContent;
    console.log("Respuesta seleccionada:", respuestaSeleccionada);

    if (preguntasCategoria[indicePregunta]) { // Verificamos que la pregunta actual existe
        const preguntaActual = preguntasCategoria[indicePregunta];
        if (respuestaSeleccionada === preguntaActual.opcion_correcta) {
            console.log("Respuesta correcta");
            // Incrementar puntaje
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

    // Asignar el evento de clic al botón de "Siguiente"
    //document.getElementById("btn-siguiente").addEventListener("click", siguientePregunta); //ERROR!!!!
    // Inicializa la primera pregunta al cargar la página
    //cargarPregunta(preguntasCategoria);

    // Función que se llama al finalizar el quiz
    function finalizarQuiz() {
    // Actualizar el puntaje total de forma única al finalizar
    const puntajeTotalPrevio = parseInt(localStorage.getItem("puntaje-total")) || 0;
    const puntajeTotalActualizado = puntajeTotalPrevio + puntajePartida;
    localStorage.setItem("puntaje-total", puntajeTotalActualizado);

    // Ahora actualizamos el puntaje específico de la categoría
    const categoriaActual = localStorage.getItem("categoria-actual");

    // Guardamos las respuestas correctas y totales
    const correctas = puntajePartida / 100; // Cada pregunta correcta otorga 100 puntos
    const totalPreguntas = 10; // Número total de preguntas en el quiz

    const correctasPrevias = parseInt(localStorage.getItem(`correctas-${categoriaActual}`)) || 0;
    const totalesPrevias = parseInt(localStorage.getItem(`totales-${categoriaActual}`)) || 0;

    localStorage.setItem(`correctas-${categoriaActual}`, correctasPrevias + correctas);
    localStorage.setItem(`totales-${categoriaActual}`, totalesPrevias + totalPreguntas);

    // Redirigir a la página de resultados
    location.href = "final.php";
}


// Seleccionamos el botón de "Siguiente" y manejamos el evento de clic
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++; 
    if (numPreguntaActual <= 9) { // Ahora el límite es 9 (10 preguntas)
        cargarSiguientePregunta(numPreguntaActual); 
    } else {
        finalizarQuiz(); 
    }
});

