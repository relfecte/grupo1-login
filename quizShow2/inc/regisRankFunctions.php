<?php
require_once 'database.php';
require_once 'quizFunctions.php';

function generarCategorias($conexion, $usuarioId) {
    // Obtener las calificaciones del usuario
    $calificaciones = obtenerCalificacionTotalPorId($conexion, $usuarioId);

    // Verificar si hay datos
    if ($calificaciones) {
        foreach ($calificaciones as $columna => $valor) {
            // Filtrar solo las columnas que contienen "tests_tipo_"
            if (strpos($columna, "tests_tipo_") !== false) {
                // Extraer la última palabra después de "tests_tipo_"
                $tipo = ucfirst(str_replace("tests_tipo_", "", $columna)); // Primera letra en mayúscula

                // Obtener el número de preguntas acertadas para este tipo
                $preguntasClave = "preguntas_acertadas_tipo_" . strtolower($tipo);
                $preguntasAcertadas = $calificaciones[$preguntasClave] ?? 0;

                // Calcular el porcentaje
                $porcentaje = calcularPorcentaje($preguntasAcertadas, $valor);

                // Imprimir HTML con los valores
                echo '<div class="score-category">
                <span>' . $tipo . '</span>
                <span id="' . strtolower($tipo) . '" class="percentage">' . $porcentaje . '%</span>
                </div>';
            }
        }
    }
}
?>
