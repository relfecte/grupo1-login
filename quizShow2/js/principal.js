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
            location.href = "./vistas/juego.php"; 
        });
    });
}

// Llamamos a la función para agregar los eventos a las categorías
agregarEventListenerOpciones();

//NO TENEMOS QUE GUARDAR LAS CATEGORIA YA JUGADAS SOLO LA ACTUAL