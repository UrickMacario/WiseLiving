<?php 

$type = filter_var($_POST['tipoDepartamentos'], FILTER_SANITIZE_STRING);
$where = filter_var($_POST['dondeEncontraste'], FILTER_SANITIZE_STRING);
$name = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['telefono'], FILTER_SANITIZE_INT);
$clientMail = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING);

$fullMessage = <<<HTML
Nombre: $name<br/>
Tipo de Departamento: $type recamaras<br/>
Donde nos Conociste: $where<br/>
Teléfono: $phone<br/>
Email: $clientMail<br/>
Mensaje: $message<br/>
HTML;

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'To: Wise Living <contacto@wiseliving.com.mx>';
$headers[] = 'From:'. $name .' <'. $clientMail .'>';

if( 
    !mail( 'contacto@wiseliving.com.mx', 'Contacto', $fullMessage, 
    implode("\r\n", $headers) ) ){
    header('HTTP/1.1 500 Internal Server Error');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Ha ocurrido un error, intenta nuevamente más tarde', 'code' => 1337)));
}else{
    echo 'Hemos recibido tus datos, nos pondremos en contacto contigo a la brevedad.';
}