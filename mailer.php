<?php
if( isset($_POST['n']) && isset($_POST['e']) ){
	$n = $_POST['n']; // HINT: use preg_replace() to filter the data
	$e = nl2br($_POST['e']);    
	$to ="mohammad.kp8093@gmail.com,alihoushngi@gmail.com,info@diba.studio";	
	$from = "mohammad.kp8093@gmail.com";
	$subject = 'درخواست مشاوره دریافت شد!';
	$name = '<b>نام:</b> '.$n . '<br />';
	$email = '<strong>ایمیل:</strong>'.$e  ; 
	$message = $name . $email;
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "سرور پاسخگو نبود لطفا بعدا دوباره تلاش کنید";
	}
}
?>