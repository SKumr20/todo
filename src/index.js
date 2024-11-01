import './styles.css';
import 'flowbite';

import { createTask, loadTasks } from './tasks';

let remainingTasks = 0;

// Update taskId to start from the last saved task ID in local storage
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
let taskId = storedTasks.length > 0 ? Math.max(...storedTasks.map(task => task.id)) + 1 : 1;

// Load tasks from local storage and update remainingTasks count
loadTasks(updateIndicator);

const indicator = document.getElementById('indicator');
const addTaskBtn = document.getElementById('addTaskBtn');
const taksInputPopup = document.getElementById('taskInput');
const enterBtn = document.getElementById('enterBtn');
const cancelBtn = document.getElementById('cancelBtn');
const taskNameInput = document.getElementById('taskName');

// Initialize remainingTasks based on loaded tasks
remainingTasks = storedTasks.filter(task => !task.completed).length;
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
        
        taskNameInput.value = '';
        taksInputPopup.classList.add('hidden');
    }
});

cancelBtn.addEventListener('click', () => {
    taskNameInput.value = '';
    taksInputPopup.classList.add('hidden');
});

function updateIndicator(isChecked, label) {
    if (isChecked) {
        remainingTasks--;
        label.style.textDecoration = 'line-through';
        label.style.opacity = '0.4';
    } else {
        remainingTasks++;
        label.style.textDecoration = 'none';
        label.style.opacity = '1';
    }
    indicator.innerHTML = remainingTasks;
}

// Profile dropdown button
const profileBtn = document.getElementById('user-menu-button');
profileBtn.addEventListener('click', () => {
    const profileDropdown = document.getElementById('profile-dropdown');
    profileDropdown.classList.toggle('hidden');
});

// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu-button'); // Assuming you have a button for mobile menu
