
// 1. STORAGE

let myTasks = []; // Your "database" in memory


// 2. HOOKS

const inputField = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const clearButton = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");


// 3. RENDER ENGINE

function renderTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < myTasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${myTasks[i]}`;
    taskList.appendChild(li);
  }

  console.log("Current Tasks:");
  for (let i = 0; i < myTasks.length; i++) {
    console.log(`${i + 1}. ${myTasks[i]}`);
  }
}


// 4. ADD TASK

addButton.addEventListener("click", () => {
  const newTask = inputField.value.trim();
  if (newTask === "") {
    console.log("No task entered.");
    return;
  }

  myTasks.push(newTask);
  inputField.value = "";
  renderTasks();
  console.log("Task added!");
});


// 5. DELETE SPECIFIC TASK

deleteButton.addEventListener("click", () => {
  const taskToDelete = inputField.value.trim();
  if (taskToDelete === "") {
    console.log("Type the exact task you want to delete.");
    return;
  }

  const updatedList = [];

  for (const task of myTasks) {
    if (task !== taskToDelete) {
      updatedList.push(task);
    }
  }

  myTasks = updatedList;
  inputField.value = "";
  renderTasks();
  console.log("Task deleted (if it existed).");
});

// 6. CLEAR ALL TASKS

clearButton.addEventListener("click", () => {
  while (myTasks.length > 0) {
    myTasks.pop();
  }

  renderTasks();
  console.log("All tasks cleared.");
});



 