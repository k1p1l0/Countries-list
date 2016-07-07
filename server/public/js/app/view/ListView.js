var ListView = Backbone.View.extend({
	tagName: 'ul',

  	initialize: function () {
    	this.loader();

    	this.collection.fetch({reset: true});

    	this.collection.on("reset", this.render, this);
    	this.collection.on("add", this.renderOne, this);

    	$('#country-choose').append(this.render().el);
  	},

  	render: function () {
		this.createList();	

		$('.loader').hide();
		$('.container').show();

  		return this;
	},

	renderOne: function (country) {
		var view = new CountryView({
					model: country
				});

		this.$el.append(view.render().el);
	},

	createList: function () {
		this.collection.each((country) => {
			this.renderOne(country);
		}, this);		
	},

	loader: function () {
		let key = {
			'first': 'Soft',
			'second': 'Serve'
		}

		$('body').append(_.template(tpl['loader'], key));
	}
});