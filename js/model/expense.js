const Expense = Backbone.Model.extend({

  initialize () {
    this.set('id', this.generateId());
  },


  generateId(){
    return new Date().getTime();
  }
});