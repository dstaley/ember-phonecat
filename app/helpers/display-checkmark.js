import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(input) {
  return input ? '\u2713' : '\u2718';
});