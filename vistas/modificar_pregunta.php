<?php
include_once '../inc/database.php'; // Conexión a la base de datos
$pregunta_id = $_GET['pregunta_id'];  // Obtener el ID de la pregunta

// Obtener datos de la pregunta
$pregunta = obtenerPreguntaPorID($con, $pregunta_id);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Admin</title>
    <link rel="stylesheet" href="../css/admin_estilos.css">
</head>
<body>
<form class="formulario-admin" action="../inc/admin/modificar_pregunta.php?pregunta_id=<?php echo $pregunta_id; ?>" method="POST">
    <div class="header-admin">Editar pregunta</div>
    
    <label class="label-admin">Categoría:</label>
        <select class="input-admin" name="categoria" required>
            <?php
            $categorias = obtenerCategorias($con); // Función que obtiene las categorías
            while ($categoria = obtener_resultados($categorias)) {
                $nombreCategoria = ucfirst(strtolower($categoria['categoria'])); // Formato adecuado
                $selected = ($pregunta['categoria'] == $categoria['categoria']) ? 'selected' : ''; // Mantiene seleccionada la categoría actual
                echo "<option value='" . htmlspecialchars($categoria['categoria']) . "' $selected>$nombreCategoria</option>";
            }
            ?>
        </select>
    <br>
    <label class="label-admin">Pregunta:</label>
    <textarea class="textarea-admin" name="pregunta" required pattern="[a-zA-Z0-9\s]{1,100}" maxlength="100" title="La pregunta debe tener entre 3 y 100 caracteres."><?php echo $pregunta['pregunta']; ?></textarea>
    <br>

    <label class="label-admin">Opción Correcta:</label>
    <input class="input-admin" type="text" name="opcion_correcta" value="<?php echo $pregunta['opcion_correcta']; ?>" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion correcta debe tener entre 3 y 40 caracteres.">
    <br>

    <label class="label-admin">Opción 2:</label>
    <input class="input-admin" type="text" name="opcion2" value="<?php echo $pregunta['opcion2']; ?>" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion 2 debe tener entre 3 y 40 caracteres.">
    <br>

    <label class="label-admin">Opción 3:</label>
    <input class="input-admin" type="text" name="opcion3" value="<?php echo $pregunta['opcion3']; ?>" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion 3 debe tener entre 3 y 40 caracteres.">
    <br>

    <label class="label-admin">Opción 4:</label>
    <input class="input-admin" type="text" name="opcion4" value="<?php echo $pregunta['opcion4']; ?>" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion 4 debe tener entre 3 y 40 caracteres.">
    <br>

    <button class="button-admin" type="submit">Modificar</button>
</form>

</body>
</html>
