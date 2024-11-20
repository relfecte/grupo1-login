<link rel="stylesheet" href="../css/usuario_form_estilos.css">
<?php
// Verificar si estamos en modo edición o creación
$is_edit = isset($user);

// Inicializar variables por defecto para el formulario
// Si hay un POST, utiliza esos valores; si no, utiliza los del usuario o vacíos
$nombre = $_POST['nombre'] ?? ($is_edit ? $user['usuario_nombre'] : '');
$apellido = $_POST['apellido'] ?? ($is_edit ? $user['usuario_apellido'] : '');
$usuario = $_POST['usuario'] ?? ($is_edit ? $user['usuario_usuario'] : '');
$email = $_POST['email'] ?? ($is_edit ? $user['usuario_email'] : '');
$admin = $_POST['admin'] ?? ($is_edit ? $user['usuario_admin'] : 0); // Valor por defecto
?>


<h2><?php echo $is_edit ? "Editar usuario" : "Crear un nuevo usuario"; ?></h2>

<form action="<?php echo $is_edit ? "../inc/editar_db.php?id={$user['usuario_id']}" : "../inc/crear_db.php"; ?>" method="POST">
<label>Nombre:</label>
    <input type="text" name="nombre" value="<?php echo htmlspecialchars($nombre); ?>" required pattern="[a-zA-Z]{3,40}" maxlength="40" title="El nombre debe contener entre 3 y 40 letras.">
    <br>
    <label>Apellido:</label>
    <input type="text" name="apellido" value="<?php echo htmlspecialchars($apellido); ?>" required pattern="[a-zA-Z]{3,40}" maxlength="40" title="El apellido debe contener entre 3 y 40 letras.">
    <br>
    <label>Usuario:</label>
    <input type="text" name="usuario" value="<?php echo htmlspecialchars($usuario); ?>" required pattern="[a-zA-Z0-9]{3,20}" maxlength="20" title="El usuario debe contener entre 3 y 20 caracteres alfanuméricos.">
    <br>
    <label>Email:</label>
    <input type="email" name="email" value="<?php echo htmlspecialchars($email); ?>" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Ingresa un email válido.">
    <br>
    <?php if ($is_edit): ?>
        <label for="clave">Nueva Contraseña (dejar vacío si no se quiere cambiar):</label>
        <input type="password" name="clave" minlength="6" title="La clave debe tener al menos 6 caracteres.">
        <br>
    <?php else: ?>
        <label>Clave:</label>
        <input type="password" name="clave" required minlength="6" title="La clave debe tener al menos 6 caracteres.">
        <br>
    <?php endif; ?>
    <label>Cuenta administrador:</label>
    <select name="admin" required>
        <option value="1" <?php echo ($admin == 1) ? 'selected' : ''; ?>>ADMIN</option>
        <option value="0" <?php echo ($admin == 0) ? 'selected' : ''; ?>>USUARIO</option>
    </select>
    <br>
    <button type="submit"><?php echo $is_edit ? "Actualizar usuario" : "Crear usuario"; ?></button>
</form>

