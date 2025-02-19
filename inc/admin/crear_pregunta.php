<?php
include_once '../database.php'; // Asegúrate de que el archivo de conexión esté incluido
include_once '../functions.php'; // Incluir las funciones de validación

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario
    $categoria = $_POST['categoria'];
    $pregunta = $_POST['pregunta'];
    $opcion_correcta = $_POST['opcion_correcta'];
    $opcion2 = $_POST['opcion2'];
    $opcion3 = $_POST['opcion3'];
    $opcion4 = $_POST['opcion4'];

    // Validaciones
    $patron_categoria = "/^[a-zA-Z]{3,40}$/";
    $patron_pregunta = "/^[a-zA-Z0-9\s]{1,100}$/";
    $patron_opcion = "/^[a-zA-Z0-9\s]{1,40}$/";

    validarPatrones($patron_categoria, $categoria, "La categoría debe tener entre 3 y 40 caracteres alfanuméricos.");
    validarPatrones($patron_pregunta, $pregunta, "La pregunta debe tener entre 1 y 100 caracteres.");
    validarPatrones($patron_opcion, $opcion_correcta, "La opción correcta debe tener entre 1 y 100 caracteres.");
    validarPatrones($patron_opcion, $opcion2, "La opción 2 debe tener entre 1 y 100 caracteres.");
    validarPatrones($patron_opcion, $opcion3, "La opción 3 debe tener entre 1 y 100 caracteres.");
    validarPatrones($patron_opcion, $opcion4, "La opción 4 debe tener entre 1 y 100 caracteres.");

    if (verificarDuplicado($con, 'preguntas', 'pregunta', $pregunta)) {
        redirigirConMensaje("Esta pregunta ya está registrada.", '../admin.php?section=preguntas');
        exit;
    }

    // Crear la pregunta
    if (crearPregunta($con, $categoria, $pregunta, $opcion_correcta, $opcion2, $opcion3, $opcion4)) {
        redirigirConMensaje("Pregunta creada correctamente.", '../admin.php?section=preguntas');
        exit;
    } else {
        redirigirConMensaje("Error al crear la pregunta. Inténtalo de nuevo.", '../admin.php?section=preguntas');
    }

}

?>