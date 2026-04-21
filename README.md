# Dynamic Task Manager 2.0

A clean, magical-themed task management tool built with HTML, Tailwind CSS, and beginner‑friendly JavaScript. The project demonstrates core concepts such as user input handling, arrays, loops, DOM manipulation, and basic CRUD logic, all wrapped inside a polished UI.

## Project Purpose
This project brings together foundational JavaScript concepts learned in class and applies them inside a real working system. It shows how HTML, CSS, and JavaScript connect to create an interactive application that responds to user input in real time.

## How It Works

### Input → Array
When the user types a task and clicks **Add**, the value is captured using `getElementById`, cleaned with `.trim()`, and stored inside the `myTasks` array.

### Rendering Tasks
A `renderTasks()` function loops through the array and rebuilds the task list every time the data changes.  
This ensures the UI always reflects the current state of the array.

### Deleting a Specific Task
A collector array is used to rebuild the list without the task the user typed.  
This is the manual version of `.filter()` and reinforces loop‑based filtering logic.

### Clearing All Tasks
A `while` loop removes items one at a time using `.pop()` until the array is empty.  
This demonstrates loop logic based on a changing condition.

## Technologies Used
- **HTML** for structure  
- **Tailwind CSS** for styling and layout  
- **JavaScript** for logic and interactivity  
- **DOM manipulation** for updating the UI  

## Features
- Add new tasks  
- Display tasks in a clean, numbered list  
- Delete a specific task by typing its exact name  
- Clear all tasks at once  
- Magical purple‑themed UI with wand icons  

## What I Learned
- How to connect HTML and JavaScript using DOM hooks  
- How event listeners trigger logic  
- How arrays store and manage dynamic data  
- How loops control rendering and filtering  
- How CRUD logic works at a beginner level  
- How Tailwind CSS can style an entire interface without writing custom CSS  

## How to Run
1. Open the project folder in VS Code  
2. Right‑click `index.html`  
3. Select **Open with Live Server**  
4. Use the input field and buttons to interact with the app  
 

## GitHub Repository
rconnorr3/dynamic-task-manager
