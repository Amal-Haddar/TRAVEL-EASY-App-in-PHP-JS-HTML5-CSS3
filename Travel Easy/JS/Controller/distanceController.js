	                                                        //Distance
$(document).ready(function() {
	 
	  //navbar
	  
             const navHamburger = document.querySelector('#navHamburger');
    navHamburger.addEventListener('click', (e) => {
        navHamburger.parentElement.classList.toggle('active');
    })
			
		
	  });


//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            $("#output").html("<div class='alert-info'><strong>From:</strong> " + document.getElementById("from").value + ".<br /><strong>To:</strong> " + document.getElementById("to").value + ".<br /><strong> Driving distance:</strong> " + result.routes[0].legs[0].distance.text + ".<br /><strong>Duration:</strong> " + result.routes[0].legs[0].duration.text + ".</div>");

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            $("#output").html("<div class='alert-danger'>Could not retrieve driving distance.</div>");
        }
    });

}

