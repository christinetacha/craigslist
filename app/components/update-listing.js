import Ember from 'ember';

export default Ember.Component.extend ({
  updateListingForm: false,
  actions: {
    showUpdateListingForm() {
      this.set("updateListingForm", true);
    },
    updateListing(listing) {
      var params = {
        date: this.get("date"),
        title: this.get("title"),
        poster: this.get("poster"),
        body: this.get("body")
      };
      this.set("updateListingForm", false);
      this.sendAction("updateListing", listing, params);
    }
  }
});
