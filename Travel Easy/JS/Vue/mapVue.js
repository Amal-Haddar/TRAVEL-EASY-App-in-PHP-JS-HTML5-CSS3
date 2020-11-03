$(document).ready(function() {
	 
	  //navbar
	  
             const navHamburger = document.querySelector('#navHamburger');
    navHamburger.addEventListener('click', (e) => {
        navHamburger.parentElement.classList.toggle('active');
    })
			
		
	  });


// map
     var lat= 36.8064948 ; 
	 var  lng= 10.1815316 ; 
	 var zm = 2 ; 
// Initialize and add the map



  
    // Call Geocode
    //geocode();

    // Get location form
    var locationForm = document.getElementById('location-form');

    // Listen for submiot
    locationForm.addEventListener('submit', geocode);

   