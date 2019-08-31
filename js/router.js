const ExpensesRouter = Backbone.Router.extend({
  routes: {
    'sort/:field': 'sort', 
    'sort/:field/:direction': 'sort', 
  },

  initialize(collection){

  },

  sort(field, direction) {
    if (direction === null){
      direction = 'desc';
    }
  }
});