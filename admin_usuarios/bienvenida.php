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
    <link rel="stylesheet" href="./css/style.css">


    <title>Bienvenido </title>
    
</head>
<body>
     <header>
        <h1 class="main-title">Bienvenido a QuizShow</h1>
        <h2 class="subtitle">Bienvenido</h2>
        <p class="description">Selecciona una opción para comenzar:</p>
    </header>

    <a href="./inc/logout.php">Cerrar sesión</a>
    <script src="./js/script.js"></script>
</body>
</html>
