<?php

if (session_status() == PHP_SESSION_NONE) { // Solo inicia si no hay sesión activa
    session_name("USUARIO"); // Cambia el nombre de la sesión
    session_start();
}
