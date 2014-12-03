import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('selectedImage', model.images[0]);
  },
  model: function(params) {
    return this.get('db').find(params.id);
  }
});