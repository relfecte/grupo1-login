<?php
session_start();
// Debugging: verificar el estado de la sesión
if (isset($_SESSION['email'])) {
    echo "Usuario: " . $_SESSION['usuario'] . "<br>";
    echo "Email: " . $_SESSION['email'] . "<br>";
} else {
    echo "No hay usuario en la sesión.<br>";
}

if(!isset($_SESSION['email'])){
    echo'
        <script>
            alert("Por favor debes iniciar sesión");
            window.location = "index.php";
        </script>';
    session_destroy();
    die();
}elseif($_SESSION['admin'] == 0){
    echo'
        <script>
            alert("Por favor debes iniciar sesión como administrador");
            window.location = "bienvenida.php";
        </script>';
    
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administración</title>
    <link rel="stylesheet" href="./css/admin_estilos.css">
    
</head>
<body>
    <a href="./inc/logout.php">Cerrar sesión</a>
    <nav>
        <ul>
            <li><a href="admin.php">Usuarios</a></li>
            <li><a href="admin_quizWUR.php">Quiz</a></li>
        </ul>
    </nav>
    <h1>Administración de Usuarios</h1>
    <?php
        include "./inc/mostrar_db.php"
    ?>
    
</body>
</html>
