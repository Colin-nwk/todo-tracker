// TODO : add items on new todo lists using js
const todoForm = document.querySelector("#todo-form"),
  todo = document.querySelector("#input-todo"),
  newTaskList = document.querySelector("#new-items"),
  todoArea = document.querySelector("#row"),
  searchTodo = document.querySelector("#search"),
  filteredList = document.querySelector("#filter");

// create a new task
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // condition to add a task
  if (todo.value === "") {
    alert("input a task!");
  } else {
    //create new task li
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = todo.value;
    //create delete btn inside li
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));

    // attach delete to li then li to new task list
    li.appendChild(deleteBtn);
    newTaskList.appendChild(li);

    // reset input field
    todo.value = "";
  }
});

// delete a task
todoArea.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter task
searchTodo.addEventListener("keypress", (e) => {
  let text = e.target.value.toLowerCase();
  // let items = newTaskList.getElementsByTagName("li");

  //loop through all the todos on various stages
  let items = todoArea.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) == -1) {
      item.style.display = "none";
    }
  });
});
