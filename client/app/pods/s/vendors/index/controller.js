import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['latitude', 'longitude', 'maxDistance'],
  longitude: null,
  latitude: null,
  maxDistance: null,

  getGeoLocation: function () {
    var _this = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCurrentCoordinates);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }

    // TODO: fix race condition here between the controller and the component

    function setCurrentCoordinates (position) {
      console.log('ctrl run');
      _this.set('latitude', position.coords.latitude);
      _this.set('longitude', position.coords.longitude);
    }

  }.on('init')

});
