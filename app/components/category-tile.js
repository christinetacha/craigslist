import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    deleteCategory(category) {
      if(confirm("Are you sure you want to delete this category?")) {
        this.sendAction("destroyCategory", category);
      }
    },
    updateCategory(category, params) {
      this.sendAction('updateCategory', category, params);
    }
  }
});
