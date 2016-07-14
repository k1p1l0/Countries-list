var EditView = Backbone.View.extend({
	tagName: 'table',

	className: 'animEdit',

	template: _.template(tpl['change']),

	events: {
		'click button.edit': 'onEdit'
	},

	onEdit: function () {
		this.model.set(this.validateInputs()).save();	

		mediator.pub('save', this.model);
	},

	validateInputs: function() {
		var input = {};

		$("input").val((i, val) => {
			input[$('#country-desc input').eq(i).attr('name')] = validateInformation(val);
		});

		return input;
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});