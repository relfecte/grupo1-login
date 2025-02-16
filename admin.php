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
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
}



h1 {
    font-size: 1.8rem;
    margin: 20px 0;
    color: white;
}

body {
    padding: 20px;
    height: 130vh;
    background: linear-gradient(#584bb4, #6a416b, #685082);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Estilos para la tabla */
table {
    width: 90%;
    max-width: 800px;
    border-collapse: collapse;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
}

th, td {
    padding: 10px;
    text-align: center;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

th {
    background: #66499e;
    font-size: 1rem;
}

td {
    font-size: 0.9rem;
}

tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
}

/* Estilos para los enlaces */
a {
    text-decoration: none;
    color: white;
    background-color: #6051e0;
    padding: 6px 12px;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-size: 0.9rem;
}

a:hover {
    background-color: #2a2929;
}

/* Botón de Crear */
th a {
    font-weight: bold;
    padding: 8px 16px;
}
.foto-categoria {
    width: 50px; /* Ajusta el tamaño según lo necesites */
    height: 50px; /* Asegura que sea cuadrado o del tamaño deseado */
}


</style>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="h1__admin">Panel de Administración - <?php echo $_SESSION['usuario_usuario']?></h1>
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
                    <a href="admin.php?section=preguntas" class="foto-categoria1">
                        <img src="img/puntos.png" alt="Calificaciones" class="foto-categoria">
                        <span>Preguntas</span>
                    </a>
                    
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
           
        </nav>
       

        
        <footer class="menu">
        <?php require "./inc/actions/logout.php"; ?>
        </footer>
    </div>
</body>
</html>
