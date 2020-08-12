<?php
header("Access-Controll-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//if($_SERVER['HTTP_REFERER'] === 'https://planagency.ru/'){
if(1 === 1){

  require '../composer/vendor/autoload.php';

  $company = isset($_GET['company']) ? $_GET['company'] : null;
  $name = isset($_GET['name']) ? $_GET['name'] : null;
  $job = isset($_GET['job']) ? $_GET['job'] : null;
  $email = isset($_GET['email']) ? $_GET['email'] : null;
  $phone = isset($_GET['phone']) ? $_GET['phone'] : null;

  $mail = new PHPMailer(true);

  try{      //Server settings
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'mail.hosting.reg.ru';                    // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
      $mail->Username   = 'form@mail.planagency.ru';                     // SMTP username
      $mail->Password   = 'T9h0T6v1';                               // SMTP password
      $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
      $mail->Port       = 465;                                    // TCP port to connect to

      //Recipients
      $mail->setFrom('form@mail.planagency.ru', 'Как В Кино Contact Form');
      $mail->addAddress('goooglemaaan@gmail.com', 'GoogleMan');     // Add a recipient

      // Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Новая заявка на сайте Как В Кино';
      $mail->Body    = '<ul style="list-style: none;">';
      $mail->Body   .= '<li>'. $company  .'</li>';
      $mail->Body   .= '<li>'. $name  .'</li>';
      $mail->Body   .= '<li>'. $job  .'</li>';
      $mail->Body   .= '<li><a href="mailto:'. $email  .'"></a>'. $email .'</li>';
      $mail->Body   .= '<li><a href="tel:'. $phone  .'"></a>'. $phone .'</li>';
      $mail->Body   .= '</ul>';


      $mail->send();
      echo 'Message has been sent';
  } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}else{
  header('HTTP/2.0 403 Forbidden');
  echo "access denied";
}
?>
