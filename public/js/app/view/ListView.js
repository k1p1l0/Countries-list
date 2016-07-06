var ListView = Backbone.View.extend({
  	initialize: function () {
    	this.collection.on("reset", this.render, this);

    	this.collection.fetch({reset: true});

    	this.collection.on("add", this.renderOne, this);

    	this.createBody();
  	},

	createBody: function () {
		this.$body = $('<ul></ul>');

		this.$el.append(this.$body);
	},

  	render: function () {
  		this.createList();	

  		return this;
	},

	renderOne: function (country) {
		var view = new CountryView({
				model: country, 
				el: $('<li></li>')
			});

		return this.$body.append(view.render());
	},

	createList: function () {
		this.collection.each((country) => {
			this.renderOne(country);
		}, this);		
	}
});