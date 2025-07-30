<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "mastermart";
$port = "3307";
$user_tb = "users";

$conn = mysqli_connect($servername, $username, $password, $database, $port);

if(!$conn){
    die("Error".mysqli_connect_error());
}else{
    $sql = "CREATE TABLE IF NOT EXISTS `$database`.`$user_tb`(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(14) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    gender ENUM('Male', 'Female', 'Other'),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_type VARCHAR(50) DEFAULT 'customer');";
    $result = mysqli_query($conn, $sql);
    if(!$result){
        echo "Creation of table failed";
    }
}

?>