<?php
 

  

 

   $companyName = $_POST['company_name'];
   $userName = $_POST['name'];
   $userEmail = $_POST['email'];
   $userMsg = $_POST['message'];

   $to = "haywoodnick@sky.com";
   $subject = "Personal site ".$companyName;
   $body = "";

   $body .= "company: ".$companyName."\r\n";
   $body .= "From: ".$userName."\r\n";
   $body .= "email: ".$userEmail."\r\n";
   $body .= "message: ".$userMsg."\r\n";
  
   mail($to,$subject,$body);

?> 





<!DOCTYPE html>




<html>
 


<head>
  
      <title>Confirmation</title>
  
      <link href="send.css" type="text/css" rel="stylesheet"/>
  
   
  </head>
  
  <body>
  
<div id="content">    
          
<h1 id="message1">Thank you for contacting me</h1>  

<h1 id="message2">I shall reply as soon as possible</h1>

</div>     

<button><a href="haywood2.html">Home</a></button>
  
  </body>
  
  
  </html>