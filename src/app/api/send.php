<?php
// Prüfen, ob ein gültiges Formular übermittelt wurde
if (isset($_POST['submit_btn'])) {

    // Formulardaten in Variablen speichern
    $vorname = $_POST['vorname'];
    $nachname = $_POST['nachname'];
    $email = $_POST['email'];
    $from = 'info@cactuscycles.de';
    $message = $_POST['nachricht'];
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // Dein geheimer Schlüssel von Google Console
    $secret_key = '6Lf5nTQlAAAAAFd--Rp6oEY4lHewwDkzgKZFrD_F';

    // Überprüfe die reCAPTCHA V2-Antwort
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => $secret_key,
        'response' => $recaptcha_response
    );
    $options = array(
        'http' => array (
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $verify = file_get_contents($url, false, $context);
    $captcha_success = json_decode($verify)->success;

    // Wenn reCAPTCHA V2 erfolgreich ist, sende E-Mail
    if ($captcha_success) {
        // Sende E-Mail an info@cactuscycles.de
        $to = 'info@cactuscycles.de';
        $subject = 'Neue Nachricht von deiner Website';
        $message_body = "Name: $vorname $nachname\nE-Mail: $email\nNachricht:\n$message";
        $headers = "From: $vorname $nachname <$email>\r\nReply-To: $email\r\n";
        $headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";   
        mail($to, $subject, $message_body, $headers);

        // Sende automatische Antwort an Absender
        $to = $email;
        $subject = 'Vielen Dank für deine Nachricht';
        $message_body = "Liebe/r $vorname,\n\nVielen Dank für deine Nachricht. Wir werden uns in Kürze bei dir melden.\n\nBeste Grüße,\nDein Cactus Cycles-Team";
        $headers = "";
        $headers .= "From: Cactus Cycles <info@cactuscycles.de> \r\n";
        $headers .= "Reply-To:" . $from . "\r\n" ."X-Mailer: PHP/" . phpversion();
        $headers .= 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";   
        
        mail($to, $subject, $message_body, $headers);

        // Zeige Erfolgsmeldung an
        echo '<script>alert("Vielen Dank für deine Nachricht. Wir werden uns in Kürze bei dir melden.");window.location.href="/";</script>';
    } else {
        // Zeige Fehlermeldung an, wenn reCAPTCHA V2 nicht erfolgreich ist
        echo '<script>alert("Ungültige reCAPTCHA. Bitte versuche es erneut.");window.location.href="/";</script>';
    }
}
?>
