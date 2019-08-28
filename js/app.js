const collection = new Expenses();
const formView = new FormView({ collection });
const expensesView = new ExpensesView({ collection });

formView.render();
expensesView.render();



$('body').append(formView.el);
$('body').append(expensesView.el);


