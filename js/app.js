const collection = new Expenses();
const formView = new FormView({ collection });
const expensesView = new ExpensesView({ collection });
const ExpensesRouter = new ExpensesRouter();

formView.render();
expensesView.render();



$('body').append(formView.el);
$('body').append(expensesView.el);

Backbone.history.start();


