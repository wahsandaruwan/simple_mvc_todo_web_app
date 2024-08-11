class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTasksChanged(this.onTasksChanged);
    this.view.bindAddTask(this.handleAddTask);
    this.view.bindDeleteTask(this.handleDeleteTask);

    this.onTasksChanged(this.model.tasks);
  }

  onTasksChanged = (tasks) => {
    this.view.renderTasks(tasks);
  };

  handleAddTask = (task) => {
    this.model.addTask(task);
    this.model.notifyTasksChanged();
  };

  handleDeleteTask = (index) => {
    this.model.deleteTask(index);
    this.model.notifyTasksChanged();
  };
}
