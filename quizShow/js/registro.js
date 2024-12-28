window.onload = () => {
    // Recuperamos el puntaje general desde Local Storage
    const puntajeGeneral = parseInt(localStorage.getItem("puntaje-total")) || 0;

    // Puntajes máximos (ajustados a un máximo correcto para cada categoría)
    const puntajeMaximoGeneral = 500; // Suponiendo un puntaje máximo de 500 para todos los quizzes

    // Calculamos el porcentaje general de acierto, asegurándonos que no exceda el 100%
    const porcentajeGeneral = Math.min((puntajeGeneral / puntajeMaximoGeneral) * 100, 100);

    // Mostramos el porcentaje general en el DOM
    document.getElementById("puntaje-general").textContent = `${porcentajeGeneral.toFixed(2)}%`;

    // Función para calcular el porcentaje por categoría
    const calcularPorcentaje = (categoria) => {
        const correctas = parseInt(localStorage.getItem(`correctas-${categoria}`)) || 0;
        const totales = parseInt(localStorage.getItem(`totales-${categoria}`)) || 0;
        return totales > 0 ? (correctas / totales) * 100 : 0;
    };

    // Inicializamos variables para almacenar los porcentajes
    const categorias = [
        { name: "general", label: "Cultura General", id: "puntaje-cultura-general" },
        { name: "deportes", label: "Deportes", id: "puntaje-deportes" },
        { name: "historia", label: "Historia", id: "puntaje-historia" },
        { name: "musica", label: "Música", id: "puntaje-musica" },
        { name: "peliculas", label: "Películas", id: "puntaje-peliculas" },
        { name: "programacion", label: "Programación", id: "puntaje-programacion" },
        { name: "juegos", label: "Videojuegos", id: "puntaje-videojuegos" },
        { name: "geografia", label: "Geografía", id: "puntaje-geografia" }
    ];

    // Calculamos los porcentajes de cada categoría y los almacenamos en un array
    let porcentajes = categorias.map(categoria => {
        const porcentaje = calcularPorcentaje(categoria.name);
        return { ...categoria, porcentaje }; // Incluimos el porcentaje calculado
    });

    // Ordenamos las categorías de mayor a menor porcentaje
    porcentajes.sort((a, b) => b.porcentaje - a.porcentaje);

    // Ahora, vamos a actualizar el DOM con las categorías ordenadas
    const categoriasContainer = document.getElementById("categorias-container");
    categoriasContainer.innerHTML = ""; // Limpiamos el contenedor antes de añadir los elementos ordenados

    // Creamos los elementos HTML dinámicamente para mostrar las categorías
    porcentajes.forEach(categoria => {
        const categoriaElement = document.createElement("div");
        categoriaElement.classList.add("score-category");
        categoriaElement.innerHTML = `
            <span>${categoria.label}</span>
            <span id="${categoria.id}" class="percentage">${categoria.porcentaje.toFixed(2)}%</span>
        `;
        categoriasContainer.appendChild(categoriaElement);
    });

    // Calculamos el porcentaje general como el promedio de los porcentajes de las categorías
    const sumaPorcentajes = porcentajes.reduce((suma, categoria) => suma + categoria.porcentaje, 0);
    const categoriasConDatos = porcentajes.filter(categoria => categoria.porcentaje > 0).length;

    const porcentajeGeneralFinal = categoriasConDatos > 0 ? (sumaPorcentajes / categoriasConDatos) : 0;

    // Mostramos el porcentaje general calculado en el DOM
    document.getElementById("puntaje-general").textContent = `${porcentajeGeneralFinal.toFixed(2)}%`;
};


