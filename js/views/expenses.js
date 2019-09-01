const ExpensesView = Backbone.View.extend({
  tagName: 'div',
  id: 'expenses',

  ASC_SYMBOL: '&#9660;', 
  DESC_SYMBOL: '&#9650;',

  template: _.template(`
    <div id="sort-actions">
      Sort: 
      <a href="#/sort/date/<%= dateDirection %>" id="sort-date">
        Date <%= dateSymbol %>
      </a>
      <a href="#/sort/amount/<%= amountDirection %>" id="sort-amount">
        Amount <%= amountSymbol %>
      </a>
    </div>
  `),

  initialize(){
    this.listenTo(this.collection, 'add sort', this.render);
  },
  
  render(){
    const sortDirection = this.collection.sortDirection;
    const sortField = this.collection.sortField;
    const oppositeDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    const isSortedByDate = sortField === 'date';
    const isSortedByAmount = sortField === 'amount';

    const dateDirection = isSortedByDate ? oppositeDirection: 'desc';
    const amountDirection = isSortedByAmount ? oppositeDirection: 'desc';

    let dateSymbol = '';
    let amountSymbol = '';

    if (isSortedByDate){
      dateSymbol = dateDirection === 'asc' ? this.ASC_SYMBOL : this.DESC_SYMBOL;
    } else {
      amountSymbol = amountDirection === 'asc' ? this.ASC_SYMBOL : this.DESC_SYMBOL;
    }

    this.el.innerHTML = this.template({
      dateDirection,
      amountDirection,
      amountSymbol,
      dateSymbol,

    });
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