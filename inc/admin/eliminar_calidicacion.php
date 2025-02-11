<?php
require_once '../database.php';  // Asegúrate de incluir la conexión a la base de datos

// Verifica si se ha enviado el ID de la calificación
if (isset($_GET['calificacion_id'])) {
    $calificacion_id = $_GET['calificacion_id'];

    // Eliminar la calificación
    $resultado = eliminarCalificacion($con, $calificacion_id);

    // Verifica si la eliminación fue exitosa
    if ($resultado) {
        header("Location: ../../admin.php?section=calificaciones");  // Redirige de vuelta al panel de calificaciones
    } else {
        echo "Error al eliminar la calificación.";
    }
} else {
    echo "No se ha especificado un ID de calificación.";
}
?>
