export default {
	find: function(id) {
		if (id) {
			return $.getJSON('/phones/%@.json'.fmt(id));
		} else {
			return $.getJSON('/phones/phones.json');
		}
	}
}