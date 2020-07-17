// TODO : add items on new todo lists using js
const todoForm = document.querySelector("#todo-form");
const todo = document.querySelector("#input-todo");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(todo.value);
});
