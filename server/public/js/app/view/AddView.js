var AddView = Backbone.View.extend({
	tagName: 'table',

	template: _.template(tpl['add']),

	templateChange: _.template(tpl['change']),

	events: {
		'click button': 'addCountry',
		'click button.edit': 'editCountry'
	},	

	addCountry: function() {
		let input = {
			"_id": String(this.collection.length + 1)
		};

		$("input").val((i, val) => {
			input[$('input').eq(i).attr('name')] = validateInformation(val);
		});

		this.collection.create(input);

		mediator.pub('addCountry', input);
	},

	editCountry: function () {
		console.log('edit OK!');
	},

	initialize: function () {
		$('#country-add').append(this.render().el)
	},
	
	render: function () {
		this.$el.html(this.template());

		return this;
	},

	renderChange: function (model) {
		this.$el.html(this.templateChange(model.toJSON()));

		return this;
	}
})