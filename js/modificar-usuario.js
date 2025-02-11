document.querySelector('.formulario').addEventListener('submit', function(e) {
    // Validación de Nombre
    let nombre = document.querySelector('input[name="nombre"]').value.trim();
    if (!/^[a-zA-Z]{1,20}$/.test(nombre)) {
        alert("El nombre debe contener solo letras y tener como maximo 20 caracteres.");
        e.preventDefault();
        return;
    }

    // Validación de Apellido
    let apellido = document.querySelector('input[name="apellido"]').value.trim();
    if (!/^[a-zA-Z]{1,20}$/.test(apellido)) {
        alert("El apellido debe contener solo letras y tener como maximo 20 caracteres.");
        e.preventDefault();
        return;
    }

    // Validación de Usuario
    let usuario = document.querySelector('input[name="usuario"]').value.trim();
    if (!/^[a-zA-Z0-9]{1,20}$/.test(usuario)) {
        alert("El usuario debe contener entre 1 y 20 caracteres alfanumericos.");
        e.preventDefault();
        return;
    }

    // Validación de Email
    let email = document.querySelector('input[name="email"]').value.trim();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email valido.");
        e.preventDefault();
        return;
    }

    // Validación de Contraseña
    let clave = document.querySelector('input[name="clave"]').value.trim();
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(clave)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir al menos una mayuscula, una minuscula, un numero y un simbolo.");
        e.preventDefault();
        return;
    }
