var DescriptionView = Backbone.View.extend({
	tagName: 'div',

	events: {
		'click .del': 'deleteCountry',
		'click .edit': 'editCountry'
	},

	deleteCountry: function () {
		this.model.once('destroy', function() {
			this.collection.remove(this.model.get('cid'));
		}, this);

		this.model.destroy({url: this.model.url + '/' + this.model.id});

		this.remove();
	},

	editCountry: function () {
		mediator.pub('editCountry', this.model);
	},

	render: function () {
		this.$el.html(_.template(tpl['desc'], this.model.toJSON()))

		return this;
	}
});