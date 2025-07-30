<?php
$firebaseUrl = "https://mastermart-19050-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $firebaseUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$users = json_decode($response, true);

$found = false;
foreach ($users as $userId => $user) {
    if ($user['email'] === $email && $user['password'] === $password) {
        $found = true;
        break;
    }
}

if ($found) {
    echo "success";
} else {
    echo "Error: Invalid credentials";
}
?>
