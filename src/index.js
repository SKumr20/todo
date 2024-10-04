import './styles.css';
import 'flowbite';

import { createTask } from './tasks';

let taskId = 1;
let remainingTasks = 1;

//get all the elements

const indicator = document.getElementById('indicator');
const addTaskBtn = document.getElementById('addTaskBtn');
const taksInputPopup = document.getElementById('taskInput');
const enterBtn = document.getElementById('enterBtn');
const cancelBtn = document.getElementById('cancelBtn');
const taskNameInput = document.getElementById('taskName');


indicator.innerHTML = remainingTasks;

addTaskBtn.addEventListener('click', () => {
    taksInputPopup.classList.remove('hidden');
});

enterBtn.addEventListener('click', () => {
    const taskName = taskNameInput.value.trim();

    if (taskName) {
        createTask(taskName, taskId, updateIndicator);
        taskId++;
        remainingTasks++;
        indicator.innerHTML = remainingTasks;
        
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

// updateIndicator - updates number of tasks indicator and marks the tasks as completed

function updateIndicator(isChecked, label) {
    if (isChecked) {
        remainingTasks--;
        label.style.textDecoration = 'line-through';
        label.style.opacity = '0.4';
    }
    else {
        remainingTasks++;
        label.style.textDecoration = 'none';
        label.style.opacity = '1';
    }
    indicator.innerHTML = remainingTasks;
}

// Initial loaded task
createTask('Be Happy', 1, updateIndicator);