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
    
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="button-container">
        <button class="action-btn" id="loginBtn">Login</button>
        <button class="action-btn" id="registerBtn">Regístrate</button>
    </div>
    <?php
    include "./vistas/login.html"; 
    echo "<br><br>";
    include "./vistas/register.html"; 
    ?>
<script src="./js.script.js"></script>
</body>
</html>
