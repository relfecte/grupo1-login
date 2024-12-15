 // Recuperamos el puntaje general desde Local Storage
    const puntajeGeneral = parseInt(localStorage.getItem("puntaje-total")) || 0;
    
    // Puntajes máximos (puedes ajustarlo si cambia dependiendo de la categoría o el quiz)
    const puntajeMaximo = 500; // Suponiendo un puntaje máximo de 500 para todos los quizzes

    // Calculamos el porcentaje general de acierto
    const porcentajeGeneral = (puntajeGeneral / puntajeMaximo) * 100;

    // Mostramos el porcentaje general en el DOM
    document.getElementById("puntaje-general").textContent = `${porcentajeGeneral.toFixed(2)}%`;

    // Recuperamos los puntajes de las categorías específicas desde Local Storage
    const puntajeCulturaGeneral = parseInt(localStorage.getItem("puntaje-cultura-general")) || 0;
    const puntajeDeportes = parseInt(localStorage.getItem("puntaje-deportes")) || 0;
    const puntajeCiencias = parseInt(localStorage.getItem("puntaje-ciencias")) || 0;

    // Puntajes máximos por categoría (puedes ajustarlos si cambian según las categorías)
    const maxCulturaGeneral = 100;  // Suponiendo que el puntaje máximo para Cultura General es 100
    const maxDeportes = 100;        // Suponiendo que el puntaje máximo para Deportes es 100
    const maxCiencias = 100;        // Suponiendo que el puntaje máximo para Ciencias es 100

    // Calculamos los porcentajes de acierto por categoría
    const porcentajeCulturaGeneral = (puntajeCulturaGeneral / maxCulturaGeneral) * 100;
    const porcentajeDeportes = (puntajeDeportes / maxDeportes) * 100;
    const porcentajeCiencias = (puntajeCiencias / maxCiencias) * 100;

    // Mostramos los porcentajes por categoría en el DOM
    document.getElementById("puntaje-cultura-general").textContent = `${porcentajeCulturaGeneral.toFixed(2)}%`;
    document.getElementById("puntaje-deportes").textContent = `${porcentajeDeportes.toFixed(2)}%`;
    document.getElementById("puntaje-ciencias").textContent = `${porcentajeCiencias.toFixed(2)}%`;
};

