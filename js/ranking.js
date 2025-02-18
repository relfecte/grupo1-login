window.onload = function () {
    setTimeout(centrarUsuario, 100); // Pequeño delay para asegurar que el contenido cargue bien
};

function centrarUsuario() {
    const currentUser = document.querySelector(".current-user");
    
    if (currentUser) {
        currentUser.scrollIntoView({
            block: "center", // Centra el elemento en el scroll
            behavior: "smooth" // Hace que el desplazamiento sea fluido
        });

        console.log("Centrando usuario en el ranking...");
    }
}
