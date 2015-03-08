import Ember from 'ember';

export default Ember.Component.extend({
  getCurrentAddress: function () {
    var _this = this;
    var vendors = this.get('vendors');
    console.log('comp run');
    _this.geoGoogleService.drawMap({
      latitude: _this.get('latitude'),
      longitude: _this.get('longitude')
    }, 'mapfeed');

    vendors.forEach(function (vendor) {
      _this.geoGoogleService.createMarker(vendor.get('location'));
    });

  }.on('didInsertElement')
});
