const Expenses = Backbone.Collection.extend({
  model: Expense,


  initialize(){
    this.addFromDB();
    this.on('add', this.addToDB);
    this.on('remove', this.removeFromDB);
  },

  addToDB(expense){
    const id = expense.get('id');

    localStorage.setItem(id,JSON.stringify(expense));
  },

  addFromDB(){
    Object.keys(localStorage).forEach((id) => {
      const expenseData = JSON.parse(localStorage.getItem(id));
      const expense = new Expense(expenseData);

      this.add(expense);
    });
  },

  removeFromDB(expense) {
    const id = expense.get('id');
    localStorage.removeItem(id);
  }
});