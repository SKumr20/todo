import './styles.css';

import { createTask } from './tasks';

let taskId = 1;

//get all the elements

const indicator = document.getElementById('indicator');
const addTaskBtn = document.getElementById('addTaskBtn');
const taksInputPopup = document.getElementById('taskInput');
const enterBtn = document.getElementById('enterBtn');
const cancelBtn = document.getElementById('cancelBtn');
const taskNameInput = document.getElementById('taskName');


indicator.innerHTML = taskId;

addTaskBtn.addEventListener('click', () => {
    taksInputPopup.classList.remove('hidden');
});

enterBtn.addEventListener('click', () => {
    const taskName = taskNameInput.value.trim();

    if (taskName) {
        createTask(taskName, taskId);
        taskId++;
        indicator.innerHTML = taskId;
        
        // reset the values
        taskNameInput.value = '';
        taksInputPopup.classList.add('hidden');
    }
});

// Hide popup for cancel button

cancelBtn.addEventListener('click', () => {
    taskNameInput.value = '';
    taksInputPopup.classList.add('hidden');
});

// Initial loaded task
createTask('Be Happy', 1);