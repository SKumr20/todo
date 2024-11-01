export function timeModal(taskId, taskLabel) {

    // get the html-created time modal
    const timeInputModal = document.getElementById('timeInputModal');
    const enterTimeBtn = document.getElementById('enterTimeBtn');
    const dateInput = document.getElementById('datepicker-actions');
    const timeInput = document.getElementById('time');

    // Show the modal
    timeInputModal.classList.remove('hidden');

    // Clear any previous values
    dateInput.value = '';
    timeInput.value = '';

    // Clean up previous click event to avoid duplication
    enterTimeBtn.replaceWith(enterTimeBtn.cloneNode(true)); 
    const newEnterTimeBtn = document.getElementById('enterTimeBtn');

    // Function to close the modal
    const closeModal = () => {
        timeInputModal.classList.add('hidden');
    };

    // cancel button on time modal hides it
    const cancelBtn = document.getElementById('cancelTimeBtn');
    cancelBtn.addEventListener('click', closeModal);

    // Set time function
    const setTimeFunction = () => {
        const dateSelect = dateInput.value;
        const timeSelect = timeInput.value;

        if (dateSelect && timeSelect) {
            const timeSpan = document.createElement('div');
            timeSpan.className = 'text-xs font-light tracking-tight text-gray-500';
            timeSpan.textContent = `${dateSelect} at ${timeSelect}`;

            // Update task label for each unique task
            taskLabel.innerHTML = taskLabel.textContent.replace(/\(Due on.*?\)/, '');
            taskLabel.appendChild(timeSpan);

            closeModal(); // Close modal after setting time
        }
    };

    // Attach the set time function to the cloned button
    newEnterTimeBtn.addEventListener('click', setTimeFunction);
}
