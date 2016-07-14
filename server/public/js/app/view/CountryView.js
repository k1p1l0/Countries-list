var CountryView = Backbone.View.extend({
	tagName: 'li',

	template: _.template(tpl['list']),

	events: {
		'click': 'show'
	},

	initialize: function () {
		this.model.on("destroy", this.destroy, this);
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	show: function () {
		mediator.pub('click', this.model);
		
		this.trigger('click', this);
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