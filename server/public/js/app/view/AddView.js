var AddView = Backbone.View.extend({
	tagName: 'table',

	template: _.template(tpl['add']),

	events: {
		'click button': 'addCountry'
	},	
	
	addCountry: function() {
		let input = {};

		$("input").val((i, val) => {
			input[$('input').eq(i).attr('name')] = validateInformation(val);
		});

		mediator.pub('add', input);
	},
	
	render: function () {
		this.$el.html(this.template());

		return this;
	}
})