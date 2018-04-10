var initialize = function(){
  var center = {lat: 23.145140, lng: -82.381415};
  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, center, 15);

  mainMap.addMarker(center);
};

window.addEventListener('load', initialize);
