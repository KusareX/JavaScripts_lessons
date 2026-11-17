let participantInput = document.querySelector('#participant-name');
let eventInput = document.querySelector('#event-name');
let addButton = document.querySelector('#add-button');
let errorMessage = document.querySelector('#error-message');
let totalCount = document.querySelector('#total-count');
let confirmedCount = document.querySelector('#confirmed-count');
let emptyMessage = document.querySelector('#empty-message');
let participantsList = document.querySelector('#participants-list');

function updateCounters() {
    let items = participantsList.querySelectorAll('.participant-card');
    totalCount.textContent = items.length;

    let confirmedItems = participantsList.querySelectorAll('.participant-card.done');
    confirmedCount.textContent = confirmedItems.length;

    if (items.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function clubTask() {
    let participantName = participantInput.value.trim();
    let eventName = eventInput.value.trim();

    if (participantName === '' || eventName === '') {
        errorMessage.textContent = 'Fields cannot be empty';
        return;
    }

    errorMessage.textContent = '';

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('participant-card');

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('card-info');

    let nameStrong = document.createElement('strong');
    nameStrong.textContent = participantName;
    
    let eventP = document.createElement('p');
    eventP.textContent = eventName;

    let statusCard = document.createElement('span');
    statusCard.classList.add('status-card', 'awaiting');
    statusCard.textContent = 'Awaiting';

    infoDiv.append(nameStrong, eventP, statusCard);

    let actionsDiv = document.createElement('div');
    actionsDiv.classList.add('card-actions');

    let toggleButton = document.createElement('button');
    toggleButton.textContent = 'Confirm';
    toggleButton.classList.add('btn-toggle');

    toggleButton.addEventListener('click', function () {
        cardDiv.classList.toggle('done');
        
        if (cardDiv.classList.contains('done')) {
            statusCard.textContent = 'Confirmed';
            statusCard.classList.remove('awaiting');
            statusCard.classList.add('confirmed');
            toggleButton.textContent = 'Cancel';
        } else {
            statusCard.textContent = 'Awaiting';
            statusCard.classList.remove('confirmed');
            statusCard.classList.add('awaiting');
            toggleButton.textContent = 'Confirm';
        }
        
        updateCounters();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-delete');

    deleteButton.addEventListener('click', function () {
        let userAns = confirm('Delete this request?');
        if (userAns) {
            cardDiv.remove();
            updateCounters();
        }
    });

    actionsDiv.append(toggleButton, deleteButton);
    cardDiv.append(infoDiv, actionsDiv);
    participantsList.append(cardDiv);

    updateCounters();

    participantInput.value = '';
    eventInput.value = '';
}

addButton.addEventListener('click', clubTask);