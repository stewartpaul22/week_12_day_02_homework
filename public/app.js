var initialize = function(){
  var center = {lat: 23.145270, lng: -82.355912};
  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, center, 15);
};

window.addEventListener('load', initialize);
