var EditView = Backbone.View.extend({
	tagName: 'table',

	className: 'animEdit',

	template: _.template(tpl['change']),

	events: {
		'click button.edit': 'editCountry'
	},

	initialize: function () {
		$('#country-desc').append(this.render().el)
	},

	editCountry: function () {
		var input = {};

		$("input").val((i, val) => {
			input[$('#country-desc input').eq(i).attr('name')] = validateInformation(val);
		});

		this.model.set(input).save();
		
		this.collection.fetch({reset: true});

		this.remove();
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});