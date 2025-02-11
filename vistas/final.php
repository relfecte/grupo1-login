<?php
require_once '../inc/functions.php';
require_once '../inc/database.php';
require_once '../inc/quizFunctions.php';
session_start();
// Deshabilitar caché
/*header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");*/

// Conectar a la base de datos
$conexion = $con;

// Verificar acceso
verificarAccesoUsuario2();

// Obtener el ID de usuario y categoría de la sesión
/*$usuarioId = $_SESSION['usuario_id']; 
$categoria = $_SESSION['categoria'];*/

// Verificar si los parámetros existen
/*if (isset($_POST['puntajePartida']) && isset($usuarioId) && isset($categoria)) {
    $puntajePartida = $_POST['puntajePartida'];

    // Ejecutar la función para actualizar las calificaciones
    $resultado = actualizarCalificaciones($conexion, $usuarioId, $puntajePartida, $categoria);
    // Obtener las nuevas calificaciones después de la actualización
        $calificacionTotal = obtenerCalificacionTotal($conexion, $usuarioId);
        $porcentaje = calcularPorcentaje($calificacionTotal['preguntas_acertadas_totales'], $calificacionTotal['tests_totales']);
    
    if ($resultado) {
        // Responder con el nuevo porcentaje
        echo json_encode([
            "status" => "success",
            "message" => "Datos actualizados correctamente.",
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Error al actualizar los datos."
        ]);
    }
}*/

// Procesar petición AJAX antes de cargar el HTML
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuarioId = $_SESSION['usuario_id']; 
    $categoria = $_SESSION['categoria'];

    if (isset($_POST['puntajePartida']) && isset($usuarioId) && isset($categoria)) {
        $puntajePartida = $_POST['puntajePartida'];

        // Ejecutar la función para actualizar las calificaciones
        $resultado = actualizarCalificaciones($conexion, $usuarioId, $puntajePartida, $categoria);

        if ($resultado) {
            $calificacionTotal = obtenerCalificacionTotal($conexion, $usuarioId);
            $porcentaje = calcularPorcentaje(
                $calificacionTotal['preguntas_acertadas_totales'], 
                $calificacionTotal['tests_totales']
            );

            echo json_encode([
                "status" => "success",
                "message" => "Datos actualizados correctamente.",
                "nuevoPorcentaje" => $porcentaje
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Error al actualizar los datos."
            ]);
        }
        exit; // Detenemos la ejecución del script PHP para evitar HTML adicional
    }
}



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
