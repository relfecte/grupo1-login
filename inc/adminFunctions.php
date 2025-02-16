<?php
require_once 'database.php';  // Contiene las funciones para interactuar con la base de datos
require_once 'functions.php';

// Función para mostrar todos los usuarios (esto se puede llamar desde el archivo que genera la vista)
function mostrarUsuarios($conexion) {
    $usuarios = obtenerUsuarios($conexion);
    echo "<h2>Usuarios</h2>";
    echo "<table border='1'>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Usuario</th>
        <th>Email</th>
        <th>Admin</th>
        <th><a href='./vistas/crear_usuario.html'>Crear nuevo Usuario</a></th>
    </tr>";

    while ($row = obtener_resultados($usuarios)) {
        echo "<tr>";
        echo "<td>" . $row['usuario_nombre'] . "</td>";
        echo "<td>" . $row['usuario_apellido'] . "</td>";
        echo "<td>" . $row['usuario_usuario'] . "</td>";
        echo "<td>" . $row['usuario_email'] . "</td>";
        echo "<td>" . $row['usuario_admin'] . "</td>";
        echo "<td> <a href='./vistas/modificar_usuario.php?usuario_id=" . $row['usuario_id'] . "'>Editar</a> |
        <a href='./inc/admin/eliminar_usuario.php?usuario_id=" . $row['usuario_id'] . "' onclick='return confirm(\"¿Estás seguro de que deseas eliminar este usuario?\")'>Eliminar</a></td>";
        echo "</tr>";
    }
    echo "</table>";
}

function mostrarPreguntas($conexion){
     // Verificar si se ha pasado una categoría
     $categoria = isset($_GET['categoria']) ? $_GET['categoria'] : null;

     // Obtener las preguntas, filtrando por categoría si es necesario
     if ($categoria) {
         $preguntas = obtenerPreguntasPorCategoria($conexion, $categoria);
     } else {
         $preguntas = obtenerPreguntas($conexion);
     }
 

    // Mostrar la tabla de preguntas
    echo "<h2>Preguntas ". ($categoria ? " - Categoría: $categoria" : "") ."</h2>";
    echo "<table border='1'>
    <tr>
        <th>ID</th>
        <th>Categoria</th>
        <th>Pregunta</th>
        <th>Respuesta Correcta</th>
        <th>Opción 2</th>
        <th>Opción 3</th>
        <th>Opción 4</th>
        <th><a href='./vistas/crear_pregunta.html'>Crear Pregunta</a></th>
    </tr>";

    while ($row = obtener_resultados($preguntas)) {
        echo "<tr>";
        echo "<td>" . $row['pregunta_id'] . "</td>";
        echo "<td>" . $row['categoria'] . "</td>";
        echo "<td>" . $row['pregunta'] . "</td>";
        echo "<td>" . $row['opcion_correcta'] . "</td>";
        echo "<td>" . $row['opcion2'] . "</td>";
        echo "<td>" . $row['opcion3'] . "</td>";
        echo "<td>" . $row['opcion4'] . "</td>";
        echo "<td> <span><a href='./vistas/modificar_pregunta.php?pregunta_id=" . $row['pregunta_id'] . "'>Editar</a> |
        <a href='./inc/admin/eliminar_pregunta.php?pregunta_id=" . $row['pregunta_id'] . "' onclick='return confirm(\"¿Estás seguro de que deseas eliminar esta pregunta?\")'>Eliminar</a> </span> </td>";
        echo "</tr>";
    }
    echo "</table>";
}

function mostrarCalificaciones($conexion){
    // Obtener todas las calificaciones
    $calificaciones = obtenerCalificacionesConUsuario($conexion);

    // Mostrar la tabla de calificaciones
    echo "<h2>Calificaciones</h2>";
    echo "<table border='1'>
    <tr>
        <th>Usuario</th>
        <th>Tests Totales</th>
        <th>Preguntas Acertadas Totales</th>
        <th>Tests Tipo General</th>
        <th>Preguntas Acertadas Tipo General</th>
        <th>Tests Tipo Música</th>
        <th>Preguntas Acertadas Tipo Música</th>
        <th>Tests Tipo Deportes</th>
        <th>Preguntas Acertadas Tipo Deportes</th>
        <th>Tests Tipo Programación</th>
        <th>Preguntas Acertadas Tipo Programación</th>
        <th>Tests Tipo Juegos</th>
        <th>Preguntas Acertadas Tipo Juegos</th>
        <th>Tests Tipo Películas</th>
        <th>Preguntas Acertadas Tipo Películas</th>

    </tr>";

    while ($row = obtener_resultados($calificaciones)) {
        echo "<tr>";
        echo "<td>" . $row['usuario_usuario'] . "</td>";
        echo "<td>" . $row['tests_totales'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_totales'] . "</td>";
        echo "<td>" . $row['tests_tipo_general'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_tipo_general'] . "</td>";
        echo "<td>" . $row['tests_tipo_musica'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_tipo_musica'] . "</td>";
        echo "<td>" . $row['tests_tipo_deportes'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_tipo_deportes'] . "</td>";
        echo "<td>" . $row['tests_tipo_programacion'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_tipo_programacion'] . "</td>";
        echo "<td>" . $row['tests_tipo_juegos'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_tipo_juegos'] . "</td>";
        echo "<td>" . $row['tests_tipo_peliculas'] . "</td>";
        echo "<td>" . $row['preguntas_acertadas_tipo_peliculas'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
}
?>