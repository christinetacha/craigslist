import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return this.store.findAll('listing');
  },
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord("listing", params);
      newListing.save();
      this.transitionTo("listing");
    },
    updateListing(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
      this.transitionTo("listing");
    },
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo("listing");
    }
  }
});
