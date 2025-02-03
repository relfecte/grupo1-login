<?php
require_once '../inc/functions.php';
require_once '../inc/database.php';
require_once '../inc/quizFunctions.php';
session_start();

// Conectar a la base de datos
$conexion = $con;

// Verificar acceso para usuarios normales
verificarAccesoUsuario();

// Obtener las calificaciones
$calificaciones = obtenerCalificacionesConUsuario($conexion);

// Obtener las categorías únicas (última palabra de cada campo relacionado con las calificaciones)
$categorias = [];
foreach ($calificaciones as $calificacion) {
    foreach ($calificacion as $key => $value) {
        // Extraer la última palabra del nombre de la columna (después del "_")
        $parts = explode('_', $key);
        $categoria = end($parts); // La última palabra
        // Evitar duplicados
        if (!in_array($categoria, $categorias)) {
            $categorias[] = $categoria;
        }
    }
}

// Obtener el ranking para la categoría seleccionada
$categoria = isset($_GET['categoria']) ? $_GET['categoria'] : 'totales';  // Por defecto 'general'

// Filtrar las calificaciones de acuerdo a la categoría seleccionada
$rankings = [];
foreach ($calificaciones as $calificacion) {
    // Para el ranking global, obtenemos las respuestas acertadas y los tests totales
    if ($categoria === 'totales') {
        $preguntasAcertadasTotales = $calificacion['preguntas_acertadas_totales'] ?? 0; // Respuestas acertadas totales
        $testsTotales = $calificacion['tests_totales'] ?? 0; // Tests totales
    } else {
        // Para una categoría específica
        $preguntasAcertadasClave = "preguntas_acertadas_tipo_" . $categoria;
        $preguntasAcertadasTotales = $calificacion[$preguntasAcertadasClave] ?? 0;
        $testsTotales = $calificacion['tests_tipo_' . $categoria] ?? 0;
    }

    // Calcular el porcentaje usando la función definida
    $porcentaje = calcularPorcentaje($preguntasAcertadasTotales, $testsTotales);

    // Agregar los usuarios al ranking
    $rankings[] = [
        'usuario_id' => $calificacion['usuario_id'],
        'usuario_usuario' => $calificacion['usuario_usuario'],
        'porcentaje' => $porcentaje
    ];
}

// Ordenar el ranking por porcentaje (de mayor a menor)
usort($rankings, function($a, $b) {
    return $b['porcentaje'] <=> $a['porcentaje'];
});

// Obtener el usuario actual
$usuario_id = $_SESSION['usuario_id'];  // Suponiendo que el ID del usuario está en la sesión
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking de Usuarios</title>
    <link rel="stylesheet" href="../css/ranking.css">
</head>
<body>
    <div class="container">
        <h1>Ranking de Usuarios</h1>

        <form method="GET" action="rankings.php"> <!-- Asegúrate de que el archivo es ranking.php -->
            <label for="categoria">Seleccionar categoría: </label>
            <select name="categoria" id="categoria" onchange="this.form.submit()">
                <?php foreach ($categorias as $cat): 
                    // Evitar mostrar 'id' y 'usuario'
                    if ($cat == 'id' || $cat == 'usuario') {
                        continue;
                    }
                    // Limpieza de categoría para mostrarla amigablemente
                    $categoria_amigable = ucfirst(str_replace("tests_", "", $cat));  // Eliminamos 'tests_' de la categoría
                ?>
                    <option value="<?= $cat ?>" <?= $categoria == $cat ? 'selected' : '' ?>>
                        <?= $categoria_amigable ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </form>

        <!-- Mostrar el ranking -->
        <div class="ranking-container">
            <?php if (count($rankings) > 0): ?>
                <?php foreach ($rankings as $index => $user): ?>
                    <?php 
                        // Verificar si el usuario es el actual
                        $is_current_user = $user['usuario_id'] == $usuario_id; 
                    ?>
                    <div class="ranking-item <?= $is_current_user ? 'current-user' : '' ?>">
                        <span class="ranking-position"><?= $index + 1 ?></span>
                        <span class="ranking-name"><?= $user['usuario_usuario'] ?></span>
                        <span class="ranking-percentage"><?= $user['porcentaje'] ?>%</span>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <p>No hay rankings disponibles para esta categoría.</p>
            <?php endif; ?>
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="window.location.href='../bienvenida.php'" class="btn">Volver a inicio</button>
        </div>
    </div>
</body>
</html>
