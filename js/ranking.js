window.onload = function() {
    centrarUsuario();
};

// Centrar al usuario en el contenedor
function centrarUsuario() {
    const currentUser = document.querySelector('.current-user');
    if (currentUser) {
        const rankingContainer = document.querySelector('.ranking-container');
        const userPosition = currentUser.offsetTop;
        const containerHeight = rankingContainer.clientHeight;

        // Desplazar el contenedor para centrar al usuario
        rankingContainer.scrollTop = userPosition - (containerHeight / 2) + (currentUser.clientHeight / 2);
    }
}

