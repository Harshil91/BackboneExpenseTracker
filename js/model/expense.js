const Expense = Backbone.Model.extend({

  initialize () {
    if (!this.validationError){
      if (!this.get('id')) {
        this.set('id', this.generateId());
      }
      this.formatProperties();
    }
  },

  formatProperties(){
    this.formatAmount();
    this.formatDate();
  },

  formatAmount(){
    let amount = this.get('amount');
    if (amount.indexOf('$')=== 0) {
      amount = amount.substring(1);
    }

    let [ dollars, cents ] = amount.split('.');

    if (dollars.length === 0){
      dollars = '0';
    }

    if (!cents || cents.length === 0){
      cents = '00';
    }

    if (cents && cents.length === 1){
      cents += '0';
    }

    this.set('amount', `${dollars}.${cents}`);
  },

  generateId(){
    return new Date().getTime();
  },

  validate(expense){
    return this.validateAmount(expense.amount) || 
           this.validateDate(expense.date);
  },

  formatDate(){
    const Date = this.get('date');
    let [ month, day, year ] = date.split('/') ;

    if (month.length === 1){
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }
    
    const formattedDate = [ month, day, year ].join('/');

    this.set('date', formattedDate); 
  },

  validateAmount(amount){
    if (
      amount.length === 0 ||
      !amount.match(/^\$?(\d*)(\.\d{0,2})?$/)
      ) {
      return 'Invalid amount';
    }
  },

  validateDate(date){
    if (
      !date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) || 
      isNaN(Date.parse(date))
    ) {
      return 'Invalid Date';
    }
  }
});