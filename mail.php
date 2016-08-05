<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
    $subject = $_POST['subject'];
	$message = $_POST['message'];
		
	$headers = 'From: ' . $email . "\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    mail('gabfeitosa@gmail.com', $subject, nl2br($message), $headers );
    

?>