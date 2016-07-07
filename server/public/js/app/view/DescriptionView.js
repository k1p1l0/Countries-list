var DescriptionView = Backbone.View.extend({
	tagName: 'div',

	events: {
		'click .del': 'deleteCountry'
		// 'click .edit': 'editCountry'
	},

	deleteCountry: function () {		
		this.model.destroy({url: this.model.url + '/' + this.model.id});

		this.collection.fetch({reset: true});
	},

	render: function () {
		this.$el.html(_.template(tpl['desc'], this.model.toJSON()))

		return this;
	}
});