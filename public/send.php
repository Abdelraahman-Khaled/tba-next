<?php
header('Content-Type: application/json; charset=UTF-8');
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed.']);
    exit;
}

$data = filter_input_array(INPUT_POST, [
    'fname' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
    'email' => FILTER_VALIDATE_EMAIL,
    'phone' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
    'message' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
]);

if (empty($data['fname']) || empty($data['email']) || empty($data['phone']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'جميع الحقول مطلوبة.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.tba.sa';
    $mail->SMTPAuth = true;
    $mail->Username = 'Trade@tba.sa';
    $mail->Password = 'iuvpannymmitytiw';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom('Trade@tba.sa', 'Website Contact Form');
    $mail->addAddress('Trade@tba.sa', 'TBA');
    $mail->addReplyTo($data['email'], $data['fname']);

    $mail->isHTML(true);
    $mail->Subject = "رسالة جديدة من نموذج الاتصال";
    $mail->Body = "
        <h1>رسالة جديدة من الموقع</h1>
        <p><strong>الاسم:</strong> {$data['fname']}</p>
        <p><strong>البريد الإلكتروني:</strong> {$data['email']}</p>
        <p><strong>رقم الهاتف:</strong> {$data['phone']}</p>
        <p><strong>الرسالة:</strong><br>{$data['message']}</p>
    ";

    $mail->send();
    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'فشل إرسال الرسالة: ' . $mail->ErrorInfo
    ]);
}