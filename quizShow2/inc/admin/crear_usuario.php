<?php
include_once '../database.php'; // Asegúrate de que el archivo de conexión esté incluido
include_once '../functions.php'; // Incluir las funciones de validación

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $clave = $_POST['clave'];
    $admin = $_POST['admin'];

    // Validaciones
    validarPatrones("/^[a-zA-Z]{3,40}$/", $nombre, "El nombre debe contener entre 3 y 40 letras.");
    validarPatrones("/^[a-zA-Z]{3,40}$/", $apellido, "El apellido debe contener entre 3 y 40 letras.");
    validarPatrones("/^[a-zA-Z0-9]{3,20}$/", $usuario, "El usuario debe contener entre 3 y 20 caracteres alfanuméricos.");
    validarPatrones("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email, "Ingresa un email válido.");
    validarPatrones("/^.{6,}$/", $clave, "La clave debe tener al menos 6 caracteres.");

    // Verificar duplicados de email y usuario
    if (verificarDuplicado($con, 'usuarios', 'usuario_email', $email)) {
        redirigirConMensaje("Este correo ya está registrado.");
        exit;
    }
    if (verificarDuplicado($con, 'usuarios', 'usuario_usuario', $usuario)) {
        redirigirConMensaje("Este usuario ya está registrado.");
        exit;
    }

    // crear usuario
    if (crearUsuario($con, $nombre, $apellido, $usuario, $clave, $email, $admin)) {
        redirigirConMensaje("Usuario registrado correctamente.", '../../admin.php?section=usuarios');
        exit;
    } else {
        redirigirConMensaje("Error al registrar el usuario. Inténtalo de nuevo.");
    }
}
?>