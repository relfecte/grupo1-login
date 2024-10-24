<?php
/* include 'conexion_db.php'; // Conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT); // Hashear la clave
    $admin = $_POST['admin']; // 1 para admin, 0 para usuario normal

    // Verificar si el email ya existe
    $query_check_email = "SELECT * FROM usuario WHERE usuario_email = ?";
    $stmt_check = $conexion->prepare($query_check_email);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();

    if ($result_check->num_rows > 0) {
        // Si el email ya existe, mostrar un mensaje
        echo '
            <script>
                alert("El email ya está en uso, por favor utiliza otro.");
                window.location = "crear_db.php"; // Redirigir de vuelta al formulario
            </script>
        ';
    } else {
        // Si el email no existe, proceder a la inserción
        $query = "INSERT INTO usuario (usuario_nombre, usuario_apellido, usuario_usuario, usuario_clave, usuario_email, usuario_admin) 
                  VALUES (?, ?, ?, ?, ?, ?)";
        
        $stmt = $conexion->prepare($query);
        $stmt->bind_param("sssssi", $nombre, $apellido, $usuario, $clave, $email, $admin);

        if ($stmt->execute()) {
            echo '
                <script>
                    alert("Usuario creado exitosamente.");
                    window.location = "../admin.php"; // Redirigir al panel de administración
                </script>
            ';
        } else {
            echo '
                <script>
                    alert("Error al crear el usuario.");
                    window.location = "crear_db.php"; // Redirigir de vuelta al formulario
                </script>
            ';
        }
    }

    $stmt_check->close();
    $stmt->close();
}

*/

include 'conexion_db.php'; // Conexión a la base de datos

/*// Inicializar variables para mantener los valores del formulario
$nombre = '';
$apellido = '';
$usuario = '';
$email = '';
$admin = 0; // Valor por defecto para cuenta de admin
*/
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $email = $_POST['email'];
    $clave = $clave =hash('sha512', $_POST['clave']); // Hashear la clave
    $admin = $_POST['admin']; // 1 para admin, 0 para usuario normal


    // Validaciones
    $email_pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"; // Email válido
    $nombre_pattern = "/^[a-zA-Z\s]{3,40}$/"; // Nombre debe tener entre 3 y 40 letras
    $apellido_pattern = "/^[a-zA-Z\s]{3,40}$/"; // Apellido debe tener entre 3 y 40 letras
    $usuario_pattern = "/^[a-zA-Z0-9]{3,20}$/"; // Usuario debe tener entre 3 y 20 caracteres alfanuméricos

    // Verificar que los campos no estén vacíos
    if (empty($nombre) || empty($apellido) || empty($email) || empty($usuario) || empty($_POST['clave'])) {
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
    
    // Verificar si el email ya existe
    $query_check_email = "SELECT * FROM usuario WHERE usuario_email = '$email'";
    $result_check_email = mysqli_query($conexion, $query_check_email);

    // Verificar si el nombre de usuario ya existe
    $query_check_usuario = "SELECT * FROM usuario WHERE usuario_usuario = '$usuario'";
    $result_check_usuario = mysqli_query($conexion, $query_check_usuario);


    // Comprobar si hay conflictos
    if (mysqli_num_rows($result_check_email) > 0 && mysqli_num_rows($result_check_usuario) > 0) {
        // Ambos están en uso
        echo '
            <script>
                alert("El email y el usuario ya están en uso, por favor utiliza otros.");
                
            </script>
        ';
    } elseif (mysqli_num_rows($result_check_email) > 0) {
        // Solo el email está en uso
        echo '
            <script>
                alert("El email ya está en uso, por favor utiliza otro.");
                
            </script>
        ';
    } elseif (mysqli_num_rows($result_check_usuario) > 0) {
        // Solo el nombre de usuario está en uso
        echo '
            <script>
                alert("El usuario ya está en uso, por favor utiliza otro.");
                
            </script>
        ';
    }  else {
        // Si el email no existe, proceder a la inserción
        $query = "INSERT INTO usuario (usuario_nombre, usuario_apellido, usuario_usuario, usuario_clave, usuario_email, usuario_admin) 
                  VALUES ('$nombre', '$apellido', '$usuario', '$clave', '$email', '$admin')";
        
        if (mysqli_query($conexion, $query)) {
            echo '
                <script>
                    alert("Usuario creado exitosamente.");
                    window.location = "../admin.php"; // Redirigir al panel de administración
                </script>
            ';
        } else {
            echo '
                <script>
                    alert("Error al crear el usuario: ' . mysqli_error($conexion) . '");
                    window.location = "../admin.php"; // Redirigir de vuelta al formulario
                </script>
            ';
        }
    }

    // Cerrar las conexiones
    mysqli_free_result($result_check_email);
    mysqli_free_result($result_check_usuario);
    mysqli_close($conexion);
}

include '../vistas/usuario_form.php'; // Reutilizar el formulario
?>

