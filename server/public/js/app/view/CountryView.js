var CountryView = Backbone.View.extend({
	tagName: 'li',

	template: _.template(tpl['list']),

	events: {
		'click': 'show'
	},

	initialize: function () {
		this.model.on("destroy", this.destroy, this);

		this.descView = new DescriptionView({
			model: this.model,
			collection: this.collection
		});
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	show: function () {
		this.trigger('click', this);
		
		$('#country-desc').html(this.descView.render().el)
	},

	destroy: function() {	    
	    // COMPLETELY UNBIND THE VIEW
	    this.undelegateEvents();

	    this.$el.removeData().unbind(); 

	    // Remove view from DOM
	    this.remove();  
	    Backbone.View.prototype.remove.call(this);
	}
})