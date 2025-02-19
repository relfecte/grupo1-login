<?php
include_once '../database.php';
include_once '../functions.php';

$usuario_id = $_GET['usuario_id'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $clave = $_POST['clave'];
    $admin = $_POST['admin'];

    validarPatrones("/^[a-zA-Z]{3,40}$/", $nombre, "El nombre debe contener entre 3 y 40 letras.");
    validarPatrones("/^[a-zA-Z]{3,40}$/", $apellido, "El apellido debe contener entre 3 y 40 letras.");
    validarPatrones("/^[a-zA-Z0-9]{3,20}$/", $usuario, "El usuario debe contener entre 3 y 20 caracteres alfanuméricos.");
    validarPatrones("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email, "Ingresa un email válido.");
   
    if (actualizarUsuario($con, $usuario_id, $nombre, $apellido, $usuario, $email, $admin, $clave)) {
        redirigirConMensaje("Usuario modificado correctamente.", '../admin.php');
    } else {
        redirigirConMensaje("Error al modificar el usuario. Inténtalo de nuevo.", '../vistas/modificar_usuario.php?usuario_id=' . $usuario_id);
    }
}
?>
