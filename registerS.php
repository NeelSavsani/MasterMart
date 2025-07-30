<?php
// Firebase DB URL
$firebaseUrl = "https://mastermart-19050-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

// Collect POST data
$name     = $_POST['uname'] ?? '';
$email    = $_POST['email'] ?? '';
// $password = password_hash($_POST['password'] ?? '', PASSWORD_DEFAULT);
$password = $_POST['password'] ?? '';
$phone    = $_POST['phone'] ?? '';

// Validation (optional but recommended)
if (empty($name) || empty($email) || empty($password) || empty($phone)) {
    echo "Error: All fields are required.";
    exit;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $firebaseUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$users = json_decode($response, true);

if ($users && is_array($users)) {
    foreach ($users as $user) {
        if (isset($user['email']) && strtolower($user['email']) === strtolower($email)) {
            echo "Error: Email already registered.";
            exit;
        }
    }
    $newId = max(array_map('intval', array_keys($users))) + 1;
}else{
    $newId = 1;
}

// Structure data like a record
$data = [
    "id" => $newId,
    "name" => $name,
    "email" => $email,
    "password" => $password,
    "phone" => $phone,
    "registration_date" => date("c"), // ISO timestamp
    "user_type" => "customer"
];

// Send data to Firebase
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $firebaseUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

// Output Firebase response
echo "User registered successfully.";
?>
