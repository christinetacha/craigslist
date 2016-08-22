import Ember from 'ember';

export default Ember.Component.extend ({
  addNewListing: false,
  actions: {
    showNewListingForm() {
      this.set("addNewListing", true);
    },
    saveListing() {
      var params = {
        date: this.get("date"),
        title: this.get("title"),
        poster: this.get("poster"),
        body: this.get("body")
      };
      this.set("addNewListing", false);
      this.sendAction("saveListing", params);
    }
  }
});
