<?php

// Validaciones de valores con patrones
function validarPatrones($patron, $valor, $mensaje) {
    if (!preg_match($patron, $valor)) {
        echo "
            <script>
                alert('$mensaje');
            </script>";
        exit();
    }
}


function redirigirConMensaje($mensaje, $url) {
    echo "
        <script>
            alert('$mensaje');
            window.location = '$url';
        </script>";
    exit();
}

// Función para cerrar sesión
function logout($con) {
    
    // Destruir la sesión
    session_destroy();

    // Si tienes una conexión abierta, ciérrala
    cerrar_conexion($con);

    // Redirigir al usuario a la página principal
    header("Location: ./index.php");
    exit();
}
?>