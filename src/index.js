import './styles.css';

import { createTask } from './tasks';

let taskId = 1;
let indicator = document.getElementById('indicator');
indicator.innerHTML = 0;

document.getElementById('addTaskBtn').addEventListener('click', function () {
    // prompt user for task
    const taskName = prompt('Task name: ');

    // if user provides a name, create the task
    if (taskName) {
        createTask(taskName, taskId);
        taskId++;
        indicator.innerHTML = taskId-1;
    }
});