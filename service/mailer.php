<?php
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
	$n = $_POST['name']; // HINT: use preg_replace() to filter the data
	$e = nl2br($_POST['email']);    
	$m = $_POST['message'];
	$to ="mohammad.kp8093@gmail.com,arashmilani22@gmail.com,info@gilandevs.ir";	
	$from = "contact@gilandevs.ir";
	$subject = 'New Email Recived From Contact Us Form';
	$name = '<b>نام:</b> '.$n . '<br />';
	$email = '<strong>ایمیل:</strong>'.$e  ; 
	$message =  $m;
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "error";
	}
}
?>