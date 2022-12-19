<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'email_validation.php';

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$subject = $_POST['subject'];
$message = stripslashes($_POST['message']);


$error = '';

// Check name

if(!$name)
{
$error .= 'Please enter your name.<br />';
}

// Check email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

if($email && !ValidateEmail($email))
{
$error .= 'Please enter a valid e-mail address.<br />';
}

// Check message (length)

if(!$message || strlen($message) < 15)
{
$error .= "Please enter your message. It should have at least 15 characters.<br />";
}

$mailbody = "
<html>

<head>
    <title>email</title>
</head>

<body>
    <table style='border-collapse: collapse;' width='50%' border='0' align='center' cellpadding='0' cellspacing='0'>
        <tr>
            <td colspan='1' align='center' valign='top'><img
                    style=' width:200px;max-width: 34vw; display: block;margin: 0 auto; margin-top: 15px; '
                    src='https://zgripcea-constantin.ro/img/header_logo_light.png'></td>
        </tr>

        <tr>
            <td width='50%' align='right'>&nbsp;</td>
            <td align='left'>&nbsp;</td>
        </tr>
        
        <tr style='width: 90vw;border: 3px solid rgba(0,0,0,0.25);display: block;margin: 10px 0;'>
            <td align='left' valign='top'
                style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>
                Name: ".$name." </td>
        </tr>


        <tr style='width: 90vw;border: 3px solid rgba(0,0,0,0.25);display: block;margin: 10px 0;'>
            <td align='left' valign='top'
                style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>
                Email: ".$from."</td>
        </tr>
        
        <tr style='width: 90vw;border: 3px solid rgba(0,0,0,0.25);display: block;margin: 10px 0;'>
            <td align='left' valign='top'
                style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>
                Subject: ".$subject."</td>
        </tr>
        
        <tr style='width: 90vw;border: 3px solid rgba(0,0,0,0.25);display: block;margin: 10px 0;'>
            <td align='left' valign='top'
                style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>
                Message: ".nl2br($comment)."</td>
        </tr>


    </table>
</body>

</html>
"


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$headers .= "From: ".$name." <".$email.">\r\n" ."Reply-To: ".$email."\r\n" ."X-Mailer: PHP/" . phpversion()

// $headers .= 'From: <'.$from.'>' . "\r\n";


if(!$error)
{
// $mail = mail( CONTACT_FORM, $subject, $mailbody, $headers );

echo(CONTACT_FORM)
echo" $subject, $mailbody, $headers "

// $mail = mail(
    
//     CONTACT_FORM, $subject, $message,
     
//     "From: ".$name." <".$email.">\r\n" ."Reply-To: ".$email."\r\n" ."X-Mailer: PHP/" . phpversion()
    
//     );


    

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>