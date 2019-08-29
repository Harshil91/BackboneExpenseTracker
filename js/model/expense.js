const Expense = Backbone.Model.extend({

  initialize () {

    if (!this.get('id')){
      this.set('id', this.generateId());
    }
  },


  generateId(){
    return new Date().getTime();
  }
});