import Ember from 'ember';

export default Ember.ArrayController.extend({
  	searchTerm: '',
  	sorts: [{name: "Newest", id: "age"},{name: "Alphabetical", id: "name"}],
  	sortProperties: ['age'],
  	selectedSort: null,
  	sortAscending: true,
	searchResults: function() {
	  	var regexp = new RegExp(this.get('searchTerm'),'i');
	  	return this.get('arrangedContent').filter(function(phone){
	  	  return phone.name.match(regexp);
		});
	}.property('searchTerm','selectedSort'),
	changeSort: function() {
		var sortProperty = this.get('selectedSort').id;
		this.set('sortProperties', [sortProperty]);
	}.observes('selectedSort')
});