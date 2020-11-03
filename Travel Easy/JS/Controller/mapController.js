function geocode(e){
      // Prevent actual submit
      e.preventDefault();
	  

      var location = document.getElementById('location-input').value;

      axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:location,
          key:'AIzaSyCPYPAdmh2FmolMQymdmwRrzfCN02iD_os'
        }
      })
      .then(function(response){
        // Log full response
        console.log(response);

        // Formatted Address
        var formattedAddress = response.data.results[0].formatted_address;
        var formattedAddressOutput = `
          <ul class="list-group">
            <li class="list-group-item">${formattedAddress}</li>
          </ul>
        `;

        // Address Components
        var addressComponents = response.data.results[0].address_components;
        var addressComponentsOutput = '<ul class="list-group">';
        for(var i = 0;i < addressComponents.length;i++){
          addressComponentsOutput += `
            <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
          `;
        }
        addressComponentsOutput += '</ul>';

        // Geometry
         window.lat = response.data.results[0].geometry.location.lat;
         window.lng = response.data.results[0].geometry.location.lng;
        var geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
          </ul>
        `;
         window.zm=14 ; 
        // Output to app
		  initMap() ; 
       
      })
      .catch(function(error){
        console.log(error);
      });
	  
	
    }
	function initMap() {
  // The location of Uluru
  var uluru = {lat:lat , lng:lng };
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map_loc'), {zoom: zm, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}