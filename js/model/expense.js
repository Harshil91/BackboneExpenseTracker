const Expense = Backbone.Model.extend({

  initialize () {

    if (!this.get('id')){
      this.set('id', this.generateId());
    }
  },

  generateId(){
    return new Date().getTime();
  },

  validate(expense){
    return this.validateAmount(expense.amount);
  },

  validateAmount(amount){
    if (
      amount.length === 0 ||
      !amount.match(/^\$?(\d*)(\.\d{0,2})?$/)
      ) {
      return 'Invalid amount';
    }
  }
});