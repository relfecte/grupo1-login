<?php

// Obtener el mensaje y la URL de destino de la URL
$mensaje = isset($_GET['mensaje']) ? urldecode($_GET['mensaje']) : 'Lo sentimos, ha ocurrido un error.';
$url_destino = isset($_GET['url']) ? $_GET['url'] : '../index.php'; // Página de redirección por defecto

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto Condensed', sans-serif;
        }
        body {
            padding: 20px;
            background: linear-gradient(#584bb4, #6a416b, #685082);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #fff;
        }
        .container {
            width: 500px;
            background: linear-gradient(#6051e0, #ad79b9);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        }
        .header {
            text-align: center;
            background-color: #6b5ae4;
            padding: 10px;
            border-radius: 50px;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
            box-shadow: 3px 3px 5px #2a2929;
        }
        #mensaje {
            text-align: center;
            font-size: 16px;
            line-height: 1.8;
        }
        /* Estilo del botón adaptado */
        .btn {
            display: block;
            width: 100%;
            margin: 20px auto 0;
            padding: 10px;
            background-color: #66499e;
            color: #fff;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
            text-transform: uppercase;
        }
        .btn:hover {
            background-color: #2a2929;
        }
        a {
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
    <div class="header">Aviso</div>
        <div id="mensaje">
        <h3><?php echo $mensaje; ?></h3>
        <p>Porfavor, espere 5 segundos o haga clic en el botón para continuar.</p>
        <button class="btn" onclick="redireccionar()">Ir a la página</button>
    </div>

    <script>
        // Función para redirigir al usuario después de 5 segundos
        setTimeout(function() {
            window.location.href = "<?php echo $url_destino; ?>";  // Redirige a la URL proporcionada
        }, 5000); // 5000 milisegundos = 5 segundos

        // Función para redirigir al usuario inmediatamente si hace clic en el botón
        function redireccionar() {
            window.location.href = "<?php echo $url_destino; ?>";  // Redirige a la URL proporcionada
        }
    </script>
    </div>
</body>
</html>
