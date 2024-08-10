class TodoView {
  constructor() {
    this.app = document.getElementById("app");
    this.todoList = document.createElement("ul");
    this.input = document.createElement("input");
    this.addButton = document.createElement("button");
    this.addButton.textContent = "Add";

    this.app.appendChild(this.input);
    this.app.appendChild(this.addButton);
    this.app.appendChild(this.todoList);
  }

  displayTodos(todos) {
    this.todoList.innerHTML = "";

    todos.forEach((todo) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = todo.title;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.dataset.id = todo.id;

      const toggleCheckbox = document.createElement("input");
      toggleCheckbox.type = "checkbox";
      toggleCheckbox.checked = todo.completed;
      toggleCheckbox.dataset.id = todo.id;

      todoItem.appendChild(toggleCheckbox);
      todoItem.appendChild(deleteButton);
      this.todoList.appendChild(todoItem);
    });
  }

  bindAddTodo(handler) {
    this.addButton.addEventListener("click", () => {
      if (this.input.value.trim()) {
        handler(this.input.value);
        this.input.value = "";
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const id = parseInt(event.target.dataset.id, 10);
        handler(id);
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener("change", (event) => {
      if (
        event.target.tagName === "INPUT" &&
        event.target.type === "checkbox"
      ) {
        const id = parseInt(event.target.dataset.id, 10);
        handler(id);
      }
    });
  }
}
