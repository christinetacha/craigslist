import Ember from 'ember';

export default Ember.Component.extend ({
  updateCategoryForm: false,
  actions: {
    updateCategoryForm() {
    this.set('updateCategoryForm', true);
    },
    updateCategory(category) {
      var params = {
        name: this.get('name'),
      };
      this.set('updateCategoryForm', false);
      this.sendAction('updateCategory', category, params);
    }
  }
});
