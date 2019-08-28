const collection = new Expenses();
const formView = new FormView({ collection });

formView.render();


$('body').append(formView.el);

