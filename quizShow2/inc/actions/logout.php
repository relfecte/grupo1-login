
<?php
require_once "./inc/functions.php";
require_once "./inc/database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['logout'])) {
    logout($con);
}
?>

<form method="post">
    <button type="submit" name="logout">Cerrar sesión</button>
</form>
