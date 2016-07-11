var List = Backbone.Collection.extend({
	model: Info,
	
	comparator: function(item) {
      	return item.get("name");
    },
	
	url: '/country'
});

Backbone.Collection.prototype.save = function (options) {
    Backbone.sync("create", this, options);
};