<?php
require_once '../database.php';  // Asegúrate de incluir la conexión a la base de datos

// Verifica si se ha enviado el ID de la pregunta
if (isset($_GET['pregunta_id'])) {
    $pregunta_id = $_GET['pregunta_id'];

    // Eliminar la pregunta
    $resultado = eliminarPregunta($con, $pregunta_id);

    // Verifica si la eliminación fue exitosa
    if ($resultado) {
        header("Location: ../../admin.php?section=preguntas");  // Redirige de vuelta al panel de preguntas
        redirigirConMensaje("Pregunta eliminada correctamente.", '../admin.php?section=preguntas');
    } else {
        redirigirConMensaje("Error al eliminar la pregunta.", '../admin.php?section=preguntas');
    }
} else {
    redirigirConMensaje("No se ha especificado un ID de pregunta.", '../admin.php?section=preguntas');
    
}

?>
