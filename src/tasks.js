// create a container div
export function createTask(name, id) {

    // Select taskContainer div from HTML
    const taskContainer = document.getElementById('taskContainer');


    const taskDiv = document.createElement('div');
    taskDiv.className =  'flex items-center';

    // create checkbox

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task${id}`;
    checkbox.className = 'h-4 w-4';

    // label for checkbox
    const label = document.createElement('label');
    label.htmlFor = `task${id}`;
    label.className = 'ms-2';
    label.textContent = name;

    // append checkbox and label to container div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    // Append the task div to the task container
    taskContainer.appendChild(taskDiv);
}

