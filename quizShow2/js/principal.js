
// Función para agregar un event listener a todas las opciones de categoría
function agregarEventListenerOpciones() {
    const categorias = document.querySelectorAll(".categoria"); // Seleccionamos todas las categorías en el DOM
    categorias.forEach(categoria => { // Iteramos sobre cada categoría
        categoria.addEventListener("click", (e) => { // Agregamos un evento click a cada categoría
            console.log(e.currentTarget.id); // Mostramos en consola el ID de la categoría seleccionada
            // Almacenamos la categoría seleccionada en el Local Storage
            localStorage.setItem("categoria-actual", e.currentTarget.id); 
            // Agregamos la categoría seleccionada al arreglo de categorías jugadas

            // Redirigimos al usuario a la página del juego
            location.href = "./vistas/juego.php"; 
        });
    });
}

// Llamamos a la función para agregar los eventos a las categorías
agregarEventListenerOpciones();
