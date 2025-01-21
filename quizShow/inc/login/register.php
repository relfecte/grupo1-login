<?php
require_once '../inc/database.php';
require_once '../inc/functions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $conexion = $con; // Usar conexión global

    // Obtener datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $clave = $_POST['clave'];

    // Validaciones
    validarPatrones("/^[a-zA-Z]{3,40}$/", $nombre, "El nombre debe contener entre 3 y 40 letras.");
    validarPatrones("/^[a-zA-Z]{3,40}$/", $apellido, "El apellido debe contener entre 3 y 40 letras.");
    validarPatrones("/^[a-zA-Z0-9]{3,20}$/", $usuario, "El usuario debe contener entre 3 y 20 caracteres alfanuméricos.");
    validarPatrones("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email, "Ingresa un email válido.");
    validarPatrones("/^.{6,}$/", $clave, "La clave debe tener al menos 6 caracteres.");

    // Verificar duplicados
    if (verificarDuplicado($conexion, 'usuario', 'usuario_email', $email)) {
        redirigirConMensaje("Este correo ya está registrado.", '../../index.php');
    }
    if (verificarDuplicado($conexion, 'usuario', 'usuario_usuario', $usuario)) {
        redirigirConMensaje("Este usuario ya está registrado.", '../../index.php');
    }

    // Registrar usuario
    if (registrarUsuario($conexion, $nombre, $apellido, $usuario, $clave, $email)) {
        redirigirConMensaje("Usuario registrado correctamente.", '../../index.php');
    } else {
        redirigirConMensaje("Error al registrar el usuario. Inténtalo de nuevo.", '../../index.php');
    }
}
?>
