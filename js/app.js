var panorama;

function initialize() {
	var astorPlace = {lat: 20.682778, lng: -88.569167};
	// testing 'overley within street view'  var machu = {lat: -13.163697, lng: -72.545981};
	var mapDiv = document.getElementById("map");
	var mapOptions = {
    	center: new google.maps.LatLng(0.0, 0.0),
    	zoom: 5,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	};
  	var map = new google.maps.Map(mapDiv, mapOptions); 
	
	// locations is an array where the elements are added 
	var locations = [];
	locations.push ({name:'Pyramid at Chichén Itzá, Mexico', latlng: new google.maps.LatLng(20.682778, -88.569167)});
	locations.push ({name:'Machu Picchu, Peru', latlng: new google.maps.LatLng (-13.163697, -72.545981)});
	locations.push ({name:'Christ Redeemer, Brazil', latlng: new google.maps.LatLng(-22.951601, -43.210739)});
	locations.push ({name:'Roman Colosseum: Rome, Italy', latlng: new google.maps.LatLng(41.8902426, 12.4923371)});
	locations.push ({name:'Petra, Jordan', latlng: new google.maps.LatLng (30.3222468, 35.4514554)});
	locations.push ({name:'Taj Mahal: Agra, India', latlng: new google.maps.LatLng(27.175009, 78.042090)});
	locations.push ({name:'Great Wall of China, China', latlng: new google.maps.LatLng(40.431908, 116.570374)});
	
	// the latitude and longitude boundry of all the elements get assigned to var bounds
	var bounds = new google.maps.LatLngBounds ();

	// for loop that iterates through all the locations
	for (var i = 0; i < locations.length; i++) {

		// the markers are created by their locations and assigned to var marker
		var marker = new google.maps.Marker({position: locations[i].latlng, map:map, title:locations[i].name});

		// the map extends to the cover all the markers when initialized
		bounds.extend (locations[i].latlng);
	
		marker.setMap(map);

		// Zoom to 15 when clicking on marker
		google.maps.event.addListener(marker,'click',function() {
			map.setZoom(15);
			map.setCenter(this.getPosition());
		});

		map.fitBounds (bounds);
	}

	// NOT SURE HOW TO MAKE THIS WORK YET
	// We get the map's default panorama and set up some defaults.
	// Note that we don't yet set it visible.
	panorama = map.getStreetView();
	panorama.setPosition(locations[i].latlng);
	panorama.setPov(/** @type {google.maps.StreetViewPov} */({
	heading: 265,
	pitch: 0
	}));	
	
}
google.maps.event.addDomListener(window, 'load', initialize);


function toggleStreetView() {
  var toggle = panorama.getVisible();
  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}

$(function() {
    $( "#accordion" ).accordion({
    	heightStyle: "content",
    	animate: 900
     });
});

