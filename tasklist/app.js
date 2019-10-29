// Define UI Vars
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

// Load all events
loadEventListeners();

function loadEventListeners() {
// Add task event
  form.addEventListener('submit', addTask);
}

//Add Task
  function addTask(e){
    if(taskInput.value === ''){
       alert('Add a Task');
    }
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create text node and append to li
    li.append(document.createTextNode(taskInput.value))
    //Create new link element
    const link = document.createElement('a');
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.append(link);
    console.log(li);
    //Append li to ul
    tasksList.append(li);

    taskInput.value = '';
    
    e.preventDefault();
  }