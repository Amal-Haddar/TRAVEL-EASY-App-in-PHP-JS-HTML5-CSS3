<?php
include("config.php");

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$mobile_number = $_POST['mobile_number'];
$country = $_POST['country'];
if (!empty($username) || !empty($password) || !empty($email) || !empty($mobile_number) || !empty($country)) {
 
    
     $sql = "INSERT Into user (username, password, email, mobile_number, country) values('$username', '$password', '$email', $mobile_number, '$country')";
 
     if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
	
       header("location: login.html");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
    
     
	  
	
}
?>