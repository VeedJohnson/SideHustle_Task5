
<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

$action = $_POST['submit'];
$receiver = $_POST['recepient'];
switch ($action) {
    case 'news_confirm':
        send_success_mail($receiver);
        break;
    default:
        echo "Error occurred";
        break;
}

function send_success_mail($recepient){
    $username = 'youthcoalition2020@gmail.com';
    $password = '2020youth';
    $name = 'YCP2020';
    $smtp_server = 'smtp.gmail.com';
    $smtp_port = 587;
    $mail = new PHPMailer(true);
    $subject = 'Newsletter Subscription Successful';
    $body = file_get_contents("email_template.html");
    try {
        $mail->isSMTP();
        $mail->SMTPSecure = "tls";// Send using SMTP
        $mail->Host       = $smtp_server;                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = $username;                     // SMTP username
        $mail->Password   = $password;// SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = $smtp_port;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        $mail->setFrom($username, $name);
        $mail->addAddress($recepient); 
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->send();
        echo 'sent';
    } catch (Exception $e) {
        echo "Error";
    }
}
?>