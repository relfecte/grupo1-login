<?php
include_once '../database.php'; // Conexión a la base de datos
include_once '../functions.php'; // Funciones auxiliares

// Verificar si se pasa el ID de la pregunta en la URL
if (isset($_GET['pregunta_id'])) {
    $pregunta_id = $_GET['pregunta_id'];
    // Obtener los datos de la pregunta para precargar en el formulario
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

<h2>Editar Pregunta</h2>

<form action="modificar_pregunta.php?pregunta_id=<?php echo $pregunta['pregunta_id']; ?>" method="POST">
    <label for="categoria">Categoría:</label>
    <input type="text" name="categoria" id="categoria" value="<?php echo htmlspecialchars($pregunta['categoria']); ?>" required>
    
    <label for="pregunta">Pregunta:</label>
    <textarea name="pregunta" id="pregunta" required><?php echo htmlspecialchars($pregunta['pregunta']); ?></textarea>

    <label for="opcion_correcta">Opción Correcta:</label>
    <input type="text" name="opcion_correcta" id="opcion_correcta" value="<?php echo htmlspecialchars($pregunta['opcion_correcta']); ?>" required>
    
    <label for="opcion2">Opción 2:</label>
    <input type="text" name="opcion2" id="opcion2" value="<?php echo htmlspecialchars($pregunta['opcion2']); ?>" required>
    
    <label for="opcion3">Opción 3:</label>
    <input type="text" name="opcion3" id="opcion3" value="<?php echo htmlspecialchars($pregunta['opcion3']); ?>" required>
    
    <label for="opcion4">Opción 4:</label>
    <input type="text" name="opcion4" id="opcion4" value="<?php echo htmlspecialchars($pregunta['opcion4']); ?>" required>

    <button type="submit">Modificar Pregunta</button>
</form>
