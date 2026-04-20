# Dynamic Task Manager

A simple JavaScript-based task management tool that demonstrates the core concepts of user input handling, arrays, loops, DOM manipulation, and basic CRUD logic.

## Project Purpose
This project was designed to combine several foundational JavaScript skills into one working system:

- Capturing user input from an HTML form
- Storing data inside an array
- Rendering a dynamic, numbered list using loops
- Removing specific items using a collector array
- Clearing all items using a loop controlled by a changing condition

It represents the first step toward building full CRUD-style applications.

## How It Works

### **Input → Array**
When the user types a task and clicks **Add**, the value is captured with `getElementById`, cleaned with `.trim()`, and pushed into the `myTasks` array.

### **Rendering Tasks**
A `renderTasks()` function loops through the array and rebuilds the task list every time the data changes.  
This keeps the UI and the array perfectly in sync.

### **Deleting a Specific Task**
Instead of mutating the array while looping, the project uses a **collector array**.  
Only tasks that *don’t* match the user’s input are kept.  
This is the manual version of `.filter()`.

### **Clearing All Tasks**
A `while` loop removes items one at a time using `.pop()` until the array is empty.  
This demonstrates loop logic based on a changing condition.

## Technologies Used
- **HTML** for structure  
- **JavaScript** for logic and interactivity  
- **DOM manipulation** for updating the UI  

## Features
- Add new tasks  
- Display tasks in a clean, numbered list  
- Delete a specific task by typing its exact name  
- Clear all tasks at once  

## What I Learned
- How to connect HTML and JavaScript using DOM hooks  
- How to use event listeners to trigger logic  
- How arrays store and manage dynamic data  
- How loops control rendering and filtering  
- How CRUD logic works at a beginner level  

## How to Run
1. Open the project folder in VS Code  
2. Right-click `index.html`  
3. Select **Open with Live Server**  
4. Use the input field and buttons to interact with the app  

## GitHub Repository
rconnorr3/dynamic-task-manager
