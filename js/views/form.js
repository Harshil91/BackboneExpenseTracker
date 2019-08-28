const FormView = Backbone.View.extend({
  tagName: 'form',
  id: 'new-expense-form',

  events: {
    'submit': 'addNewExpense',
  },


  render(){
    this.el.innerHTML = this.markup;
    return this;
  },
  
  addNewExpense(e){
    e.preventDefault();
    alert('You Submitted the Form');
  },

  markup: `
      <div class="row">
      <div class="form-group">
        <label for="description">Description</label>
        <input id="description" name="description" type="text" placeholder="Groceries">
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="date">Date</label>
        <input id="date" name="date" type="text" placeholder="mm/dd/yyyy">
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input id="amount" name="amount" type="text" placeholder="55.55">
      </div>
    </div>

    <div class="form-actions">
      <button type="reset">Cancel</button>
      <button type="submit">Save</button>
    </div>
  `,
});