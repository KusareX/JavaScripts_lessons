let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-button');
let taskCounter = document.querySelector('#task-counter');
let taskList = document.querySelector('#task-list');

function updateCounter () {
    let count = taskList.querySelectorAll('li').length;
    taskCounter.textContent = count;
}

function addTask() {
    let text = taskInput.value.trim();

    if (text === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.classList.add('task');
    let span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    let doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function () {
        li.classList.toggle('done')
    })

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn')

    editButton.addEventListener('click', function () {
        let newText = prompt('Change task', span.textContent);
        if (newText === null) {
            return;
        }
        if (newText.trim() === '') {
            alert('Enter a non-empty task');
            return;
        }
        span.textContent = newText.trim();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn')

    deleteButton.addEventListener('click', function () {
        let userAns = confirm('Delete this task?');
        if (userAns) {
            li.remove();
            updateCounter();
        }
    })

    li.append(span, doneButton, editButton, deleteButton);
    taskList.append(li);
    updateCounter();
    taskInput.value = '';
}

addButton.addEventListener('click', addTask);