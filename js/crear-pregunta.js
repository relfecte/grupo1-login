// Selección del formulario y sus elementos
const form = document.querySelector('.formulario');
const categoriaInput = document.getElementById('categoria');

// Lista de categorías permitidas
const categoriasPermitidas = ['general', 'musica', 'deportes', 'peliculas', 'programacion', 'videojuegos', 'geografia', 'historia'];

// Evento submit del formulario
form.addEventListener('submit', (event) => {
    // Validar si algún campo está vacío
    const inputs = form.querySelectorAll('input');
    let camposVacios = false;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            camposVacios = true;
        }
    });

    // Validar si la categoría es válida
    const categoriaValor = categoriaInput.value.trim().toLowerCase();
    const categoriaInvalida = !categoriasPermitidas.includes(categoriaValor);

    if (camposVacios) {
        alert('Por favor, completa todos los campos del formulario.');
        event.preventDefault(); // Evitar el envío del formulario
        return;
    }

    if (categoriaInvalida) {
        alert(`La categoria debe ser una de las siguientes: ${categoriasPermitidas.join(', ')}`);
        event.preventDefault(); // Evitar el envío del formulario
        return;
    }
});
