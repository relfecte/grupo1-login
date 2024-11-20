<?php
    session_start();
    include 'conexion_db.php';

    $email=$_POST['email'];
    $clave=$_POST['clave'];

    // Validaciones
    $email_pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"; // Email válido
    $clave_pattern = "/^.{6,}$/"; // Mínimo 6 caracteres

    // Verificar si las entradas cumplen con los patrones
    if (!preg_match($email_pattern, $email)) {
        echo '
            <script>
                alert("Ingresa un email válido.");
                window.location = "../index.php";
            </script>
        ';
        exit();
    }

    if (!preg_match($clave_pattern, $clave)) {
        echo '
            <script>
                alert("La clave debe tener al menos 6 caracteres.");
                window.location = "../index.php";
            </script>
        ';
        exit();
    }

    // Encriptamos la contraseña
    $clave = hash('sha512', $clave);

    $validar_login = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario_email='$email' and usuario_clave='$clave' ");

    if(mysqli_num_rows($validar_login) > 0){
        $_SESSION['email']=$email;

        $user = mysqli_fetch_assoc($validar_login);
        // Guardar el estado de admin en la sesión
        $_SESSION['admin'] = $user['usuario_admin'];
        // Guardar el usuario en la sesió
        $_SESSION['usuario'] = $user['usuario_usuario'];
        
        // Comprobar si el usuario es administrador (usuario_admin == 1)
        if ($user['usuario_admin'] == 1) {
            // Redirigir a la página de administración
            header("Location: ../admin.php");
            exit();
        } else {
            // Redirigir a la página de bienvenida si es un usuario normal
            header("Location: ../bienvenida.php");
            exit();
        }
            }else{
        //vamos a login.php, pero luego se pondra junto en el index.php
        echo '
            <script>
                alert("Usuario no existe, por favor verifique los datos introducidos");
                window.location = "../index.php";
            </script>
        ';
        exit();
    }


?>