/* --------------------Initializes the MVC components when the DOM content is fully loaded-------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the Model, View, and Controller
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
});
