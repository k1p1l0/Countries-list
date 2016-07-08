var List = Backbone.Collection.extend({
	model: Info,
	
	url: '/country'
});

Backbone.Collection.prototype.save = function (options) {
    Backbone.sync("create", this, options);
};