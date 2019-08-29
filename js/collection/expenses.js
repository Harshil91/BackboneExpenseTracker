const Expenses = Backbone.Collection.extend({
  model: Expense,


  initialize(){
    this.on('add', this.addToDB);
  },

  addToDB(expense){
    const id = expense.get('id');

    localStorage.setItem(id,JSON.stringify(expense));
  }

});