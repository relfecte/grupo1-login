<?php 
session_start();
if(isset($_SESSION['usuario'])){
    header("location: bienvenida.php");
    if($_SESSION['admin']== 1){
        header("location: admin.php");
        exit();
    }else{
        header("location: bienvenida.php");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Registro</title>
    
    <link rel="stylesheet" href="./css/estilos.css">
</head>
<body>
    <?php
    include "./vistas/login.html"; 
    echo "<br><br>";
    include "./vistas/register.html"; 
    ?>
</body>
</html>
