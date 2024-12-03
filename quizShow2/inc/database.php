<?php

$con= mysqli_connect("localhost","root","","usuariosdb") or die("Error al conectar con la base de datos");

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

    $query = "
        INSERT INTO usuario (
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

    $ejecutar = mysqli_query($con, $query);

    if ($ejecutar) {
        return true;
    }else {
        return false;
    }
}

// INICIAR SESIÓN
function iniciarSesion($con, $email, $clave) {
    $clave_encriptada = hash('sha512', $clave);
    $query = "SELECT * FROM usuario WHERE usuario_email = '$email' AND usuario_clave = '$clave_encriptada'";
    $resultado = mysqli_query($con, $query);

    if ($resultado && obtener_num_filas($resultado) > 0) {
        return obtener_resultados($resultado);
    }
    return false;
}

function obtener_resultados($resultado) {
    return mysqli_fetch_assoc($resultado);
}








?>