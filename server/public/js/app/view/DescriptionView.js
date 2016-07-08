var DescriptionView = Backbone.View.extend({
	tagName: 'div',

	events: {
		'click .del': 'deleteCountry'
		// 'click .edit': 'editCountry'
	},

	deleteCountry: function () {
		this.model.destroy();

		this.model.once('destroy', function() {
			this.collection.remove(this.model.get('cid'));
		}, this);

		this.remove();
	},

	render: function () {
		this.$el.html(_.template(tpl['desc'], this.model.toJSON()))

		return this;
	}
});