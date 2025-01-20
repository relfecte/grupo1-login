<?php
require_once './inc/functions.php';
require_once './inc/database.php';
session_start();

// Redirigir al usuario autenticado según su rol
redirigirSegunRol();

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Registro</title>
    
    <link rel="stylesheet" href="./css/style_index.css">
</head>
<body>
    <header>
        <h1 class="main-title">Bienvenido a QuizShow</h1>
        <h2 class="subtitle">Bienvenido</h2>
        <p class="description">Selecciona una opción para comenzar:</p>
    </header>
    <div class="button-container">
        <button class="action-btn" id="loginBtn">Login</button>
        <button class="action-btn" id="registerBtn">Regístrate</button>
    </div>
    <?php
    include "./vistas/login/login.html"; 
    echo "<br><br>";
    include "./vistas/login/register.html"; 
    ?>

    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section about">
                <h5>Sobre Nosotros</h5>
                <p>Somos un grupo de estudiantes comprometidos con realizar un proyecto demandado sobre un juego de preguntas y respuestas.</p>
            </div>
            <div class="footer-section links">
                <h5>Enlaces Útiles</h5>
                <ul>
                    <li><a href="politica.html">Política de Privacidad</a></li>
                    <li><a href="terminos.html">Términos y Condiciones</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 Todos los derechos reservados.
        </div>
    </footer>
<script src="./js/script.js"></script>
</body>
</html>


