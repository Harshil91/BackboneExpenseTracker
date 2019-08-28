const Expenses = Backbone.Collection.extend({
  model: Expense,

  initialize(){
    this.on('add', this.add);
  },

  add(){
    
  }

});