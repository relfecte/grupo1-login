<?php
include 'conexion_db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    mysqli_query($conexion, "DELETE FROM usuario WHERE usuario_id = $id");
    header("Location: ../admin.php");
    exit();
}
?>