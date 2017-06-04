<?php

$name = $_POST['name'];
$email = $_POST['email'];
$to = 'rafaelmelonweb@gmail.com';
$subject = 'New contact from rafaelmelon.es';

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=404.htm\">";
  exit;
}

// prepare email body text
$body .= "Information:<br/><br/>";
$body .= "Name: ".$name."<br/><br/>";
$body .= "Email: ".$email."<br/><br/>";

$header = "From: ". $name . " <" . $email . ">\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// send email
$success = mail($to, $subject, $body, $header);

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thanks.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=404.htm\">";
}
?>
