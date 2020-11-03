<?php
   include('session.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Travel Easy</title>
      <link rel="stylesheet" href="responsive.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	  <script src="https://code.jquery.com/jquery-1.11.2.min.js" type="text/javascript"></script>

</head>

<body>

    <header>
	
    <div class="navbar">
        <a href="#" class="toggle" id="navHamburger">
            <i class="fas fa-bars"></i>
        </a>
        <a href="#" class="brand">Travel Easy</a>
        <div class="left">
		    <a href="index.html" class="link">Home</a>
            <a href="weather.html" class="link">Weather</a>
            <a href="map.html" class="link">Map</a>
			<a href="Distance.html" class="link">Distance</a>
			<a href="hotels.html" class="link">Hotel</a>
			<a href="contact.html" class="link">Contact</a>
			
        </div>
        <div class="right">
            <a href="login.html" class="link">Logout</a>
        </div>
    </div>
	
	<p id="citation">  Welcome <?php echo $login_session; ?> in "Travel Easy"  </p> 
	
  </header>
     
			
	<main>

        <div class="about">
			
			<p id="titre"> About " Travel Easy "  </p> 
                  <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  </p>
				  
			<p id="titre"> It's not about the destination, it's all about the Way </p> 
                  <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  </p>
				  
				  <button id="reserve"><a href="contact.html">Contact Us</a></button>
        </div>
		
			<p id="titre">  Happy Travelers Says  </p1>
			
		<div class="sslideshow">
		
		    <slider>
               <slide><p>”Adventure may hurt you but monotony will kill you.” – Richard Burton</p></slide>
               <slide><p>“To Travel is to Live.” – Hans Christian </p></slide>
               <slide><p>“Don’t listen to what they say. Go see.” - Anna Quindlen</p></slide>
               <slide><p>”Life is short and the world is wide.” -Henry Miller</p></slide>
            </slider>
			
		<div>
		
    </main>
				  				 
    <div>

	</div>
		 
     <script src="JS/Controller/navController.js"></script>

</body>
</html>
