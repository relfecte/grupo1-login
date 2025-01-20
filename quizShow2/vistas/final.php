<?php
require_once '../inc/functions.php';
require_once '../inc/database.php';
require_once '../inc/quizFunctions.php';
session_start();
// Conectar a la base de datos
$conexion = $con;

verificarAccesoUsuario2();

$usuarioId = $_SESSION['usuario_id']; // Suponiendo que el ID del usuario está guardado en la sesión

// Obtener las calificaciones del usuario
$calificacionTotal = obtenerCalificacionTotal($con, $usuarioId);

// Usar la función calcularPorcentaje directamente
$porcentaje = calcularPorcentaje($calificacionTotal['preguntas_acertadas_totales'], $calificacionTotal['tests_totales']);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estilo.css">
    <title>Game Quiz</title>
</head>
<body>
    <div class="container">
        <img src="../img/auris.png" alt="" class="img">
        <header>
            <div class="puntaje">
                <img src="../img/puntos.png" alt="">
                <span class="puntos" id="puntos"></span>
            </div>
            <script defer>
            // Asignamos el valor del porcentaje calculado desde PHP
            const porcentajeTotal = <?php echo $porcentaje; ?>;

            // Obtenemos el elemento donde se mostrará el puntaje
            const txtPuntaje = document.querySelector("#puntos");

            // Mostrar el porcentaje en el elemento HTML
            txtPuntaje.innerHTML = porcentajeTotal.toFixed(2) + '%'; // Mostrar con dos decimales
            </script>
            <h1>QUIZ</h1>
            <div class="jugador">
                <span class="nombre" id="nombre"><?php echo htmlspecialchars($_SESSION['usuario_usuario']); ?></span>
                <img src="../img/user.png" alt="">
            </div>
        </header>

        <main class="final">
            <h2>QUIZ FINALIZADO</h2>

            <div class="medalla">
                <img src="../img/medalla.png" alt="">
                <h3 id="nombre-jugador" class="nombre"><?php echo htmlspecialchars($_SESSION['usuario_usuario']); ?></h3>
            </div>

            <span id="puntaje-final" class="puntaje-final"></span>

            <h2>ACERTADAS: <span id="total-acertadas" class="final-score"></span></h2>
            <h2>INCORRECTAS: <span id="total-no-acertadas" class="final-score"></span></h2>
            <button class="btn" id="btn-comenzar">Comenzar de Nuevo</button>
        </main>
    </div>

    <script src="../js/final.js"></script>
</body>
</html>
