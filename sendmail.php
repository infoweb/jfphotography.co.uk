<?php
$email_from = $_POST["email"];
$email_to = "jackie@jfphotography.co.uk";
$name = $_POST["name"];
$message = $_POST["enquiry"];
$email_subject = "Website Enquiry";

$headers = "From: " . $email_from . "\n";
$headers .= "Reply-To: " . $email_from . "\n";

$message = "Name: ". $name . "\r\nMessage: " . $message;

ini_set("sendmail_from", $email_from);
$sent = mail($email_to, $email_subject, $message, $headers, "-f" .$email_from);

if ($sent) {
	header("Location: http://www.jfphotography.co.uk/contact/thankyou/");
} else {
	echo "There has been an error sending your comments. Please try later.";
}
?>