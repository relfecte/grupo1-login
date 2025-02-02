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
        <script>
            // Asignamos el valor del porcentaje calculado desde PHP
            const porcentajeTotal = <?php echo $_SESSION['procentaje']; ?>;

            // Obtenemos el elemento donde se mostrará el puntaje
            const txtPuntaje = document.querySelector("#puntaje-general");

            // Mostrar el porcentaje en el elemento HTML
            txtPuntaje.innerHTML = porcentajeTotal + '%';
        </script>
        <div class="scores">
            <h3>Puntajes por Categoría</h3>
            <div id="categorias-container">
                <?php generarCategorias($conexion, $_SESSION['usuario_id']); ?>
            </div>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button onclick="window.location.href='../bienvenida.php'" class="btn">Volver a inicio</button>
        </div>
    </div>
</body>
</html>
