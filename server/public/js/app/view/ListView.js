var ListView = Backbone.View.extend({
	tagName: 'ul',

	previousView: '',

  	initialize: function () {
    	this.loader();

    	this.collection.fetch({reset: true});

    	this.collection.on("reset", this.render, this);
    	
    	this.init();
  	},

	init: function () {
		$('#country-choose').html(this.render().el);
	},

  	render: function () {
		this.createList();	

		$('.loader').hide();
		$('.container').show();

  		return this;
	},

	renderOne: function (country, added) {
		var view = new CountryView({model: country, collection: this.collection});

		if (typeof added === 'object') {
			setTimeout(() => {
				view.$el.removeClass('anim');
			}, 1000);

			view.$el.addClass('anim');
		}

		view.on('click', (view) => {
			var desc = new DescriptionView({
				model: view.model,
				collection: view.collection
			}).render();

			if (this.previousView) {
				this.previousView.$el.toggleClass('clickable');
			}

			this.previousView = view;

			view.$el.addClass('clickable');
		}, this);

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