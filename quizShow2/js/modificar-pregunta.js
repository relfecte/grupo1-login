document.querySelector('.formulario').addEventListener('submit', function(e) {
    // Validación de Categoría
    let categoria = document.querySelector('input[name="categoria"]').value.trim();
    const categoriasPermitidas = ['general', 'deportes', 'musica', 'peliculas', 'programacion', 'videojuegos', 'geografia', 'historia'];
    if (!categoria || !categoriasPermitidas.includes(categoria)) {
        alert("La categoría debe ser una de las siguientes: general, deportes, música, películas, programación, videojuegos, geografía, historia.");
        e.preventDefault();
        return;
    }

    // Validación de Pregunta
    let pregunta = document.querySelector('textarea[name="pregunta"]').value.trim();
    if (!pregunta || pregunta.includes(' ')) {
        alert("La pregunta no puede contener espacios en blanco.");
        e.preventDefault();
        return;
    }

    // Validación de Opción Correcta
    let opcionCorrecta = document.querySelector('input[name="opcion_correcta"]').value.trim();
    if (!opcionCorrecta || opcionCorrecta.includes(' ')) {
        alert("La opción correcta no puede contener espacios en blanco.");
        e.preventDefault();
        return;
    }

    // Validación de Opción 2
    let opcion2 = document.querySelector('input[name="opcion2"]').value.trim();
    if (!opcion2 || opcion2.includes(' ')) {
        alert("La opción 2 no puede contener espacios en blanco.");
        e.preventDefault();
        return;
    }

    // Validación de Opción 3
    let opcion3 = document.querySelector('input[name="opcion3"]').value.trim();
    if (!opcion3 || opcion3.includes(' ')) {
        alert("La opción 3 no puede contener espacios en blanco.");
        e.preventDefault();
        return;
    }

    // Validación de Opción 4
    let opcion4 = document.querySelector('input[name="opcion4"]').value.trim();
    if (!opcion4 || opcion4.includes(' ')) {
        alert("La opción 4 no puede contener espacios en blanco.");
        e.preventDefault();
        return;
    }
});
