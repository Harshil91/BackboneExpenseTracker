const ExpenseView = Backbone.View.extend({
  tagName: 'div',
  className: 'expense',

  events: {
    'click.delete': 'removeExpense'
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
      <button class="delete">Delete</button>

    </div>
  `),

  render(){
    const model = this.model.toJSON();
    this.el.innerHTML = this.template(model);
    return this;
  },

  removeExpense(){
    this.collection.remove(this.model);
    this.remove();
  }

});