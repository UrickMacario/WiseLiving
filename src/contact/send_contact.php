<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$type = filter_var($_POST['tipoDepartamentos'], FILTER_SANITIZE_STRING);
$where = filter_var($_POST['dondeEncontraste'], FILTER_SANITIZE_STRING);
$name = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
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

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'rog.shadow.federer@gmail.com';                 // SMTP username
    $mail->Password = 'RogFed@2015';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($clientMail, $name);
    $mail->addAddress('rogelio@rogfed.ninja', 'Wise Living');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->setLanguage('es', '../vendor/phpmailer/language/phpmailer.lang-es.php');
    $mail->Subject = 'Contacto Página Web';
    $mail->Body    = $fullMessage;
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}