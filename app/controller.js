class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));

    this.view.displayTodos(this.model.getTodos());
  }

  handleAddTodo(title) {
    this.model.addTodo(title);
    this.view.displayTodos(this.model.getTodos());
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
    this.view.displayTodos(this.model.getTodos());
  }

  handleToggleTodo(id) {
    this.model.toggleTodo(id);
    this.view.displayTodos(this.model.getTodos());
  }
}
