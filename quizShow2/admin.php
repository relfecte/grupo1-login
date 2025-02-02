<?php
require_once './inc/functions.php';
require_once './inc/database.php';
require_once './inc/adminFunctions.php';
ob_start();
session_start();
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
    <link rel="stylesheet" href="css/admin_estilos.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Panel de Administración - <?php echo $_SESSION['usuario_usuario']?></h1>
        </header>
        <!-- Barra de Navegación -->
        <nav>
            <ul class="categorias">
               <li class="categoria">
              <a href="admin.php?section=usuarios" class="foto-categoria1">
              <img src="img/user.png" alt="Usuarios" class="foto-categoria">
               <span>Usuarios</span>
               </a>
               </li>
              <li class="categoria">
              <a href="admin.php?section=calificaciones" class="foto-categoria1">
              <img src="img/puntos.png" alt="Calificaciones" class="foto-categoria">
               <span>Calificaciones</span>
                 </a>
                 </li>
                <li class="categoria">
                    <a href="admin.php?section=preguntas" class="foto-categoria1">Preguntas</a>
                    <ul>
                        <!-- Desplegable con categorías -->
                        <?php
                        $categorias = obtenerCategorias($con); // Función que debes crear
                        while ($categoria = obtener_resultados($categorias)) {
                            echo "<li><a href='admin.php?section=preguntas&categoria=" . urlencode($categoria['categoria']) . "' class='foto-categoria1'>" . htmlspecialchars($categoria['categoria']) . "</a></li>";
                        }
                        ?>
                    </ul>
                </li>
            </ul>
        </nav>

        <!-- Contenido Principal -->
        <div class="contenido inicio">
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
        <footer class="menu">
            <?php require "./inc/actions/logout.php"; ?>
        </footer>
    </div>
</body>
</html>
