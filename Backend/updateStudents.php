<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$Nombre = $data['Nombre'];
$Apellido = $data['Apellido'];
$Matricula = $data['Matricula'];
$Carrera = $data['Carrera'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE `student` SET (`Nombre`, `Apellido`, `Matricula`, `Carrera`) 
VALUES ('$Nombre', '$Apellido', '$Matricula', '$Carrera') WHERE `id` = '{$id}' LIMIT 1");


if($q){
    $message['status'] = 'Success';   
}else{
    http_response_code(422);
    $message['status'] = 'Error';
}

echo json_encode($message);
echo mysqli_query($con);
