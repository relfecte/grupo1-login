<?php 
session_start();
if(!isset($_SESSION['email']) && $_SESSION['admin']== 0){
    echo'
        <script>
            alert("Por favor debes iniciar sesión");
            window.location = "index.php";
        </script>';

    session_destroy();
    die();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/estilo.css">
    <title>Game Quiz</title>
</head>
<body>
    <div class="container">
        <img src="assets/img1/auris.png" alt="" class="img">
        <header>
            <div class="puntaje">
                <img src="assets/img1/puntos.png" alt="" >
                <span class="puntos" id="puntos">0</span>
            </div>
            <h1>QUIZ</h1>
            <div class="jugador">
                <span class="nombre" id="nombre"></span>
                <img src="assets/img1/user.png" alt="">
                </div>
        </header>

        <!-- SECCIÓN MENU DEL JUEGO -->
        <main class="menu">
            <h2>Hola <span id="nombre-jugador"></span></h2>
            <p>Elige una categoría..</p>
            <div class="categorias">
                <div class="categoria" id="general">
                    <img src="assets/img1/general.png" alt="" class="foto-categoria">
                    <h3>General</h3>
                </div>
                <div class="categoria" id="musica">
                    <img src="assets/img1/musica.png" alt="" class="foto-categoria">
                    <h3>Música</h3>
                </div>
                <div class="categoria" id="peliculas">
                    <img src="assets/img1/peliculas.png" alt="" class="foto-categoria">
                    <h3>Películas</h3>
                </div>
                <div class="categoria" id="deportes">
                    <img src="assets/img1/deportes.png" alt="" class="foto-categoria">
                    <h3>Deportes</h3>
                </div>
                <div class="categoria" id="programacion">
                    <img src="assets/img1/programacion.png" alt="" class="foto-categoria">
                    <h3>Programación</h3>
                </div>
                <div class="categoria" id="juegos">
                    <img src="assets/img1/juegos.png" alt="" class="foto-categoria">
                    <h3>Video Juegos</h3>
                </div>
                <div class="categoria" id="geografia">
                    <img src="assets/img1/Geografia.jfif" alt="" class="foto-categoria1">
                    <h3>Geografía</h3>
                </div>
                <div class="categoria" id="juegos">
                    <img src="assets/img1/Historia.jfif" alt="" class="foto-categoria1">
                    <h3>Historia</h3>
                </div>
                </div>
        </main>
    </div>

    <script src="./js/script.js"></script>
</body>
</html>
