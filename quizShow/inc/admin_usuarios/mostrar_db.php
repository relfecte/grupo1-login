<?php
//session_start();
include './inc/conexion_db.php';

// Obtener todos los usuarios
$usuarios = mysqli_query($conexion, "SELECT * FROM usuario");



echo "<table border='1'>
<tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Usuario</th>
    <th>Email</th>
    <th>Admin</th>
    <th><a href='./inc/admin_usuarios/crear_db.php'>Crear nuevo Usuario</a></th>
</tr>";

while ($row = mysqli_fetch_assoc($usuarios)) {
    echo "<tr>";
    echo "<td>" . $row['usuario_nombre'] . "</td>";
    echo "<td>" . $row['usuario_apellido'] . "</td>";
    echo "<td>" . $row['usuario_usuario'] . "</td>";
    echo "<td>" . $row['usuario_email'] . "</td>";
    echo "<td>" . $row['usuario_admin'] . "</td>";
    echo "<td> <a href='./inc/admin_usuarios/editar_db.php?id=" . $row['usuario_id'] . "'>Editar</a> |
    <a href='./inc/admin_usuarios/eliminar_db.php?id=" . $row['usuario_id'] . "' onclick='return confirm(\"¿Estás seguro de que deseas eliminar este usuario?\")'>Eliminar</a>";
    echo "</tr>";
}
echo "</table>";
?>