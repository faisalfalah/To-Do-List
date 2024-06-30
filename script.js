document.addEventListener("DOMContentLoaded", function () {
  var addBtn = document.getElementById("add-btn");
  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", addTodo);

  function addTodo() {
    var todoText = todoInput.value.trim();
    if (todoText !== "") {
      var li = document.createElement("li");
      li.textContent = todoText;

      var completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.className = "complete-btn";
      completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
      });

      var editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";
      editBtn.addEventListener("click", function () {
        var newTodoText = prompt("Edit task:", li.textContent);
        if (newTodoText !== null) {
          li.firstChild.textContent = newTodoText;
        }
      });

      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
      });

      li.appendChild(completeBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
      todoInput.value = "";
      todoInput.focus();
    }
  }
});
