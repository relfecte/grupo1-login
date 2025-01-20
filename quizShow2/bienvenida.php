
<?php
require_once './inc/functions.php';
require_once './inc/database.php';
require_once './inc/quizFunctions.php';
session_start();

// Conectar a la base de datos
$conexion = $con;

// Verificar acceso para usuarios nromales
verificarAccesoUsuario();

$usuarioId = $_SESSION['usuario_id']; // Suponiendo que el ID del usuario está guardado en la sesión

// Obtener las calificaciones del usuario
$calificacionTotal = obtenerCalificacionTotal($con, $usuarioId);

// Usar la función calcularPorcentaje directamente
$porcentaje = calcularPorcentaje($calificacionTotal['preguntas_acertadas_totales'], $calificacionTotal['tests_totales']);

require "./inc/actions/logout.php";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/estilo.css">
    <title>Game Quiz</title>
</head>
<body>
    <div class="container">
        <img src="./img/auris.png" alt="" class="img">
        <header>
            <div class="puntaje">
                <img src="./img/puntos.png" alt="" >
                <span class="puntos" id="puntos"></span>
            </div>

            <script>
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
                <img src="./img/user.png" alt="">
                </div>
        </header>

        <!-- SECCIÓN MENU DEL JUEGO -->
        <main class="menu">
            <h2>Hola <span id="nombre-jugador"><?php echo htmlspecialchars($_SESSION['usuario_usuario']); ?></span></h2>
            <p>Elige una categoría..</p>
            <div class="categorias">
                <div class="categoria" id="general">
                    <img src="./img/general.png" alt="" class="foto-categoria">
                    <h3>General</h3>
                </div>
                <div class="categoria" id="musica">
                    <img src="./img/musica.png" alt="" class="foto-categoria">
                    <h3>Música</h3>
                </div>
                <div class="categoria" id="peliculas">
                    <img src="./img/peliculas.png" alt="" class="foto-categoria">
                    <h3>Películas</h3>
                </div>
                <div class="categoria" id="deportes">
                    <img src="./img/deportes.png" alt="" class="foto-categoria">
                    <h3>Deportes</h3>
                </div>
                <div class="categoria" id="programacion">
                    <img src="./img/programacion.png" alt="" class="foto-categoria">
                    <h3>Programación</h3>
                </div>
                <div class="categoria" id="juegos">
                    <img src="./img/juegos.png" alt="" class="foto-categoria">
                    <h3>Video Juegos</h3>
                </div>
                <div class="categoria" id="geografia">
                    <img src="./img/Geografia.jfif" alt="" class="foto-categoria1">
                    <h3>Geografía</h3>
                </div>
                <div class="categoria" id="historia">
                    <img src="./img/Historia.jfif" alt="" class="foto-categoria1">
                    <h3>Historia</h3>
                </div>
                </div>
        </main>
    </div>

    <script src="./js/principal.js"></script>
</body>
</html>
