document.addEventListener("DOMContentLoaded", () => {
  const model = new TodoModel();
  const view = new TodoView();
  const controller = new TodoController(model, view);
});
