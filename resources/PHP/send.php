<?php 
 $to = $_REQUEST['to'];
 $from = $_REQUEST['from']; 
 $message = $_REQUEST['content']; 
 $subject = $_REQUEST['subject']; 
 $header = "From: <".$from.">" ."\r\n"; 
 $send = @mail($to, $subject, $message, $header); 
 if(!$send){ die(); } 
  $header = "From: <info@shaibiginfosystem.com>" ."\r\n";
  $subject="Thank you for contacting Shaibig Infosystems & Solutions";
  $message="Dear Customer,\r\n\r\nGreetings to you,\r\n\r\nThanks for connecting with us. Our customers are the stepping stone of our success, Our customer relation teams are working for your request. Our Team will be connect you as soon as possible with best solutions for your query.\r\n\r\nWe serve you better , 'We Give Wings To Your Idea'.\r\n\r\nNB: Make sure your contact details are true (E-mail & Telephone), We will connect you through either any of these.\r\n\r\nWith Regards,\r\n\r\nCustomer Support Team,\r\nShaibig Info-systems and solutions\r\nweb : www.shaibiginfosystem.com\r\nEmail : info@shaibiginfosystem.com\r\n        shaibiginfosystems@gmail.com\r\n\r\nMob : +91 7411583224\r\n      +91 8147322283\r\n      +91 7411441496";
 $send = @mail($from, $subject, $message, $header); 
 ?> 
 