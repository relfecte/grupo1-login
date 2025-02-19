<?php
include_once '../inc/database.php'; // Conexión a la base de datos
$usuario_id = $_GET['usuario_id'];

$result = obtenerUsuarioPorID($con, $usuario_id);
$usuario = obtener_resultados($result);
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
<form class="formulario-admin" action="../inc/admin/modificar_usuario.php?usuario_id=<?php echo $usuario_id; ?>" method="POST">
    <div class="header-admin">Editar usuario</div>
    <label class="label-admin">Nombre:</label>
    <input class="input-admin" type="text" name="nombre" value="<?php echo $usuario['usuario_nombre']; ?>" required pattern="[a-zA-Z]{3,40}" maxlength="40">
    <br>
    <label class="label-admin">Apellido:</label>
    <input class="input-admin" type="text" name="apellido" value="<?php echo $usuario['usuario_apellido']; ?>" required pattern="[a-zA-Z]{3,40}" maxlength="40">
    <br>
    <label class="label-admin">Usuario:</label>
    <input class="input-admin" type="text" name="usuario" value="<?php echo $usuario['usuario_usuario']; ?>" required pattern="[a-zA-Z0-9]{3,20}" maxlength="20">
    <br>
    <label class="label-admin">Email:</label>
    <input class="input-admin" type="email" name="email" value="<?php echo $usuario['usuario_email']; ?>" required>
    <br>
    <label class="label-admin">Clave:</label>
    <input class="input-admin" type="password" name="clave" minlength="6">
    <br>
    <label class="label-admin">Cuenta Administrador:</label>
    <select id="admin" class="select-admin" name="admin" required>
        <option class="option-admin" value="1" <?php if ($usuario['usuario_admin'] == 1) echo 'selected'; ?>>ADMIN</option>
        <option class="option-admin" value="0" <?php if ($usuario['usuario_admin'] == 0) echo 'selected'; ?>>USUARIO</option>
    </select>
    <br>
    <button class="button-admin" type="submit">Editar</button>
</form>

</body>
</html>