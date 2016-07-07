var DescriptionView = Backbone.View.extend({
	tagName: 'div',

	events: {
		'click .del': 'deleteCountry'
		// 'click .edit': 'editCountry'
	},

	deleteCountry: function () {
		this.model.destroy({

		});
	},

	render: function () {
		this.$el.html(_.template(tpl['desc'], this.model.toJSON()))

		return this;
	}
});