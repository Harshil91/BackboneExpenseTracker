const ExpensesRouter = Backbone.Router.extend({
  routes: {
    'sort/:field': 'sort', 
    'sort/:field/:direction': 'sort', 
  },

  sort(field, direction) {

  }
});