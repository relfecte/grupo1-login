<?php
// Iniciar la conexión a la base de datos
include 'conexion_db.php';

// Botón para crear nueva pregunta
echo '<a href="crear_preguntaWUR.php">Crear Nueva Pregunta</a>';

echo "<h2>Preguntas del Quiz</h2>";

// Obtener todas las preguntas del quiz
$preguntas = mysqli_query($conexion, "SELECT * FROM preguntas_quizWUR");

// Comprobar si hay preguntas
if (mysqli_num_rows($preguntas) > 0) {
    while ($row = mysqli_fetch_assoc($preguntas)) {
        $pregunta_id = $row['preguntas_quizWUR_id'];
        $opcion1 = $row['preguntas_quizWUR_opcion1'];
        $opcion2 = $row['preguntas_quizWUR_opcion2'];

        // Calcular el total de respuestas para esta pregunta
        $total_respuestas_query = mysqli_query($conexion, "SELECT COUNT(*) AS total FROM respuestas_quizWUR WHERE preguntas_quizWUR_id = $pregunta_id");
        $total_respuestas = mysqli_fetch_assoc($total_respuestas_query)['total'];

        // Calcular cuántas veces se eligió cada opción
        $opcion1_count_query = mysqli_query($conexion, "SELECT COUNT(*) AS count FROM respuestas_quizWUR WHERE preguntas_quizWUR_id = $pregunta_id AND respuestas_quizWUR_opcion_elegida = 1");
        $opcion1_count = mysqli_fetch_assoc($opcion1_count_query)['count'];

        $opcion2_count_query = mysqli_query($conexion, "SELECT COUNT(*) AS count FROM respuestas_quizWUR WHERE preguntas_quizWUR_id = $pregunta_id AND respuestas_quizWUR_opcion_elegida = 2");
        $opcion2_count = mysqli_fetch_assoc($opcion2_count_query)['count'];

        // Calcular porcentajes
        $porcentaje1 = $total_respuestas > 0 ? ($opcion1_count / $total_respuestas) * 100 : 0;
        $porcentaje2 = $total_respuestas > 0 ? ($opcion2_count / $total_respuestas) * 100 : 0;

        // Mostrar la pregunta y sus opciones con porcentajes
        echo "<h3>Pregunta ID: $pregunta_id</h3>";
        echo "<p>Opción 1: $opcion1 - Porcentaje: " . number_format($porcentaje1, 2) . "%</p>";
        echo "<p>Opción 2: $opcion2 - Porcentaje: " . number_format($porcentaje2, 2) . "%</p>";
        // Botón para editar la pregunta
        echo '<a href="editar_preguntaWUR.php?id=' . $pregunta_id . '">Modificar Pregunta</a>';
        
        // Botón para eliminar la pregunta
        echo '<a href="eliminar_preguntaWUR.php?id=' . $pregunta_id . '" onclick="return confirm(\'¿Estás seguro de que deseas eliminar esta pregunta?\')">Eliminar Pregunta</a>';
        echo "<hr>";
    }
} else {
    echo "No hay preguntas en el quiz.";
}

// Cerrar conexión
mysqli_close($conexion);
?>
