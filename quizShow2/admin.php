<?php
ob_start();
session_start();
require_once './inc/functions.php';
require_once './inc/database.php';
require_once './inc/adminFunctions.php';

// Conectar a la base de datos
$conexion = $con;


// Verificar acceso para administradores
verificarAccesoAdmin();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración</title>
    <link rel="stylesheet" href="./css/admin_estilos.css">
    
</head>
<body>
    <!-- Contenido Principal -->
    <div class="contenido">
        <h2>Bienvenido al panel de administración</h2>

        <!-- Barra de Navegación -->
        <nav>
            <ul>
                <li><a href="admin.php?section=usuarios">Usuarios</a></li>
                <li><a href="admin.php?section=calificaciones">Calificaciones</a></li>
                <li><a href="admin.php?section=preguntas">Preguntas</a>
                    <ul>
                        <li><a href="foto-categoria1">General</a></li>
                        <li><a href="foto-categoria1">Música</a></li>
                        <li><a href="foto-categoria1">Películas</a></li>
                        <li><a href="foto-categoria1">Deportes</a></li>
                        <li><a href="foto-categoria1">Programación</a></li>
                        <li><a href="foto-categoria1">Videojuegos</a></li>
                        <li><a href="foto-categoria1">Geografía</a></li>
                        <li><a href="foto-categoria1">Historia</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    <!-- Contenido Principal -->
    <div class="contenido">
        <?php
        if (isset($_GET['section'])) {
            $section = $_GET['section'];
            
            switch ($section) {
                case 'usuarios':
                    // Mostrar la lista de usuarios
                    mostrarUsuarios($conexion);
                    break;
                case 'calificaciones':
                    // Código para mostrar las calificaciones
                    mostrarCalificaciones($conexion);
                    break;
                case 'preguntas':
                    // Código para mostrar las preguntas
                    mostrarPreguntas($conexion);
                    break;
                default:
                    // Página por defecto si no hay parámetro 'section'
                    echo "<h2>Bienvenido al panel de administración</h2>";
            }
        } else {
            // Página por defecto si no se ha seleccionado ninguna sección
            echo "<h2>Bienvenido al panel de administración</h2>";
        }
        ?>
    </div>
    <?php
    
    require "./inc/actions/logout.php";
    ?>
</body>
</html>

