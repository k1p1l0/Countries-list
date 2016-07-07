var CountryView = Backbone.View.extend({
	events: {
		'click': 'show'
	},
	render: function () {
		this.$el.html(_.template(tpl['list'], this.model.toJSON()));

		return this.$el;
	},
	show: function () {
		mediator.pub('click', this.model.toJSON());
	}
})