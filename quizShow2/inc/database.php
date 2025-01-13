<?php

$con= mysqli_connect("localhost","root","","quizshow") or die("Error al conectar con la base de datos");

//REGISTRO USUARIO
function verificarDuplicado($con, $tabla, $campo, $valor) {
    $query = "SELECT * FROM $tabla WHERE $campo = '$valor'";
    $resultado = mysqli_query($con, $query);

    if (obtener_num_filas($resultado) > 0) {
        return true;
    }else {
        return false;
    }
}

function obtener_num_filas($resultado){
	return mysqli_num_rows($resultado);
}

function registrarUsuario($con, $nombre, $apellido, $usuario, $clave, $email) {
    // Encriptar clave
    $clave_encriptada = hash('sha512', $clave);

    // Insertar usuario en la tabla usuarios
    $query = "
        INSERT INTO usuarios (
            usuario_nombre,
            usuario_apellido,
            usuario_usuario,
            usuario_clave,
            usuario_email,
            usuario_admin
        ) VALUES (
            '$nombre',
            '$apellido',
            '$usuario',
            '$clave_encriptada',
            '$email',
            '0'
        )";

    // Ejecutar la consulta de inserción
    $ejecutar = mysqli_query($con, $query);

    if ($ejecutar) {
        // Obtener el ID del nuevo usuario
        $usuario_id = mysqli_insert_id($con);

        // Llamar a la función para insertar las calificaciones iniciales
        if (crearCalificacionInicialCompleta($con, $usuario_id)) {
            return true;  // Usuario registrado y calificaciones iniciales insertadas correctamente
        } else {
            return false; // Error al insertar las calificaciones
        }
    } else {
        return false; // Error al insertar el usuario
    }
}



// INICIAR SESIÓN
function iniciarSesion($con, $email, $clave) {
    $clave_encriptada = hash('sha512', $clave);
    $query = "SELECT * FROM usuarios WHERE usuario_email = '$email' AND usuario_clave = '$clave_encriptada'";
    $resultado = mysqli_query($con, $query);

    if ($resultado && obtener_num_filas($resultado) > 0) {
        return obtener_resultados($resultado);
    }
    return false;
}

function obtener_resultados($resultado) {
    return mysqli_fetch_assoc($resultado);
}


// Función para obtener todos los usuarios (SELECT)
function obtenerUsuarios($con) {
    $query = "SELECT * FROM usuarios";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

function obtenerUsuarioPorID($con, $usuario_id) {
    $query = "SELECT * FROM usuarios WHERE usuario_id = '$usuario_id'";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

// Obtener todas las preguntas
function obtenerPreguntas($con) {
    $query = "SELECT * FROM preguntas";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

// Obtener todas las calificaciones
function obtenerCalificaciones($con) {
    $query = "SELECT * FROM calificaciones";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

function obtenerCalificacionesConUsuario($con){
    // Obtener todas las calificaciones con el nombre de usuario
    $query = "
        SELECT calificaciones.*, usuarios.usuario_usuario 
        FROM calificaciones 
        INNER JOIN usuarios ON calificaciones.usuario_id = usuarios.usuario_id
    ";
    $calificaciones = mysqli_query($con, $query);
    return $calificaciones;
}

// Función para eliminar un usuario
function eliminarUsuario($con, $id) {
    $query = "DELETE FROM usuarios WHERE usuario_id = $id";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

// Función para eliminar una pregunta
function eliminarPregunta($con, $pregunta_id) {
    $query = "DELETE FROM preguntas WHERE pregunta_id = $pregunta_id";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

// Función para eliminar una calificación
function eliminarCalificacion($con, $calificacion_id) {
    $query = "DELETE FROM calificaciones WHERE calificacion_id = $id";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}


// Función para obtener todas las categorías de preguntas
function obtenerCategorias($con) {
    $query = "SELECT DISTINCT categoria FROM preguntas";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

// Función para obtener preguntas filtradas por categoría
function obtenerPreguntasPorCategoria($con, $categoria) {
    $query = "SELECT * FROM preguntas WHERE categoria = '$categoria'";
    $resultado = mysqli_query($con, $query);
    return $resultado;
}

// Función para obtener preguntas filtradas por categoría de manera aleatoria
function obtenerPreguntasPorCategoriaRandom($con, $categoria) {
    // Usamos una sentencia preparada para evitar inyecciones SQL
    $query = "SELECT * FROM preguntas WHERE categoria = ? ORDER BY RAND() LIMIT 10";
    $stmt = mysqli_prepare($con, $query);

    // Verificamos si la sentencia se preparó correctamente
    if ($stmt === false) {
        die('Error al preparar la consulta: ' . mysqli_error($con));
    }

    // Vinculamos el parámetro de categoría
    mysqli_stmt_bind_param($stmt, 's', $categoria);

    // Ejecutamos la consulta
    mysqli_stmt_execute($stmt);

    // Obtenemos el resultado
    $resultado = mysqli_stmt_get_result($stmt);

    // Cerramos la sentencia
    mysqli_stmt_close($stmt);

    // Retornamos el resultado
    return $resultado;
}


function crearUsuario($con, $nombre, $apellido, $usuario, $clave, $email, $admin) {
    // Encriptar clave
    $clave_encriptada = hash('sha512', $clave);

    // Insertar usuario en la tabla usuarios
    $query = "
        INSERT INTO usuarios (
            usuario_nombre,
            usuario_apellido,
            usuario_usuario,
            usuario_clave,
            usuario_email,
            usuario_admin
        ) VALUES (
            '$nombre',
            '$apellido',
            '$usuario',
            '$clave_encriptada',
            '$email',
            '$admin'
        )";

    // Ejecutar la consulta de inserción
    $ejecutar = mysqli_query($con, $query);

    if ($ejecutar) {
        // Obtener el ID del nuevo usuario
        $usuario_id = mysqli_insert_id($con);

        // Insertar las calificaciones iniciales
        if (crearCalificacionInicialCompleta($con, $usuario_id)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


function actualizarUsuario($con, $usuario_id, $nombre, $apellido, $usuario, $email, $admin, $clave = null) {
    if (!empty($clave)) {
        $clave_encriptada = hash('sha512', $clave);
        $query = "UPDATE usuarios SET 
                    usuario_nombre = '$nombre', 
                    usuario_apellido = '$apellido', 
                    usuario_usuario = '$usuario', 
                    usuario_clave = '$clave_encriptada', 
                    usuario_email = '$email', 
                    usuario_admin = '$admin' 
                  WHERE usuario_id = '$usuario_id'";
    } else {
        $query = "UPDATE usuarios SET 
                    usuario_nombre = '$nombre', 
                    usuario_apellido = '$apellido', 
                    usuario_usuario = '$usuario', 
                    usuario_email = '$email', 
                    usuario_admin = '$admin' 
                  WHERE usuario_id = '$usuario_id'";
    }
    $ejecutar = mysqli_query($con, $query);

    if ($ejecutar) {
        return true;
    }else {
        return false;
    }
}

function crearPregunta($con, $categoria, $pregunta, $opcion_correcta, $opcion2, $opcion3, $opcion4) {
    // Preparar la consulta de inserción en la tabla preguntas
    $query = "
        INSERT INTO preguntas (
            categoria,
            pregunta,
            opcion_correcta,
            opcion2,
            opcion3,
            opcion4
        ) VALUES (
            '$categoria',
            '$pregunta',
            '$opcion_correcta',
            '$opcion2',
            '$opcion3',
            '$opcion4'
        )";

    // Ejecutar la consulta para insertar la pregunta
    $ejecutar = mysqli_query($con, $query);

    if ($ejecutar) {
        // Llamar a la función para crear calificación nueva para la categoría
        if (crearCalificacionNueva($con, $categoria)) {
            return true; // Si la creación de calificación fue exitosa
        } else {
            return false; // Si hubo algún problema con la creación de la calificación
        }
    } else {
        return false; // Error al insertar la pregunta
    }
}



function obtenerPreguntaPorID($conexion, $pregunta_id) {
    $pregunta_id = mysqli_real_escape_string($conexion, $pregunta_id);
    $query = "SELECT * FROM preguntas WHERE pregunta_id = '$pregunta_id'";
    $resultado = mysqli_query($conexion, $query);

    if ($resultado && mysqli_num_rows($resultado) > 0) {
        return mysqli_fetch_assoc($resultado); // Devuelve la fila de la pregunta
    } else {
        return null; // Si no se encuentra la pregunta, retorna null
    }
}

function actualizarPregunta($conexion, $pregunta_id, $categoria, $pregunta, $opcion_correcta, $opcion2, $opcion3, $opcion4) {
    // Obtener la categoría actual de la pregunta antes de actualizarla
    $query_categoria_actual = "SELECT categoria FROM preguntas WHERE pregunta_id = '$pregunta_id'";
    $resultado_categoria = mysqli_query($conexion, $query_categoria_actual);
    $categoria_actual = mysqli_fetch_assoc($resultado_categoria)['categoria'];

    // Actualizar la pregunta
    $query = "UPDATE preguntas SET 
              categoria = '$categoria', 
              pregunta = '$pregunta', 
              opcion_correcta = '$opcion_correcta', 
              opcion2 = '$opcion2', 
              opcion3 = '$opcion3', 
              opcion4 = '$opcion4' 
              WHERE pregunta_id = '$pregunta_id'";

    // Ejecutar la consulta para actualizar la pregunta
    $resultado = mysqli_query($conexion, $query);

    if ($resultado) {
        // Si la categoría ha cambiado, actualizar las calificaciones
        if ($categoria != $categoria_actual) {
            // Llamar a la función para crear calificaciones para la nueva categoría
            if (!crearCalificacionNueva($conexion, $categoria)) {
                return false; // Si la creación de las calificaciones falla, retornar false
            }
        }

        return true; // Si todo es exitoso
    } else {
        return false; // Si la actualización de la pregunta falla, retornar false
    }
}


function crearCalificacionInicialCompleta($con, $usuario_id) {
    // Insertar los valores iniciales en la tabla calificaciones
    $query_calificaciones = "
        INSERT INTO calificaciones (
            usuario_id,
            tests_totales,
            preguntas_acertadas_totales,
            tests_tipo_general,
            preguntas_acertadas_tipo_general,
            tests_tipo_musica,
            preguntas_acertadas_tipo_musica,
            tests_tipo_deportes,
            preguntas_acertadas_tipo_deportes,
            tests_tipo_programacion,
            preguntas_acertadas_tipo_programacion,
            tests_tipo_juegos,
            preguntas_acertadas_tipo_juegos,
            tests_tipo_peliculas,
            preguntas_acertadas_tipo_peliculas
        ) VALUES (
            '$usuario_id',
            0, -- tests_totales
            0, -- preguntas_acertadas_totales
            0, -- tests_tipo_general
            0, -- preguntas_acertadas_tipo_general
            0, -- tests_tipo_musica
            0, -- preguntas_acertadas_tipo_musica
            0, -- tests_tipo_deportes
            0, -- preguntas_acertadas_tipo_deportes
            0, -- tests_tipo_programacion
            0, -- preguntas_acertadas_tipo_programacion
            0, -- tests_tipo_juegos
            0, -- preguntas_acertadas_tipo_juegos
            0, -- tests_tipo_peliculas
            0  -- preguntas_acertadas_tipo_peliculas
        )
    ";

    // Ejecutar la consulta
    $ejecutar_calificaciones = mysqli_query($con, $query_calificaciones);

    // Verificar si la inserción fue exitosa
    return $ejecutar_calificaciones ? true : false;
}

function crearCalificacionNueva($con, $usuario_id) {
    // Verificar si las columnas correspondientes a cada categoría ya existen en la tabla calificaciones
    $query_comprobacion = "
        SELECT COLUMN_NAME
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_NAME = 'calificaciones' 
        AND (COLUMN_NAME LIKE 'tests_tipo_%' OR COLUMN_NAME LIKE 'preguntas_acertadas_%')
    ";

    $resultado_comprobacion = mysqli_query($con, $query_comprobacion);

    // Si no existen las columnas, agregarlas
    if (mysqli_num_rows($resultado_comprobacion) == 0) {
        // Obtener todas las categorías de la tabla preguntas
        $query_categorias = "SELECT DISTINCT categoria FROM preguntas";
        $resultado_categorias = mysqli_query($con, $query_categorias);

        while ($categoria = mysqli_fetch_assoc($resultado_categorias)) {
            $categoria_nombre = $categoria['categoria'];

            // Agregar las columnas correspondientes a esta categoría en la tabla calificaciones
            $query_calificaciones = "
                ALTER TABLE calificaciones
                ADD COLUMN tests_tipo_$categoria_nombre INT(11) DEFAULT 0,
                ADD COLUMN preguntas_acertadas_$categoria_nombre INT(11) DEFAULT 0
            ";

            $ejecutar_calificaciones = mysqli_query($con, $query_calificaciones);
            if (!$ejecutar_calificaciones) {
                return false; // Si hay algún error en la creación de las columnas, retornar false
            }
        }
    }

    // Insertar una fila de calificación inicial para el nuevo usuario
    $query_insert_calificacion = "
        INSERT INTO calificaciones (
            usuario_id, 
            tests_totales, 
            preguntas_acertadas_totales
        ) VALUES (
            '$usuario_id', 
            0, 
            0
        )
    ";

    // Ejecutar la inserción
    $ejecutar_calificacion = mysqli_query($con, $query_insert_calificacion);

    // Si la inserción fue exitosa, devolver true
    return $ejecutar_calificacion ? true : false;
}


function obtenerCalificacionTotal($con, $usuarioId) {
    // Consulta SQL para obtener el total de preguntas acertadas y el total de tests de un usuario
    $query = "
        SELECT preguntas_acertadas_totales , tests_totales
        FROM calificaciones
        WHERE usuario_id = $usuarioId
    ";
    
    $result = mysqli_query($con, $query);

    // Verificar si la consulta fue exitosa y si se obtuvieron resultados
    if ($result && mysqli_num_rows($result) > 0) {
        return mysqli_fetch_assoc($result); // Retorna los resultados como un array asociativo
    } else {
        // Si no se encuentran registros, retorna un array con valores por defecto
        return ['preguntas_acertadas_totales' => 0, 'tests_totales' => 0];
    }
}



function cerrar_conexion($con){
	mysqli_close($con);
}







?>