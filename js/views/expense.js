const ExpenseView = Backbone.View.extend({
  tagName: 'div',
  className: 'expense',

  events: {
    'click .delete': 'removeExpense',
    'click .edit': 'setExpenseEditable',
    'reset .edit-expense-form': 'render',
    'submit .edit-expense-form': 'saveEdit',
  },

  template: _.template(`
    <div class="field">
      <h2><%= description %></h2>
    </div>
    <div class="field">
      <h2><%= date %></h2>
    </div>
    <div class="field">
      <h2><%= amount %></h2>
    </div>    

    <div class="actions">
      <button class="edit">Edit</button><button class="delete">Delete</button>
    </div>
  `),

  formTemplate: _.template(`
    <form class="edit-expense-form">
      <input type="text" name="description" value="<%= description %>" />
      <input type="text" name="date" value="<%= date %>" />
      <input type="text" name="amount" value="<%= amount %>" />

      <button type="reset">Cancel</button>
      <button type="submit">Save</button>
    </form>
  `),

  render(){
    const model = this.model.toJSON();
    this.el.innerHTML = this.template(model);
    return this;
  },

  removeExpense(){
    this.collection.remove(this.model);
    this.remove();
  },

  setExpenseEditable(){
    this.el.innerHTML = this.formTemplate(this.model.toJSON());
  },

  saveEdit(e){
    e.preventDefault();

    const form = e.currentTarget; 

    const amount = form.amount.value;
    const date = form.date.value;
    const description = form.description.value;

    this.model.set({
      amount,
      date,
      description,
    });

    this.render();
  }

});