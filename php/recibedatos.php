<?php

$test = 1;
// para comprobar si se recibe un post desde un AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
	//para almacenar los datos JSON recibidos en una variable
	$request = file_get_contents('php://input');
	// codificar datos para enviar de vuelta con json
	echo json_encode([
		"resultado" => "ok",
		"error" => 0,
		"testeo" => $request
		]);
} else {
	echo json_encode([
		"resultado" => "KO",
		"error" => 1,
		"testeo" => $test
		]);
}

?>