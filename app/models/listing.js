import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  poster: DS.attr(),
  body: DS.attr()
});