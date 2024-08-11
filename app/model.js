class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(task) {
    this.tasks.push(task);
    this._commit();
  }

  deleteTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
    this._commit();
  }

  _commit() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  bindTasksChanged(callback) {
    this.onTasksChanged = callback;
  }

  notifyTasksChanged() {
    if (this.onTasksChanged) {
      this.onTasksChanged(this.tasks);
    }
  }
}
