const Expenses = Backbone.Collection.extend({
  model: Expense,

  sortDirection: 'desc',
  sortField: 'date',


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
  },

  changeSort(sortProperties){
    this.sortField = sortProperties.field;
    this.sortDirection = sortProperties.direction;
    this.sort();
  },

  comparator(expense){
    let value;
    if(this.sortField === 'date'){
      value = new Date(expense.get('date')).getTime;
    }


    
    return value; 
  };
});