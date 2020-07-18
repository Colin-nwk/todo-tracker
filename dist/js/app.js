// TODO : add items on new todo lists using js
const todoForm = document.querySelector("#todo-form"),
  todo = document.querySelector("#input-todo"),
  newTaskList = document.querySelector("#new-items"),
  todoArea = document.querySelector("#row"),
  searchTodo = document.querySelector("#search"),
  filteredList = document.querySelector("#filter");
// const moveTodo = document.querySelectorAll(".list-group-item");
// const moveTodo =
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
    li.setAttribute("draggable", "true");

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

// filter tasks
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
    // else if (text === "") {
    //   item.style.display = "block";
    // }
  });
});

// add drag and drop features
const ul = document.querySelectorAll("#completed, #in-progress");
function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  // e.target.append(document.getElementById(data));
  let moveTodo = document.getElementById(data);
  e.target.parentElement.appendChild(moveTodo);
}

//footer date
const year = new Date().getFullYear();
document.querySelector(".date").innerHTML = year;
