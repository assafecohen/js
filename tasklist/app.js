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
  //Remove task event
  tasksList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter Tasks event
  filter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a Task');
  }
  else {
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
    //Append li to ul
    tasksList.append(li);

    taskInput.value = '';
  }
  e.preventDefault();
}

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
    if (confirm('Are you Sure?')) {
      e.target.parentNode.parentNode.remove();
    }
  }
}

// Clear tasks
function clearTasks(e) {
  // tasksList.innerHTML = ''

  //Faster
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }
}

//filter tasks
function filterTasks(e) {
  text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
          task.style.display = 'block';
      } else {
          task.style.display = 'none';
      }
    }
  )
}