<?php

function calcularPorcentaje($totalAcertadas, $testsTotales) {
    // Si no hay datos o el número de tests es 0, devolvemos 0%
    if ($testsTotales == 0 || $totalAcertadas == 0) {
        return 0;
    }
    // Realizamos el cálculo del porcentaje
    return ($totalAcertadas / $testsTotales) * 100;
}

?>