<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feproject";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = "user1";
$password = "securepassword";

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO login (name, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $hashed_password);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "User inserted successfully!";
} else {
    echo "Error inserting user.";
}

$stmt->close();
$conn->close();
?>
