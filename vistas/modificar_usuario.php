<?php
include_once '../inc/database.php'; // Conexión a la base de datos
$usuario_id = $_GET['usuario_id'];

// Obtener datos del usuario
$result = obtenerUsuarioPorID($con, $usuario_id);
$usuario = obtener_resultados($result);
?>

<form class="form-container" action="../inc/admin/modificar_usuario.php?usuario_id=<?php echo $usuario_id; ?>" method="POST">
    <label>Nombre:</label>
    <input type="text" name="nombre" value="<?php echo $usuario['usuario_nombre']; ?>" required pattern="[a-zA-Z]{3,40}" maxlength="40">
    <br>
    <label>Apellido:</label>
    <input type="text" name="apellido" value="<?php echo $usuario['usuario_apellido']; ?>" required pattern="[a-zA-Z]{3,40}" maxlength="40">
    <br>
    <label>Usuario:</label>
    <input type="text" name="usuario" value="<?php echo $usuario['usuario_usuario']; ?>" required pattern="[a-zA-Z0-9]{3,20}" maxlength="20">
    <br>
    <label>Email:</label>
    <input type="email" name="email" value="<?php echo $usuario['usuario_email']; ?>" required>
    <br>
    <label>Clave:</label>
    <input type="password" name="clave" minlength="6">
    <br>
    <label>Cuenta Administrador:</label>
    <select name="admin" required>
        <option value="1" <?php if ($usuario['usuario_admin'] == 1) echo 'selected'; ?>>ADMIN</option>
        <option value="0" <?php if ($usuario['usuario_admin'] == 0) echo 'selected'; ?>>USUARIO</option>
    </select>
    <br>
    <button type="submit">Editar usuario</button>
</form>
