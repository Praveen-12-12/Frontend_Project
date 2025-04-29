<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "feproject";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); 
} else {
    echo "Connection successful<br>";  
}

$name = $_POST['name'];
$password = $_POST['password'];

if (empty($name) || empty($password)) {
    die("Name or password is empty.");
}


$hashed_password = password_hash($password, PASSWORD_DEFAULT);


echo "Name: " . $name . "<br>";
echo "Password: " . $password . "<br>";
echo "Hashed Password: " . $hashed_password . "<br>";

$stmt = $conn->prepare("INSERT INTO login (name, password) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $hashed_password);  

if ($stmt->execute()) {
    echo "New user saved successfully!";
} else {
    echo "Error: " . $stmt->error . "<br>";
    echo "SQL State: " . $stmt->sqlstate . "<br>"; 
}

$stmt->close();
$conn->close();

?>
