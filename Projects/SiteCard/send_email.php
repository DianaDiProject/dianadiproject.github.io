if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "diana1.vasilevskaya@gmail.com"; 
    $subject = "Новое сообщение от $name";
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
        error_log("Ошибка отправки сообщения: $to, $subject, $body, $headers"); // Добавьте это для отладки
    }
}
