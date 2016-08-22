import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("category");
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord("category", params);
      newCategory.save();
      this.transitionTo("index");
    },
    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo("index");
    },
    updateCategory(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          category.set(key, params[key]);
        }
      });
      category.save();
      this.transitionTo("index");
    }
  }
});
