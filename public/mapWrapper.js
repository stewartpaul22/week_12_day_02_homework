var MapWrapper = function(container, coords, zoom, infoWindowText){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.infoWindowText = infoWindowText;
  this.markers = [];
}

// -----Try to add info window--------

MapWrapper.prototype.addMarker = function (coords) {
  var infowindow = new google.maps.InfoWindow({
    content: this.infoWindowText,
    maxWidth: 200
  });

  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);

  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });

};

// --------------


// MapWrapper.prototype.addMarker = function (coords) {
//   var marker = new google.maps.Marker({
//     position: coords,
//     map: this.googleMap
//   });
//   this.markers.push(marker);
// };

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    this.addMarker(position);
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
};
