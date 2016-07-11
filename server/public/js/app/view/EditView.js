var EditView = Backbone.View.extend({
	tagName: 'table',

	template: _.template(tpl['change']),

	events: {
		'click button.edit': 'editCountry'
	},

	initialize: function () {
		$('#country-add').append(this.render().el)
	},

	editCountry: function () {
		var input = {};

		$("input").val((i, val) => {
			input[$('input').eq(i).attr('name')] = validateInformation(val);
		});

		log(input);
		dir(input);

		this.model.set(input);
		this.model.save();
		
		this.remove();
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});