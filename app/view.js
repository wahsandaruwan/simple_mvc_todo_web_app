class View {
  constructor() {
    // Get references to UI elements
    this.taskInput = document.getElementById("new-task");
    this.addTaskButton = document.getElementById("add-task");
    this.taskList = document.getElementById("task-list");
  }

  // Function to get the value from the task input field
  getTaskInput() {
    return this.taskInput.value;
  }

  // Function to clear the task input field
  clearTaskInput() {
    this.taskInput.value = "";
  }

  // Function to render the tasks in the UI
  renderTasks(tasks) {
    // Clear the task list
    this.taskList.innerHTML = "";
    // Loop through each task and create a list item
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      // Set the text content to the task description
      li.textContent = task;
      // Add an event listener to handle task deletion
      li.addEventListener("click", () => this.onDeleteTask(index));
      // Add the list item to the task list
      this.taskList.appendChild(li);
    });
  }

  // Function to bind the add task button to a handler function
  bindAddTask(handler) {
    this.addTaskButton.addEventListener("click", () => {
      // Check if input is not empty
      if (this.getTaskInput()) {
        // Call the handler with the input value
        handler(this.getTaskInput());
        // Clear the input field
        this.clearTaskInput();
      }
    });
  }

  // Function to bind the delete task action to a handler function
  bindDeleteTask(handler) {
    this.onDeleteTask = handler;
  }
}
