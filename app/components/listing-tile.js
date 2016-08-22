import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    updateListing(listing, params) {
      this.sendAction("updateListing", listing, params);
    },
    destroyListing(listing) {
      if(confirm("Are you sure you want to delete this listing?")) {
        this.sendAction("destroyListing", listing);
      }
    }
  }
});
