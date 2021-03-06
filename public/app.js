var initialize = function(){
  var center = {lat: 23.145140, lng: -82.381415};
  var container = document.getElementById('main-map');

  var contentString = '<div id="content">The Malecon (officially Avenida de Maceo) is a broad esplanade, roadway and seawall which stretches for 8 km (5 miles) along the coast in Havana, Cuba, from the mouth of Havana Harbor in Old Havana, along the north side of the Centro Habana neighbourhood, ending in the Vedado neighbourhood. New businesses are appearing on the esplanade due to economic reforms in Cuba that now allow Cubans to own private businesses.</div>';

  var mainMap = new MapWrapper(container, center, 15, contentString);

  const bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  const takeMeButton = document.querySelector('#take-me-to');
  takeMeButton.addEventListener('click', mainMap.moveTo.bind(mainMap));  

  mainMap.addMarker(center);

  var infoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
    title: 'The Malecon, Havana, Cuba'
  });

  let initialMarker = mainMap.markers[0];

  initialMarker.addListener('click', function() {
    infoWindow.open(this.googleMap, initialMarker);
  });

  mainMap.addClickEvent();
};

window.addEventListener('load', initialize);
