class TodoModel {
  constructor() {
    this.todos = [];
    this.currentId = 0;
  }

  addTodo(title) {
    const newTodo = { id: this.currentId++, title, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  getTodos() {
    return this.todos;
  }
}
