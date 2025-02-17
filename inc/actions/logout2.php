<?php
require_once "../inc/functions.php";
require_once "../inc/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['logout'])) {
    logout2($con);
}
?>

<form class="boton-cerrar-sesion" method="post">
    <button class="btn cerrar-sesion" type="submit" name="logout">Cerrar sesión</button>
</form>