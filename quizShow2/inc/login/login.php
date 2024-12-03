<?php
require_once '../database.php';
require_once '../functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $conexion = $con; // Usar conexión global

    // Obtener datos del formulario
    $email = $_POST['email'];
    $clave = $_POST['clave'];

    // Validaciones
    validarPatrones("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email, "Ingresa un email válido.");
    validarPatrones("/^.{6,}$/", $clave, "La clave debe tener al menos 6 caracteres.");

    // Verificar usuario
    $usuario = iniciarSesion($conexion, $email, $clave);
    if ($usuario) {
        session_start();
        $_SESSION['usuario_id'] = $usuario['usuario_id'];
        $_SESSION['usuario_nombre'] = $usuario['usuario_nombre'];
        $_SESSION['usuario_admin'] = $usuario['usuario_admin'];
        if($_SESSION['usuario_admin'] == 1){
            header("Location: ../../admin.php");
            exit();
        }else {
            header("Location: ../../bienvenida.php");
            exit();
        }
    } else {
        redirigirConMensaje("Credenciales incorrectas.", '../../index.php');
    }
}
?>
