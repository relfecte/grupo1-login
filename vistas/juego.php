<?php
require_once '../inc/functions.php';
require_once '../inc/database.php';
require_once '../inc/quizFunctions.php';
session_start();

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$conexion = $con;
verificarAccesoUsuario2();

// Verificamos si se ha recibido la categoría desde el frontend y si el método es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['categoria'])) {
    $_SESSION['categoria'] = $_POST['categoria'];

    // Guardamos la categoría
    $categoria = $_SESSION['categoria'];

    // Llamamos a la función para obtener preguntas aleatorias de la categoría
    $preguntas = obtenerPreguntasPorCategoriaRandom($conexion, $categoria);

    // Configuramos la respuesta como JSON
    header('Content-Type: application/json');

    // Verificamos si hay preguntas
    if ($preguntas && mysqli_num_rows($preguntas) > 0) {
        $preguntasArray = mysqli_fetch_all($preguntas, MYSQLI_ASSOC);
        echo json_encode($preguntasArray);
    } else {
        echo json_encode(['error' => 'No se encontraron preguntas para la categoría especificada.']);
    }
    exit; // Detenemos la ejecución para evitar que el HTML sea enviado
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
<?php require_once "../inc/actions/logout2.php"; ?>
    <div class="container">
        <img src="../img/auris.png" alt="" class="img">
        <header>
            <div class="puntaje" style="cursor: default;">
                <img src="../img/puntos.png" alt="">
                <span class="puntos" id="puntos">0</span>
            </div>
            
            <h1>QUIZ</h1>
            <div class="jugador">
                <span class="nombre" id="nombre"><?php echo htmlspecialchars($_SESSION['usuario_usuario']); ?></span>
                <img src="../img/user.png" alt="">
            </div>
        </header>

        <main class="juego">
            <div class="contador-pregunta">
                <span id="num-pregunta" class="num-pregunta">01</span>
                /
                <span> 10</span>
            </div>
            <p id="txt-pregunta" class="pregunta">
                ¿Texto de la pregunta 1?
            </p>

            <div class="opciones" id="opciones">
                <button class="opcion" id="a">Opcion A</button>
                <button class="opcion" id="b">Opcion B</button>
                <button class="opcion" id="c">Opcion C</button>
                <button class="opcion" id="d">Opcion D</button>
            </div>

            <button class="btn" id="siguiente">Siguiente</button>
            
        </main>
    </div>

    <script src="../js/juego.js"></script>
</body>
</html>