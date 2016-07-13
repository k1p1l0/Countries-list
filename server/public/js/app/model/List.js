var List = Backbone.Collection.extend({
	model: Info,

	comparator: function compare(a, b) {
	  	if (a.get('Name') > b.get('Name')) {
	   		return 1;
	  	}

	  	if (a.get('Name') < b.get('Name')) {
	   	 	return -1;
	  	}
	  	
	  	return 0;
	},

	url: '/country'
});