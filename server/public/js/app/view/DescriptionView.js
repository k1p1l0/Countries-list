var DescriptionView = Backbone.View.extend({
	tagName: 'div',

	className: 'anim',

	events: {
		'click .del': 'deleteCountry',
		'click .edit': 'editCountry'
	},

	deleteCountry: function () {
		this.model.destroy();

		this.remove();
	},

	editCountry: function () {
		mediator.pub('edit', this.model);		
	},

	render: function () {
		this.$el.html(_.template(tpl['desc'], this.model.toJSON()));

		return this;
	}
});