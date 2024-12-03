<?php
// Define la raíz del proyecto
define('BASE_PATH', __DIR__ . '/');

// Define rutas comunes
// Carpeta inc
define('INC_PATH', BASE_PATH . 'inc/');
define('ACTIONS_PATH', INC_PATH . 'actions/');
define('LOGIN_PATH', INC_PATH . 'login/');

// Carpeta vistas
define('VISTAS_PATH', BASE_PATH . 'vistas/');


// Configuración de base de datos (puedes añadir más si es necesario)
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'usuariosdb');
?>