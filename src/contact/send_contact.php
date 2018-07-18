<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$name = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$lastName = filter_var($_POST['apellido'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
$clientMail = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING);
$time = filter_var($_POST['time'], FILTER_SANITIZE_STRING);
$date = filter_var($_POST['date'], FILTER_SANITIZE_STRING);

$fullMessage = <<<HTML
Nombre: $name $lastName<br/>
Teléfono: $phone<br/>
Email: $clientMail<br/>
Fecha y Hora de contacto: $date - $time<br/>
Mensaje: $message<br/>
HTML;
                             // Passing `true` enables exceptions
try {
    $mail = new PHPMailer; 
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'rog.shadow.federer@gmail.com';                 // SMTP username
    $mail->Password = 'RogFed@2015';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($clientMail, $name);
    $mail->addAddress('contacto@wiseliving.com.mx', 'Wise Living');     // Add a recipient

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