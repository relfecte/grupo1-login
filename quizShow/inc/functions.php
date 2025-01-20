<?php

function validarPatrones($patron, $valor, $mensaje) {
    if (!preg_match($patron, $valor)) {
        echo "
            <script>
                alert('$mensaje');
            </script>";
        exit();
    }
}

function redirigirConMensaje($mensaje, $url) {
    echo "
        <script>
            alert('$mensaje');
            window.location = '$url';
        </script>";
    exit();
}
?>