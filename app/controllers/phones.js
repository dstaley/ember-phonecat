import Ember from 'ember';

export default Ember.ObjectController.extend({
  selectedImage: '',
  actions: {
    changeImage: function(image) {
      this.set('selectedImage', image);
    }
  }
});