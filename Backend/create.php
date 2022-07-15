<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$Nombre = $data['Nombre'];
$Apellido = $data['Apellido'];
$Matricula = $data['Matricula'];
$Carrera = $data['Carrera'];

$q = mysqli_query($con, "INSERT INTO `student` (`Nombre`, `Apellido`, `Matricula`, `Carrera`) 
VALUES ('$Nombre', '$Apellido', '$Matricula', '$Carrera')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);