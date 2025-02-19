<?php
include_once '../inc/database.php'; // Conexión a la base de datos
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
    <form class="formulario-admin" action="../inc/admin/crear_pregunta.php" method="POST">
        <div class="header-admin">Crear pregunta</div>
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
        <label class="label-admin" for="pregunta">Pregunta:</label>
        <input class="input-admin" type="text" id="pregunta" name="pregunta" required pattern="[a-zA-Z0-9\s]{1,100}" maxlength="100" title="La pregunta debe tener entre 3 y 100 caracteres.">
        <br>
        <label class="label-admin" for="opcion_correcta">Opcion correcta:</label>
        <input class="input-admin" type="text" id="opcion_correcta" name="opcion_correcta" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion correcta debe tener entre 3 y 40 caracteres.">
        <br>
        <label class="label-admin" for="opcion2">Opcion 2:</label>
        <input class="input-admin" type="text" id="opcion2" name="opcion2" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion 2 debe tener entre 3 y 40 caracteres.">
        <br>
        <label class="label-admin" for="opcion3">Opcion 3:</label>
        <input class="input-admin" type="text" id="opcion3" name="opcion3" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion 3 debe tener entre 3 y 40 caracteres.">
        <br>
        <label class="label-admin" for="opcion4">Opcion 4:</label>
        <input class="input-admin" type="text" id="opcion4" name="opcion4" required pattern="[a-zA-Z0-9\s]{1,40}" maxlength="40" title="La opcion 4 debe tener entre 3 y 40 caracteres.">
        <br>
        <button class="button-admin" type="submit">Crear</button>
    </form>
</body>
</html>
