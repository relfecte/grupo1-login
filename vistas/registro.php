<?php
require_once '../inc/functions.php';
require_once '../inc/database.php';
require_once '../inc/quizFunctions.php';
require_once '../inc/regisRankFunctions.php';
session_start();
$conexion = $con;
verificarAccesoUsuario2();

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puntuaciones del Quiz</title>
    <link rel="stylesheet" href="../css/registro.css">
    

    
</head>
<body>
    <div class="container__registro">
        <header class="header__registro">
            Puntuaciones del Quiz
        </header>
        <div class="general-score__registro">
            <h2>Puntaje General</h2>
            <span id="puntaje-general" class="percentage__registro">0</span>
        </div>
        <script>
            // Asignamos el valor del porcentaje calculado desde PHP
            const porcentajeTotal = <?php echo $_SESSION['procentaje']; ?>;

            // Obtenemos el elemento donde se mostrará el puntaje
            const txtPuntaje = document.querySelector("#puntaje-general");

            // Mostrar el porcentaje en el elemento HTML
            txtPuntaje.innerHTML = porcentajeTotal + '%';
        </script>
        <div class="scores__registro">
            <h3>Puntajes por Categoría</h3>
            <div id="categorias-container">
                <?php generarCategorias($conexion, $_SESSION['usuario_id']); ?>
            </div>
        </div>
        <div style="text-align: center; margin-top: 10px;">
            <button onclick="window.location.href='../bienvenida.php'" class="btn__registro">Volver a inicio</button>
        </div>
    </div>
   
</body>
</html>


