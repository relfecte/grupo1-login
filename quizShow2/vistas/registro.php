<?php
require_once '../inc/functions.php';
require_once '../inc/database.php';
require_once '../inc/quizFunctions.php';
session_start();
$conexion = $con;
verificarAccesoUsuario2();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puntuaciones del Quiz</title>
    <link rel="stylesheet" href="../css/estilo.css">
</head>
<body>
    <div class="container__register">
        <header class="header__register">
            Puntuaciones del Quiz
        </header>
        <div class="general-score">
            <h2>Puntaje General</h2>
            <span id="puntaje-general" class="percentage">0</span> <!-- Aquí se actualizará el puntaje general -->
        </div>
        <div class="scores">
            <h3>Puntajes por Categoría</h3>
            <div id="categorias-container">
                <!-- Las categorías se ordenarán y mostrarán dinámicamente aquí -->
            </div>
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="window.location.href='principal.html'" class="btn">Volver a inicio</button>
        </div>
    </div>
    <script src="js/registro.js"></script>
</body>
</html>
