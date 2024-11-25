// Tomamos los elementos HTML que vamos a manipular
const txtPuntaje = document.querySelector("#puntos"); // Elemento donde se mostrará el puntaje
const nombre = document.querySelector("#nombre"); // Elemento para mostrar el nombre del jugador en el encabezado
const nombreJugador = document.querySelector("#nombre-jugador"); // Elemento para mostrar el nombre del jugador en otro lugar de la página

// Configuramos un nombre inicial en el Local Storage y lo mostramos en la interfaz
localStorage.setItem("nombre", "Oscar"); // Guarda "Oscar" como el nombre del jugador
nombre.innerHTML = localStorage.getItem("nombre"); // Actualiza el contenido del elemento con el nombre del jugador
nombreJugador.innerHTML = localStorage.getItem("nombre"); // Actualiza otro elemento con el mismo nombre

// Recuperamos el puntaje total si ya existe en Local Storage, o lo inicializamos en 0
let puntajeTotal = 0; // Variable para almacenar el puntaje acumulado
if (!localStorage.getItem("puntaje-total")) { // Verifica si no existe el puntaje en el Local Storage
    puntajeTotal = 0; // Si no existe, inicializa el puntaje en 0
    txtPuntaje.innerHTML = puntajeTotal; // Muestra el puntaje inicial en el HTML
} else { 
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total")); // Si existe, lo convierte a número y lo asigna a la variable
    txtPuntaje.innerHTML = puntajeTotal; // Muestra el puntaje recuperado en el HTML
}

// Necesitamos una estructura para guardar las categorías ya jugadas
let categoriasJugadas; // Arreglo que almacenará las categorías ya jugadas

// Verificamos si ya hay categorías almacenadas en Local Storage
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas")); // Recupera y convierte a objeto/array los datos del Local Storage
if (categoriasJugadasLS) {
    categoriasJugadas = categoriasJugadasLS; // Si existen datos, los asignamos al arreglo
} else {
    categoriasJugadas = []; // Si no existen datos, inicializamos un arreglo vacío
}
console.log(categoriasJugadas); // Mostramos las categorías jugadas en la consola para depuración

// Función para agregar un event listener a todas las opciones de categoría
function agregarEventListenerOpciones() {
    const categorias = document.querySelectorAll(".categoria"); // Seleccionamos todas las categorías en el DOM
    categorias.forEach(categoria => { // Iteramos sobre cada categoría
        categoria.addEventListener("click", (e) => { // Agregamos un evento click a cada categoría
            console.log(e.currentTarget.id); // Mostramos en consola el ID de la categoría seleccionada
            // Almacenamos la categoría seleccionada en el Local Storage
            localStorage.setItem("categoria-actual", e.currentTarget.id); 
            // Agregamos la categoría seleccionada al arreglo de categorías jugadas
            categoriasJugadas.push(e.currentTarget.id); 
            // Guardamos el arreglo actualizado en el Local Storage
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas)); 
            console.log(categoriasJugadas); // Mostramos el estado actualizado del arreglo en la consola
            // Redirigimos al usuario a la página del juego
            location.href = "juego.html"; 
        });
    });
}

// Llamamos a la función para agregar los eventos a las categorías
agregarEventListenerOpciones();
