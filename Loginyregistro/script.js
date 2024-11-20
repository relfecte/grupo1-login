// Selecciona los elementos del DOM
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const closeLogin = document.getElementById("closeLogin");
    const closeRegister = document.getElementById("closeRegister");

    // Función para mostrar un modal
    const showModal = (modal) => {
        modal.style.display = "flex";
    };

    // Función para cerrar un modal
    const closeModal = (modal) => {
        modal.style.display = "none";
    };

    // Mostrar modal de login
    loginBtn.addEventListener("click", () => {
        showModal(loginModal);
    });

    // Mostrar modal de registro
    registerBtn.addEventListener("click", () => {
        showModal(registerModal);
    });

    // Cerrar modal de login
    closeLogin.addEventListener("click", () => {
        closeModal(loginModal);
    });

    // Cerrar modal de registro
    closeRegister.addEventListener("click", () => {
        closeModal(registerModal);
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            closeModal(loginModal);
        }
        if (event.target === registerModal) {
            closeModal(registerModal);
        }
    });

    // Validación en el formulario de registro
    const registerForm = registerModal.querySelector("form");
    let registeredUser = {}; // Objeto para almacenar los datos del usuario registrado

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombreInput = registerForm.querySelector("input[name='nombre']");
        const apellidoInput = registerForm.querySelector("input[name='apellido']");
        const usuarioInput = registerForm.querySelector("input[name='usuario']");
        const emailInput = registerForm.querySelector("input[name='email']");
        const claveInput = registerForm.querySelector("input[name='clave']");
        const repetirClaveInput = registerForm.querySelector("input[name='repetir_clave']");

        let valid = true;
        let mensajes = [];

        // Verificar si algún campo está vacío
        [nombreInput, apellidoInput, usuarioInput, emailInput, claveInput, repetirClaveInput].forEach((input) => {
            if (input.value.trim() === "") {
                mensajes.push(`El campo ${input.name} no puede estar vacío.`);
                valid = false;
            }
        });

        // Verificar que el nombre y el apellido solo contengan letras
        const soloLetrasRegex = /^[a-zA-Z]+$/;
        if (!soloLetrasRegex.test(nombreInput.value)) {
            mensajes.push("El nombre solo debe contener letras.");
            valid = false;
        }
        if (!soloLetrasRegex.test(apellidoInput.value)) {
            mensajes.push("El apellido solo debe contener letras.");
            valid = false;
        }

        // Verificar que el usuario tenga al menos 8 caracteres, con mayúsculas, minúsculas y un número
        const usuarioRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!usuarioRegex.test(usuarioInput.value)) {
            mensajes.push("El usuario debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.");
            valid = false;
        }

        // Verificar el formato del email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value)) {
            mensajes.push("El formato del email no es válido.");
            valid = false;
        }

        // Verificar la contraseña (mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, 1 símbolo)
        const claveRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!claveRegex.test(claveInput.value)) {
            mensajes.push("La contraseña debe tener al menos 8 caracteres, incluyendo 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.");
            valid = false;
        }

        // Verificar que la contraseña y la repetición coincidan
        if (claveInput.value !== repetirClaveInput.value) {
            mensajes.push("Las contraseñas no coinciden.");
            valid = false;
        }

        // Mostrar mensajes de error o guardar los datos si todo está bien
        if (!valid) {
            alert(mensajes.join("\n"));
        } else {
            // Guardar datos de registro en el objeto
            registeredUser = {
                usuario: usuarioInput.value,
                clave: claveInput.value,
            };
            alert("Registro exitoso.");
            closeModal(registerModal);
            showModal(loginModal);
        }
    });

    // Validación del formulario de login
    const loginForm = loginModal.querySelector("form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuarioLoginInput = loginForm.querySelector("input[name='usuario']");
        const claveLoginInput = loginForm.querySelector("input[name='clave']");

        // Verificar si los datos de login coinciden con los datos registrados
        if (
            usuarioLoginInput.value === registeredUser.usuario &&
            claveLoginInput.value === registeredUser.clave
        ) {
            alert("Inicio de sesión exitoso.");
            window.location.href = "./pagina_determinada.html"; // Cambia la ruta si es necesario
        } else {
            alert("Usuario o clave incorrectos.");
        }
    });
});







