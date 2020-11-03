<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($conn,$_POST['username']);
      $mypassword = mysqli_real_escape_string($conn,$_POST['password']); 
      
      $sql = "SELECT username,password FROM user WHERE username = '$myusername' and password = '$mypassword'";
 
	  $result = mysqli_query($conn, $sql);
      
 
		
    if (mysqli_num_rows($result) > 0) {
        
         $_SESSION['login_user'] = $myusername;
         
         header("location: index.php");
      }else {
         echo  " <center> <h1> Your Login Name or Password is invalid </h1> </center>";
		 echo "   <a href='login.html'><h3> Back to login page </h3></a>" ; 
      }
   }
?>