<?php
include "conexion_db.php";

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$usuario = $_POST['usuario'];
$email = $_POST['email'];
$clave = $_POST['clave'];

// Validaciones
$nombre_pattern = "/^[a-zA-Z]{3,40}$/"; // 3 a 40 letras
$apellido_pattern = "/^[a-zA-Z]{3,40}$/"; // 3 a 40 letras
$usuario_pattern = "/^[a-zA-Z0-9]{3,20}$/"; // 3 a 20 alfanuméricos
$email_pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"; // Email válido
$clave_pattern = "/^.{6,}$/"; // Mínimo 6 caracteres

// Verificar si las entradas cumplen con los patrones
if (!preg_match($nombre_pattern, $nombre)) {
    echo "
        <script>
            alert('El nombre debe contener entre 3 y 40 letras.');
            window.location = '../index.php';
        </script>";
    exit();
}

if (!preg_match($apellido_pattern, $apellido)) {
    echo "
        <script>
            alert('El apellido debe contener entre 3 y 40 letras.');
            window.location = '../index.php';
        </script>";
    exit();
}

if (!preg_match($usuario_pattern, $usuario)) {
    echo "
        <script>
            alert('El usuario debe contener entre 3 y 20 caracteres alfanuméricos.');
            window.location = '../index.php';
        </script>";
    exit();
}

if (!preg_match($email_pattern, $email)) {
    echo "
        <script>
            alert('Ingresa un email válido.');
            window.location = '../index.php';
        </script>";
    exit();
}

if (!preg_match($clave_pattern, $clave)) {
    echo "
        <script>
            alert('La clave debe tener al menos 6 caracteres.');
            window.location = '../index.php';
        </script>";
    exit();
}


//Encriptamos la contraseña
$clave =hash('sha512', $clave);



$query= "INSERT INTO usuario (
usuario_nombre,
usuario_apellido,
usuario_usuario,
usuario_clave,
usuario_email,
usuario_admin)
VALUES ('$nombre',
'$apellido',
'$usuario',
'$clave',
'$email',
'0'
)";

//Verificar que las variables no se repitan en al bd
$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario_email='$email'");
if(mysqli_num_rows($verificar_correo) > 0) {
    echo "
        <script>
            alert('Este correo ya está registrado, intenta con otro diferente');
            window.location = '../index.php';
        </script>";
        mysqli_close($conexion);
    exit();
}

$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario_usuario='$usuario'");
if(mysqli_num_rows($verificar_usuario) > 0) {
    echo "
        <script>
            alert('Este cusuario ya está registrado, intenta con otro diferente');
            window.location = '../index.php';
        </script>";
        mysqli_close($conexion);
    exit();
}



$ejecutar= mysqli_query($conexion, $query);
if ($ejecutar) {
    echo "
        <script>
            alert('Usuario registrado correctamente');
            window.location = '../index.php';
        </script>";
} else{
    echo "
        <script>
            alert('Intentelo de nuevo, Usuario no registrado');
            window.location = '../index.php';
        </script>";
}

mysqli_close($conexion);

?>