// create a container div
export function createTask(name, id, updateIndicator) {

    // Select taskContainer div from HTML
    const taskContainer = document.getElementById('taskContainer');


    const taskDiv = document.createElement('div');
    taskDiv.className =  'flex items-center justify-between w-full mb-2';

    // create checkbox

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task${id}`;
    checkbox.className = 'h-4 w-4';

    // label for checkbox
    const label = document.createElement('label');
    label.htmlFor = `task${id}`;
    label.className = 'ms-2 flex-grow';
    label.textContent = name;

    // create cross button
    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.className = 'text-xl font-extralight text-red-500 hover:text-black';
    removeTaskBtn.textContent = 'x';

    // append checkbox and label to container div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(removeTaskBtn);

    // Append the task div to the task container
    taskContainer.appendChild(taskDiv);

    // add checkbox event listener to update task indicator
    checkbox.addEventListener('change', () => {
        updateIndicator(checkbox.checked, label);
    });

    // remove button event listener
    removeTaskBtn.addEventListener('click', () => {
        taskContainer.removeChild(taskDiv);
        // if task was not completed, remainingtasks decrement
        if (!checkbox.checked) {
            updateIndicator(true, label); // update the indicator 
        }
    })
}



