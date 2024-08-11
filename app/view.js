class View {
  constructor() {
    this.taskInput = document.getElementById("new-task");
    this.addTaskButton = document.getElementById("add-task");
    this.taskList = document.getElementById("task-list");
  }

  getTaskInput() {
    return this.taskInput.value;
  }

  clearTaskInput() {
    this.taskInput.value = "";
  }

  renderTasks(tasks) {
    this.taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;
      li.addEventListener("click", () => this.onDeleteTask(index));
      this.taskList.appendChild(li);
    });
  }

  bindAddTask(handler) {
    this.addTaskButton.addEventListener("click", () => {
      if (this.getTaskInput()) {
        handler(this.getTaskInput());
        this.clearTaskInput();
      }
    });
  }

  bindDeleteTask(handler) {
    this.onDeleteTask = handler;
  }
}
