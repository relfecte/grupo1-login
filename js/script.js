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
});
