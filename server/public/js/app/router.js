var Router = Backbone.Router.extend({

  routes: {
      "":                 "index",
      "show/:id":         "showDescription"
  },

  initialize: function () {
      mediator.sub('selected', this.show.bind(this));
  },

  index: function () {
      this.navigate('');
  },

  showDescription: function (id) {
      mediator.pub('selected', id);
  },

  show: function (id) {
      mediator.pub('show', id);

      Backbone.history.navigate('show/' + id);
  }
});