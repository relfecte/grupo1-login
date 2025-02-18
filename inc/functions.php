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


/*function redirigirConMensaje($mensaje, $url = null) {
    // Si no se pasa una URL, usamos la URL actual
    if ($url === null) {
        $url = $_SERVER['REQUEST_URI'];
    }

    echo "
        <script>
            alert('$mensaje');
            window.location = '$url';
        </script>";
    exit();
}*/
function redirigirConMensaje($mensaje, $url_destino = '/../index.php') {
    // Codificar el mensaje para evitar problemas con caracteres especiales
    $mensaje_codificado = urlencode($mensaje);
    
    // Redirigir a la página de mensaje con los parámetros
    header("Location: ../../vistas/mensaje.php?mensaje=$mensaje_codificado&url=$url_destino");
    exit();
}

// Función para cerrar sesión
function logout($con) {
    //limpier bufer 
    ob_clean();

    // Destruir la sesión
    session_destroy();

    // Si tienes una conexión abierta, ciérrala
    cerrar_conexion($con);

    // Redirigir al usuario a la página principal
    header("Location: ./index.php");
    exit();
}
// Función para cerrar sesión
function logout2($con) {
    //limpier bufer 
    ob_clean();

    // Destruir la sesión
    session_destroy();

    // Si tienes una conexión abierta, ciérrala
    cerrar_conexion($con);

    // Redirigir al usuario a la página principal
    header("Location: ../index.php");
    exit();
}


// Función para redirigir según el rol del usuario
function redirigirSegunRol() {
    if (isset($_SESSION['usuario_admin'])) {
        if ($_SESSION['usuario_admin'] == 1) {
            header("Location: admin.php");
        } else {
            header("Location: bienvenida.php");
        }
        exit();
    }
}

// Verificar acceso solo para administradores
function verificarAccesoAdmin() {
    if (!isset($_SESSION['usuario_admin']) || $_SESSION['usuario_admin'] != 1) {
        header("Location: index.php");
        exit();
    }
}

// Verificar acceso solo para usuarios normales
function verificarAccesoUsuario() {
    if (!isset($_SESSION['usuario_admin']) || $_SESSION['usuario_admin'] != 0) {
        header("Location: index.php");
        exit();
    }
}

// Verificar acceso solo para usuarios normales
function verificarAccesoUsuario2() {
    if (!isset($_SESSION['usuario_admin']) || $_SESSION['usuario_admin'] != 0) {
        header("Location: ../index.php");
        exit();
    }
}

//SE USA?
// Función para validar datos antes de insertarlos o actualizarlos
function validarDatosUsuario($nombre, $apellido, $usuario, $email) {
    // Aquí puedes agregar validación, como verificar que los campos no estén vacíos, que el email sea válido, etc.
    if (empty($nombre) || empty($apellido) || empty($usuario) || empty($email)) {
        return false;
    }
    // Validación de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    return true;
}


?>