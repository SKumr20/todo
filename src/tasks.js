import { timeModal } from "./time";
import { saveTask, removeTasks, getTasks } from "./storage";

// Create a container div
export function createTask(name, id, updateIndicator, isNew = true) {
  const taskContainer = document.getElementById('taskContainer');

  const taskDiv = document.createElement('div');
  taskDiv.className = 'flex items-center justify-between w-full mb-2';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task${id}`;
  checkbox.className = 'h-4 w-4 rounded-lg flex-shrink-0';

  const label = document.createElement('label');
  label.htmlFor = `task${id}`;
  label.className = 'ms-2 flex-grow break-words';
  label.style.whiteSpace = 'normal';
  label.textContent = name;

  const timeBtn = document.createElement('button');
  timeBtn.className = 'flex-shrink-0 w-6 h-6 flex items-center justify-center hover:scale-110';
  timeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 20" class="fill-gray-500" style="vertical-align: middle;">
      <path fill="#6B7280" d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"></path>
    </svg>
  `;

  const removeTaskBtn = document.createElement('button');
  removeTaskBtn.className = 'text-xl font-extralight text-gray-500 hover:text-black hover:scale-110 ';
  removeTaskBtn.textContent = 'x';

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(timeBtn);
  taskDiv.appendChild(removeTaskBtn);
  taskContainer.appendChild(taskDiv);

  // Only save the task to local storage if it is new (not from local storage)
  if (isNew) {
    saveTask({ id, name });
  }

  // Checkbox event listener to update task indicator
  checkbox.addEventListener('change', () => {
    updateIndicator(checkbox.checked, label);
  });

  // Remove button event listener
  removeTaskBtn.addEventListener('click', () => {
    taskContainer.removeChild(taskDiv);
    if (!checkbox.checked) {
      updateIndicator(true, label);
    }
    removeTasks(id);
  });

  // Time button event listener for the time modal
  timeBtn.addEventListener('click', () => {
    timeModal(id, label);
  });
}

export function loadTasks(updateIndicator) {
  const tasks = getTasks();
  tasks.forEach(task => {
    createTask(task.name, task.id, updateIndicator, false); // Avoid re-saving to local storage
  });
}
