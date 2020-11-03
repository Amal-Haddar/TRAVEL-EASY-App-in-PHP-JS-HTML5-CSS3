$(document).ready(function() {
	 
	                                                          //navbar
	  
	  const navHamburger = document.querySelector('#navHamburger');
      navHamburger.addEventListener('click', (e) => {
        navHamburger.parentElement.classList.toggle('active');
       })

	  
	  
	                                                            //Weather
	        
			 $('#submitWeather').click(function(){
				 
				 var city = $("#city").val();
				 
				 if (city != ''){
					 
					 $.ajax({
						 
						 url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=6f5f4bdab4af5974b06adc9b5f7c813f",
						 type: "GET",
						 dataType: "jsonp",
						 success: function(data){
							 
							 var widget = show(data);
							 
							 $("#show").html(widget);
							 $("#city").val('');
						 }
						
						 
					 });
					 
					 
				 } else {
					 
					 $("#error").html('Field cannot be empty');
				 }
				 
			 });
	  
	  

      });
	  
	  function show(data){
		  
	  return "<h2 class='text-center'>Corrunt weather for <strong> "+ data.name + " </strong> ," + data.sys.country +" <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png' ></h2>" +
	         "<h4><strong>Weather</strong>: "+  data.weather[0].main+" </h4>" +
	         "<h4><strong>Description</strong>: "+  data.weather[0].description+" </h4>" +
			 "<h4><strong>Temperature</strong>: "+  data.main.temp+" &deg;C </h4>" +
			 "<h4><strong>Pressure</strong>: "+  data.main.pressure+" hPa </h4>" +
			 "<h4><strong>Humidity</strong>: "+  data.main.humidity+" % </h4>" +
			 "<h4><strong>Min. Temperature</strong>: "+  data.main.temp_min+" &deg;C </h4>" +
			 "<h4><strong>Max. Temperature</strong>: "+  data.main.temp_max+" &deg;C </h4>" +
			 "<h4><strong>Wind Speed</strong>: "+  data.wind.speed+" m/s </h4>" +
			 "<h4><strong>Wind Direction</strong>: "+  data.wind.deg+" &deg; </h4>" ;
			
	  }
	  