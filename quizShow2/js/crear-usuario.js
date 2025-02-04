document.querySelector('.formulario').addEventListener('submit', function(e) {
    // Validación de Nombre
    let nombre = document.querySelector('input[name="nombre"]').value;
    if (!/^[a-zA-Z]{3,20}$/.test(nombre)) {
        alert("El nombre debe contener solo letras (mayúsculas o minúsculas) y debe tener entre 3 y 20 caracteres.");
        e.preventDefault();
        return;
    }

    // Validación de Apellido
    let apellido = document.querySelector('input[name="apellido"]').value;
    if (!/^[a-zA-Z]{3,20}$/.test(apellido)) {
        alert("El apellido debe contener solo letras (mayúsculas o minúsculas) y debe tener entre 3 y 20 caracteres.");
        e.preventDefault();
        return;
    }

    // Validación de Usuario
    let usuario = document.querySelector('input[name="usuario"]').value;
    if (!/^[a-zA-Z0-9]{3,20}$/.test(usuario)) {
        alert("El usuario debe contener entre 3 y 20 caracteres alfanuméricos.");
        e.preventDefault();
        return;
    }

    // Validación de Email
    let email = document.querySelector('input[name="email"]').value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Ingresa un email válido.");
        e.preventDefault();
        return;
    }

    // Validación de Contraseña
    let clave = document.querySelector('input[name="clave"]').value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(clave)) {
        alert("La clave debe tener al menos 8 caracteres, incluir al menos una mayuscula, una minuscula, un numero y un simbolo.");
        e.preventDefault();
        return;
    }
});
