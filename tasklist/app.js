// Define UI Vars
const form = document.querySelector('#task-form');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

// Load all events
loadEventListeners();


function loadEventListeners() {
  //DOM load 
  document.addEventListener('DOMContentLoaded',getTasks)
  // Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  tasksList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter Tasks event
  filter.addEventListener('keyup', filterTasks);
}
//get tasks from ls
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create text node and append to li
    li.append(document.createTextNode(task))
    //Create new link element
    const link = document.createElement('a');
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.append(link);
    //Append li to ul
    tasksList.append(li);
  });
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
    //store into localstorage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
  }
  e.preventDefault();
}
//storeTask
function storeTaskInLocalStorage(task){
 let tasks;
 if(localStorage.getItem('tasks') === null){
   tasks = []
 } else{
   tasks = JSON.parse(localStorage.getItem('tasks'))
 }
 tasks.push(task)

 localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
    if (confirm('Are you Sure?')) {
      e.target.parentNode.parentNode.remove();

      // remove from ls
      removeTaskFromLocalStorage( e.target.parentNode.parentNode)
    }
  }
}

//remove from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1)
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
// Clear tasks
function clearTasks(e) {
  // tasksList.innerHTML = ''

  //Faster
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
  }
  clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage(){
  localStorage.clear();
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