<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "raineriussamson@gmail.com"; // Email address to receive notifications
    $subject = "Document Request Submitted";
    
    $idNumber = $_POST["idNumber"];
    $surname = $_POST["surname"];
    $firstName = $_POST["firstName"];
    $middleName = $_POST["middleName"];
    $documentRequest = $_POST["documentRequest"];
    $purpose = $_POST["purpose"];
    $controlNumber = $_POST["controlNumber"];
    $orNumber = $_POST["orNumber"];
    $dateRequested = $_POST["dateRequested"];
    $dateIssued = $_POST["dateIssued"];
    
    $message = "ID Number: $idNumber\n";
    $message .= "Surname: $surname\n";
    $message .= "First Name: $firstName\n";
    $message .= "Middle Name: $middleName\n";
    $message .= "Document Request: $documentRequest\n";
    $message .= "Purpose: $purpose\n";
    $message .= "Control Number: $controlNumber\n";
    $message .= "OR Number: $orNumber\n";
    $message .= "Date Requested: $dateRequested\n";
    $message .= "Date Issued: $dateIssued\n";
    
    $headers = "From: sender@example.com"; // Replace with your email address
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
} else {
    echo "Invalid request";
}
?>
