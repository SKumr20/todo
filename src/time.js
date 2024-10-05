export function timeModal(taskId) {
    const timeInputModal = document.getElementById('timeInputModal');
    const enterTimeBtn = document.getElementById('enterTimeBtn');
    const dateInput = document.getElementById('datepicker-actions');
    const timeInput = document.getElementById('time');


    timeInputModal.classList.remove('hidden');

    const cancelBtn = document.getElementById('cancelTimeBtn');
    cancelBtn.addEventListener('click', () => {
        timeInputModal.classList.add('hidden');
    });

    enterTimeBtn.addEventListener('click', () => {
        const dateSelect = dateInput.value;
        const timeSelect = timeInput.value;

        if (dateSelect && timeSelect) {
            const taskLabel = document.querySelector(`label[for="task${taskId}"]`);
            const timeSpan = document.createElement('div');
            timeSpan.className = 'text-xs font-light tracking-tight text-gray-500';
            timeSpan.textContent = `${dateSelect} at ${timeSelect}`;

            taskLabel.innerHTML = taskLabel.textContent.replace(/\(Due on.*?\)/, '');
            taskLabel.appendChild(timeSpan);

            timeInputModal.classList.add('hidden');
        }
    })
}