<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["e-mail"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    
    $to = "david.fmdrm@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $subject = "Nuevo mensaje de contacto desde el sitio web";
    $message_body = "Nombre: $name\n";
    $message_body .= "Correo electrónico: $email\n";
    $message_body .= "Teléfono: $phone\n";
    $message_body .= "Mensaje:\n$message\n";
    
    $headers = "From: $name <$email>";
    
    if (mail($to, $subject, $message_body, $headers)) {
        echo "¡Gracias por contactarnos! Tu mensaje ha sido enviado.";
    } else {
        echo "Lo sentimos, ha habido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    echo "Acceso denegado";
}
?>
