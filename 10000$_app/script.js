document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    
    const task = {
      id: generateId(),
      title: taskTitle,
      description: taskDescription,
      dueDate: dueDate,
      priority: priority
    };
    
    addTaskToList(task);
    saveTask(task); // Save task to local storage
    document.getElementById('taskForm').reset();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToList(task));
  });
  
  function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.dataset.taskId = task.id;
    li.className = 'task-item';
    li.innerHTML = `
      <h3>${task.title}</h3>
      <p>Description: ${task.description}</p>
      <p>Due Date: ${new Date(task.dueDate).toLocaleString()}</p>
      <p>Priority: ${task.priority}</p>
      <button class="view-btn">View</button>
    `;
    taskList.appendChild(li);
    
    li.querySelector('.view-btn').addEventListener('click', function() {
      openModal(task);
    });
  }
  
  function saveTask(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }
  
  function openModal(task) {
    const modal = document.getElementById('taskModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDueDate = document.getElementById('modalDueDate');
    const modalPriority = document.getElementById('modalPriority');
    const editTaskBtn = document.getElementById('editTaskBtn');
    const deleteTaskBtn = document.getElementById('deleteTaskBtn');
    
    modalTitle.textContent = task.title;
    modalDescription.textContent = "Description: " + task.description;
    modalDueDate.textContent = "Due Date: " + new Date(task.dueDate).toLocaleString();
    modalPriority.textContent = "Priority: " + task.priority;
    
    modal.style.display = 'block';
    
    editTaskBtn.addEventListener('click', function() {
      editTask(task);
      modal.style.display = 'none';
    });
    
    deleteTaskBtn.addEventListener('click', function() {
      deleteTask(task.id);
      modal.style.display = 'none';
    });
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }
  
  function editTask(task) {
    // Implement task editing functionality
  }
  
  function deleteTask(taskId) {
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks = savedTasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
      taskElement.remove();
    }
  }
  
  function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  