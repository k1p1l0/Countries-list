var Info = Backbone.Model.extend({
	defaults: {
		'id': 0,
		'Name': 'N/A',
		'Continent': 'N/A',
		'Capital': 'N/A',
		'Population': 0
	},
	url: '/upload'
});

var List = Backbone.Collection.extend({
	model: Info,
	url: '/get'
});

Backbone.Collection.prototype.save = function (options) {
    Backbone.sync("create", this, options);
};