<?php
require_once '../database.php';  // Asegúrate de incluir la conexión a la base de datos

// Verifica si se ha enviado el ID del usuario
if (isset($_GET['usuario_id'])) {
    $usuario_id = $_GET['usuario_id'];

    // Eliminar el usuario
    $resultado = eliminarUsuario($con, $usuario_id);

    // Verifica si la eliminación fue exitosa
    if ($resultado) {
        header("Location: ../../admin.php?section=usuarios");  // Redirige de vuelta al panel de usuarios
    } else {
        echo "Error al eliminar el usuario.";
    }
} else {
    echo "No se ha especificado un ID de usuario.";
}
?>
