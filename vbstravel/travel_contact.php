<?php
// reCAPTCHA API keys
$siteKey = '6LcM0YopAAAAAFhIxHEWtF8K84-0B9sF59gPr48D';
$secretKey = '6LcM0YopAAAAAAjzK3Q6vWHcUAteZS4uIilRgkXB'; // Replace with your secret key from Google

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // reCAPTCHA response from the form
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // Verify the reCAPTCHA response
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secretKey . "&response=" . $recaptchaResponse);
    $responseKeys = json_decode($response, true);

    // If the reCAPTCHA verification failed, stop processing and show an error message
    if (!$responseKeys['success']) {
        echo json_encode(array('status' => 'error', 'message' => 'reCAPTCHA verification failed, please try again.'));
        exit;
    }

    // Collect form data
    $to = "connect@valiantbusinesssolutions.com"; // Receiver's email address
    $subject = "New Lead From Travel Website Pages";
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $purpose = $_POST['purpose'];
    $message = $_POST['message'];

    // Compose the email message
    $body = "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Purpose: $purpose\n";
    $body .= "Message: $message\n";

    // Send email
    if (mail($to, $subject, $body)) {
        echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent successfully.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message. Please try again later.'));
    }
} else {
    header("HTTP/1.0 405 Method Not Allowed");
}
?>