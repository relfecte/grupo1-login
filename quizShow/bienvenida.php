<?php 
session_start();
if(!isset($_SESSION['email']) && $_SESSION['admin']== 0){
    echo'
        <script>
            alert("Por favor debes iniciar sesión");
            window.location = "index.php";
        </script>';

    session_destroy();
    die();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenidos </title>
    
</head>
<body>
    <h1>Bienvenido a mi mundo <?php echo $_SESSION["usuario"]?></h1>
    <a href="./inc/login/logout.php">Cerrar sesión</a>
</body>
</html>