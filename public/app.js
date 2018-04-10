var initialize = function(){
  var center = {lat: 23.145140, lng: -82.381415};
  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, center, 15);

  const bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  mainMap.addMarker(center);
  mainMap.addClickEvent();
};

window.addEventListener('load', initialize);
