export function timeModal(taskId) {
    const timeInputModal = document.getElementById('timeInputModal');

    timeInputModal.classList.remove('hidden');

    const cancelBtn = document.getElementById('cancelTimeBtn');
    cancelBtn.addEventListener('click', () => {
        timeInputModal.classList.add('hidden');
    })
}