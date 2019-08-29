const ExpensesView = Backbone.View.extend({
  tagName: 'div',
  id: 'expenses',

  initialize(){
    this.listenTo(this.collection, 'add', this.render);
  },
  
  render(){
    this.el.innerHTML = '';
    this.collection.forEach((expense) => {
      this.addExpense(expense);
    });
    return this;
  },

  addExpense(expense){
    const expenseView = new ExpenseView({
      collection: this.collection,
      model: expense,
    });
    expenseView.render();

    this.$el.append(expenseView.el);
  }
});