var Router = Backbone.Router.extend({

  state: false,

  routes: {
      "": 					      "index",    // #help
      // "search/:query": 		"search",  // #search/kiwis
  },

  index: function () {
      this.state = true;

      new ControllerChoose();
  }

  // search: function (query) { 
  //     if (!this.state) {
  //       this.navigate("", {trigger: true});
  //     }     

  //  	  mediator.pub('search', query);
  // }
});