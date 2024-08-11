// --------------------Links the Model and View, managing how tasks are added and deleted--------------------
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Bind model and view functions
    this.model.bindTasksChanged(this.onTasksChanged);
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindDeleteTask(this.handleDeleteTask);

    // Initial render of the tasks
    this.onTasksChanged(this.model.tasks);
  }

  // Function to handle changes in tasks and update the view
  onTasksChanged = (tasks) => {
    this.view.renderTasks(tasks);
  };

  // Function to handle adding a task
  handleAddTask = (task) => {
    // Add the task to the model
    this.model.addTask(task);
    // Notify the view to update
    this.model.notifyTasksChanged();
  };

  // Function to handle deleting a task
  handleDeleteTask = (index) => {
    // Delete the task from the model
    this.model.deleteTask(index);
    // Notify the view to update
    this.model.notifyTasksChanged();
  };
}
