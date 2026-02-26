<?php

$token = "8646111242:AAEzwLpsg0-yRmp6wbONx16aYy7CJPWb_xE";
$api = "https://api.telegram.org/bot$token/";

$update = json_decode(file_get_contents("php://input"), TRUE);
$message = $update["message"];
$chat_id = $message["chat"]["id"];
$text = $message["text"];

// Text Reply
if($text == "/start"){
    file_get_contents($api."sendMessage?chat_id=$chat_id&text=Welcome to Private Bot 🔥");
}

// File Receive
if(isset($message["document"])){
    $file_id = $message["document"]["file_id"];
    file_get_contents($api."sendMessage?chat_id=$chat_id&text=File Received ✅");
}

?>