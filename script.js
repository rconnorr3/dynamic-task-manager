// 1. Global array to store tasks
let myTasks = [];

// 2. Grab HTML elements (the "Hook" step)
const inputField = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const deleteButton = document.getElementById("deleteBtn");
const clearButton = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

/* 
Why this code?
- let myTasks = [] is your “database” in memory.
- getElementById connects JS to specific HTML elements so you can read values and react to clicks. 
*/
function renderTasksForOf() {
  // Clear the current list in the DOM
  taskList.innerHTML = "";

  // Loop through tasks and create <li> for each
  for (const task of myTasks) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }

  console.log("Current tasks (for...of):");
  for (const task of myTasks) {
    console.log(task);
  }
}
/*Why this code?
1) for (const task of myTasks) is perfect when you just care about each value.
2) We update both:
    a) The DOM (<ul>) so the user sees the list.
    b)The console so you can debug.
*/

function renderTasksNumbered() {
  taskList.innerHTML = "";

  // Classic for loop so we can use the index
  for (let i = 0; i < myTasks.length; i++) {
    const task = myTasks[i];
    const li = document.createElement("li");
    // Humans start at 1, computers at 0
    li.textContent = `${i + 1}. ${task}`;
    taskList.appendChild(li);
  }

  console.log("Current tasks (numbered):");
  for (let i = 0; i < myTasks.length; i++) {
    console.log(`${i + 1}. ${myTasks[i]}`);
  }                                                                                                                                                                                                                                 
}

/*Why this code?
- Classic for gives you i, the index.
- i + 1 makes the list human-friendly: 1., 2., 3. instead of 0., 1., 2..
*/

function renderTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < myTasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${myTasks[i]}`;
    taskList.appendChild(li);
  }
}

// Listen for clicks on "Add Task"
addButton.addEventListener("click", function () {
  // 1. Get the text the user typed
  const newValue = inputField.value.trim();

  // Guard: ignore empty strings
  if (newValue === "") {
    console.log("No task entered.");
    return;
  }

  // 2. Add it to your array
  myTasks.push(newValue);

  // 3. Clear the input box
  inputField.value = "";

  // 4. Show updated list
  renderTasks();

  console.log("Task Added!");
});

/*Why this code?
- Inside the click listener we grab .value—this avoids the “input is empty” bug.
- .push() adds the new task to the end of the array.
- renderTasks() re-renders the list so the UI always matches the array.
 */

// Listen for clicks on "Delete Specific Task"
deleteButton.addEventListener("click", function () {
  const taskToDelete = inputField.value.trim();

  if (taskToDelete === "") {
    console.log("Type the exact task you want to delete.");
    return;
  }

  // New empty array (collector)
  const updatedList = [];

  // Look at every task in myTasks
  for (const task of myTasks) {
    // If the task is NOT the one to delete, keep it
    if (task !== taskToDelete) {
      updatedList.push(task);
    }
  }

  // Replace old array with filtered one
  myTasks = updatedList;

  // Clear input and re-render
  inputField.value = "";
  renderTasks();

  console.log("Updated list after delete:", myTasks);
});

/*Why this code?
- We don’t mutate the array while looping; we build a new one (updatedList).
- This is exactly the manual version of .filter(), which is what your project wants you to practice.
- task !== taskToDelete means “keep everything except the one we’re deleting.”
 */

// Listen for clicks on "Clear All"
clearButton.addEventListener("click", function () {
  // While there is at least one item in the array
  while (myTasks.length > 0) {
    // Remove the last item
    myTasks.pop();
  }

  // Re-render (now empty)
  renderTasks();

  console.log("All tasks cleared.");
});

/* Why this code?
- while (myTasks.length > 0) is a loop controlled by a changing condition.
- .pop() shrinks the array one element at a time until it hits length 0. 
*/


 