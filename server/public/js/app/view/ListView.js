var ListView = Backbone.View.extend({
	tagName: 'ul',

	previousView: '',

	collectionView: [], //Insert with sort, but we need to fetch all array :(
	
  	initialize: function () {
    	this.collection.fetch({reset: true});

    	this.collection.on("reset", this.init, this);
     },

  	render: function () {  		
		this.collection.each((country) => {
			this.renderOne(country);
		}, this);

  		return this;
	},

	renderOne: function (country) {
		let view = this.createCountryView(country);

		this.$el.append(view.render().el);
	},

	createCountryView: function (model) {
		let view = new CountryView({model: model});

		this.collectionView.push(view);

		view.on('click', (view) => {
			if (this.previousView) {
				this.previousView.$el.toggleClass('clickable');
			}			
			this.previousView = view;

			view.$el.addClass('clickable');
		}, this);

		return view;
	},

	init: function () {
		if (this.collectionView.length > 0) {
			this.collectionView.forEach((view) => {
				view.remove();
			}, this);
		}

		mediator.pub('init');
	}
});