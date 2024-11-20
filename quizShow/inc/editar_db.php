<?php
include 'conexion_db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $result = mysqli_query($conexion, "SELECT * FROM usuario WHERE usuario_id = $id");
    $user = mysqli_fetch_assoc($result); // Datos del usuario a editar
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $usuario = $_POST['usuario'];
    $admin = $_POST['admin']; // Corregido: cambiar a $_POST['admin']
    $clave = $_POST['clave']; // Nueva clave proporcionada

    // Validaciones
    $email_pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"; // Email válido
    $nombre_pattern = "/^[a-zA-Z\s]{3,40}$/"; // Nombre debe tener entre 3 y 40 letras
    $apellido_pattern = "/^[a-zA-Z\s]{3,40}$/"; // Apellido debe tener entre 3 y 40 letras
    $usuario_pattern = "/^[a-zA-Z0-9]{3,20}$/"; // Usuario debe tener entre 3 y 20 caracteres alfanuméricos

    // Verificar que los campos no estén vacíos
    if (empty($nombre) || empty($apellido) || empty($email) || empty($usuario)) {
        echo '
            <script>
                alert("Por favor completa todos los campos.");
            </script>
        ';
        exit();
    }

    // Verificar el formato del email
    if (!preg_match($email_pattern, $email)) {
        echo '
            <script>
                alert("Ingresa un email válido.");
            </script>
        ';
        exit();
    }

    // Verificar el formato del nombre y apellido
    if (!preg_match($nombre_pattern, $nombre) || !preg_match($apellido_pattern, $apellido)) {
        echo '
            <script>
                alert("El nombre y el apellido deben contener entre 3 y 40 letras.");
            </script>
        ';
        exit();
    }

    // Verificar el formato del nombre de usuario
    if (!preg_match($usuario_pattern, $usuario)) {
        echo '
            <script>
                alert("El usuario debe contener entre 3 y 20 caracteres alfanuméricos.");
            </script>
        ';
        exit();
    }

    // Verificar si el email ya existe en otro usuario
    $query_check_email = "SELECT * FROM usuario WHERE usuario_email = '$email' AND usuario_id != $id";
    $result_check_email = mysqli_query($conexion, $query_check_email);

    // Verificar si el nombre de usuario ya existe en otro usuario
    $query_check_usuario = "SELECT * FROM usuario WHERE usuario_usuario = '$usuario' AND usuario_id != $id";
    $result_check_usuario = mysqli_query($conexion, $query_check_usuario);

    // Comprobar si hay conflictos
    if (mysqli_num_rows($result_check_email) > 0 && mysqli_num_rows($result_check_usuario) > 0) {
        echo '
            <script>
                alert("El email y el usuario ya están en uso, por favor utiliza otros.");
            </script>
        ';
    } elseif (mysqli_num_rows($result_check_email) > 0) {
        echo '
            <script>
                alert("El email ya está en uso, por favor utiliza otro.");
            </script>
        ';
    } elseif (mysqli_num_rows($result_check_usuario) > 0) {
        echo '
            <script>
                alert("El usuario ya está en uso, por favor utiliza otro.");
            </script>
        ';
    } else {
        // Si tanto el email como el usuario no están en uso, proceder con la actualización
        $query = "UPDATE usuario SET usuario_nombre='$nombre', usuario_apellido='$apellido', usuario_email='$email', usuario_usuario='$usuario', usuario_admin='$admin'";

        if (!empty($clave)) {
            $clave =hash('sha512', $clave);
            error_log("Clave hasheada antes de guardar: " . $hashed_clave); // Para ver el valor hasheado
            $query .= ", usuario_clave='$clave'"; // Esto es correcto.
        }

        $query .= " WHERE usuario_id = $id"; // Solo una cláusula WHERE.

        // Ejecutar la consulta
        if (mysqli_query($conexion, $query)) {
            echo '
                <script>
                    alert("Usuario actualizado exitosamente.");
                    window.location = "../admin.php";
                </script>
            ';
        } else {
            echo '
                <script>
                    alert("Error al actualizar el usuario: ' . mysqli_error($conexion) . '");
                    window.location = "../admin.php";
                </script>
            ';
        }
    }

    // Liberar resultados y cerrar conexión
    mysqli_free_result($result_check_email);
    mysqli_free_result($result_check_usuario);
    mysqli_close($conexion);
}

// Variables por defecto para el formulario
$nombre = isset($user['usuario_nombre']) ? $user['usuario_nombre'] : '';
$apellido = isset($user['usuario_apellido']) ? $user['usuario_apellido'] : '';
$usuario = isset($user['usuario_usuario']) ? $user['usuario_usuario'] : '';
$email = isset($user['usuario_email']) ? $user['usuario_email'] : '';
$admin = isset($user['usuario_admin']) ? $user['usuario_admin'] : 0; // Valor por defecto

include '../vistas/usuario_form.php'; // Reutilizar el formulario
?>
