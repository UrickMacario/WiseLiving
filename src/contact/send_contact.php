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
    $mail->Host = 'smtp.mailgun.org';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'postmaster@mg.wiseliving.com.mx';                 // SMTP username
    $mail->Password = '0ac435d4134b1c6de8e31e7bb50eb440-8889127d-4ec721b0';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted

    //Recipients
    $mail->setFrom($clientMail, $name);
    $mail->addAddress('contacto@wiseliving.com.mx', 'WiseLiving');     // Add a recipient
    // $mail->addAddress('rogelio@rogfed.ninja', 'Wise Living');

    //Content
    $mail->WordWrap = 50;
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->setLanguage('es', '../vendor/phpmailer/language/phpmailer.lang-es.php');
    $mail->Subject = 'Contacto Página Web';
    $mail->Body    = $fullMessage;
    if(!$mail->send()){
        echo 'Error: ', $mail->ErrorInfo;
        die();
    }
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}