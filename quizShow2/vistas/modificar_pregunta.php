<?php
include_once '../inc/database.php'; // Conexión a la base de datos
$pregunta_id = $_GET['pregunta_id'];  // Obtener el ID de la pregunta

// Obtener datos de la pregunta
$pregunta = obtenerPreguntaPorID($con, $pregunta_id);
?>

<form class="form-container" action="../inc/admin/modificar_pregunta.php?pregunta_id=<?php echo $pregunta_id; ?>" method="POST">
    <label>Categoría:</label>
    <input type="text" name="categoria" value="<?php echo $pregunta['categoria']; ?>" required pattern="[a-zA-Z0-9\s]{3,50}" maxlength="50">
    <br>

    <label>Pregunta:</label>
    <textarea name="pregunta" required><?php echo $pregunta['pregunta']; ?></textarea>
    <br>

    <label>Opción Correcta:</label>
    <input type="text" name="opcion_correcta" value="<?php echo $pregunta['opcion_correcta']; ?>" required>
    <br>

    <label>Opción 2:</label>
    <input type="text" name="opcion2" value="<?php echo $pregunta['opcion2']; ?>" required>
    <br>

    <label>Opción 3:</label>
    <input type="text" name="opcion3" value="<?php echo $pregunta['opcion3']; ?>" required>
    <br>

    <label>Opción 4:</label>
    <input type="text" name="opcion4" value="<?php echo $pregunta['opcion4']; ?>" required>
    <br>

    <button type="submit">Modificar Pregunta</button>
</form>
