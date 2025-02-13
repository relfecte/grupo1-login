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
    <div class="header-admin">Modificar pregunta</div>
    <label class="label-admin">Categoría:</label>
    <input class="input-admin" type="text" name="categoria" value="<?php echo $pregunta['categoria']; ?>" required pattern="[a-zA-Z0-9\s]{3,50}" maxlength="50">
    <br>

    <label class="label-admin">Pregunta:</label>
    <textarea class="textarea-admin" name="pregunta" required><?php echo $pregunta['pregunta']; ?></textarea>
    <br>

    <label class="label-admin">Opción Correcta:</label>
    <input class="input-admin" type="text" name="opcion_correcta" value="<?php echo $pregunta['opcion_correcta']; ?>" required>
    <br>

    <label class="label-admin">Opción 2:</label>
    <input class="input-admin" type="text" name="opcion2" value="<?php echo $pregunta['opcion2']; ?>" required>
    <br>

    <label class="label-admin">Opción 3:</label>
    <input class="input-admin" type="text" name="opcion3" value="<?php echo $pregunta['opcion3']; ?>" required>
    <br>

    <label class="label-admin">Opción 4:</label>
    <input class="input-admin" type="text" name="opcion4" value="<?php echo $pregunta['opcion4']; ?>" required>
    <br>

    <button class="button-admin" type="submit">Modificar Pregunta</button>
</form>

<script src="../js/crear-usuario.js"></script>
</body>
</html>
