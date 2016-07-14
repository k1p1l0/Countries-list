var AddView = Backbone.View.extend({
	tagName: 'table',

	template: _.template(tpl['add']),

	events: {
		'click button': 'addCountry'
	},	
	
	addCountry: function() {
		mediator.pub('add', this.validateInputs());
	},

	validateInputs: function() {
		let input = {};

		$("input").val((i, val) => {
			input[$('input').eq(i).attr('name')] = validateInformation(val);
		});

		return input;
	},
	
	render: function () {
		this.$el.html(this.template());

		return this;
	}
})