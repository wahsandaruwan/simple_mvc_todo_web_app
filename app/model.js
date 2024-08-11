// --------------------Manages the data (tasks) and interacts with localStorage for persistence--------------------
class Model {
  constructor() {
    // Initialize the tasks array from localStorage, or an empty array if none exist
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  // Function to add a new task to the tasks array
  addTask(task) {
    // Add task to the array
    this.tasks.push(task);
    // Save the updated array to localStorage
    this._commit();
  }

  // Function to delete a task by its index
  deleteTask(taskIndex) {
    // Remove the task from the array
    this.tasks.splice(taskIndex, 1);
    // Save the updated array to localStorage
    this._commit();
  }

  // Function to save the tasks array to localStorage
  _commit() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  // Function to bind a callback function to be called when the tasks changed
  bindTasksChanged(callback) {
    this.onTasksChanged = callback;
  }

  // Function to notify the View that tasks have changed, triggering a re-render
  notifyTasksChanged() {
    if (this.onTasksChanged) {
      this.onTasksChanged(this.tasks);
    }
  }
}
