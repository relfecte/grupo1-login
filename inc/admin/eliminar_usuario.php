<?php
require_once '../database.php';  // Asegúrate de incluir la conexión a la base de datos

// Verifica si se ha enviado el ID del usuario
if (isset($_GET['usuario_id'])) {
    $usuario_id = $_GET['usuario_id'];

    // Eliminar el usuario
    $resultado = eliminarUsuario($con, $usuario_id);

    // Verifica si la eliminación fue exitosa
    if ($resultado) {
        redirigirConMensaje("Usuario eliminado correctamente.", '../admin.php?section=usuarios');
    } else {
        redirigirConMensaje("Error al eliminar la pregunta. Inténtalo de nuevo.", '../admin.php?section=usuarios');
    }
} else {
    redirigirConMensaje("No se ha especificado un ID de usuario.", '../admin.php?section=usuarios');
}

?>
