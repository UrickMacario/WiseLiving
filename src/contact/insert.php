<?php
$name = $_POST['nombre'];
$phone = $_POST['telefono'];
$clientMail = $_POST['mail'];
//-------------------------------------------------
// 
//                  LEADBOX V1.9
//
//-------------------------------------------------

//webservice require
require_once "lib/nusoap.php";
 
$client = new nusoap_client("https://www.leadbox.mx/peninsula/webservice/food.wsdl", true);
$error  = $client->getError();
 
if ($error) {
    echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
}

//Inputs del webservice
$nombre_completo    = utf8_encode($name);
$email              = $clientMail;
$telefono           = $phone;
$fecha              = date("Y-m-d H:i:s");

//call webservice
$result = $client->call("food.getFood", array("nombre_completo" => "$nombre_completo", "email" => "$email", "telefono" => "$telefono", "fecha" => "$fecha", "status" => "1"));
 

//el resultado ideal es "Correcto"
if ($client->fault) {
    echo "<h2>Fault</h2><pre>";
    print_r($result);
    echo "</pre>";
} else {
    $error = $client->getError();
    if ($error) {
        echo "<h2>Error</h2><pre>" . $error . "</pre>";
    } else {
        echo "<h2>Main</h2>";
        echo $result;
    }
}
 
// show soap request and response
/*
echo "<h2>Request</h2>";
echo "<pre>" . htmlspecialchars($client->request, ENT_QUOTES) . "</pre>";
echo "<h2>Response</h2>";
echo "<pre>" . htmlspecialchars($client->response, ENT_QUOTES) . "</pre>";
*/

?>