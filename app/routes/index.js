import Ember from 'ember';

var categories = [{
  id: 1,
  name: "Pet Services"
}, {
  id: 2,
  name: "Rants and Raves"
}];

export default Ember.Route.extend({
  model() {
    return categories;
  }
});
