// Get DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to create a new todo item
function createTodoItem(todoText) {
  // Create the list item
  const listItem = document.createElement("li");
  listItem.textContent = todoText;

  // Create the checkbox to mark the todo as complete
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    listItem.classList.toggle("completed");
  });

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  // Append the elements to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Function to add a new todo item to the list
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
}

// Handle form submission
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
