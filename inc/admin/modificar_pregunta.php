<?php
include_once '../database.php'; // Conexión a la base de datos
include_once '../functions.php'; // Funciones auxiliares

// Verificar si se pasa el ID de la pregunta en la URL
if (isset($_GET['pregunta_id']) && is_numeric($_GET['pregunta_id'])) {
    $pregunta_id = $_GET['pregunta_id'];
    // Obtener los datos de la pregunta
    $pregunta = obtenerPreguntaPorID($con, $pregunta_id);
} else {
    echo "No se ha proporcionado el ID de la pregunta.";
    exit;
}

// Verificar si el formulario fue enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los valores del formulario
    $categoria = $_POST['categoria'];
    $pregunta_texto = $_POST['pregunta'];
    $opcion_correcta = $_POST['opcion_correcta'];
    $opcion2 = $_POST['opcion2'];
    $opcion3 = $_POST['opcion3'];
    $opcion4 = $_POST['opcion4'];

    // Llamar a la función para actualizar la pregunta
    if (actualizarPregunta($con, $pregunta_id, $categoria, $pregunta_texto, $opcion_correcta, $opcion2, $opcion3, $opcion4)) {
        redirigirConMensaje("Pregunta modificada correctamente.", '../../admin.php?section=preguntas');
    } else {
        redirigirConMensaje("Error al modificar la pregunta. Inténtalo de nuevo.");
    }
}
?>
