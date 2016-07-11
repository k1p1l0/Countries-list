var ListView = Backbone.View.extend({
	tagName: 'ul',

	previousView: '',

  	initialize: function () {
    	this.collection.fetch({reset: true});

    	this.collection.once("reset", this.init, this);

    	this.collection.on("add", this.renderOne, this);
     },

  	render: function () {
		this.collection.each((country) => {
			this.renderOne(country);
		}, this);

  		return this;
	},

	renderOne: function (country, added) {
		var view = new CountryView({model: country});

		view.on('click', (view) => {
			if (this.previousView) {
				this.previousView.$el.toggleClass('clickable');
			}			
			this.previousView = view;

			view.$el.addClass('clickable');
		}, this);

		this.$el.append(view.render().el);
	},

	init: function () {
		mediator.pub('init');
	}
});