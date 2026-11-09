let enrollBtn = document.querySelector('#enrollBtn');
let statusDoc = document.querySelector('#status');
enrollBtn.addEventListener('click', function() {
    statusDoc.textContent = 'Successfully enrolled';
    enrollBtn.textContent = 'Record confirmed';
    statusDoc.classList.add('success');
})

let studentName = document.querySelector('#studentName');
let welcome = document.querySelector('#welcome');
studentName.addEventListener('input', function() {
    let nameDoc = studentName.value.trim();
    if (nameDoc === '') {
        welcome.textContent = 'We are glad to see you';
    }
    else {
        welcome.textContent = 'We are glad to see you, ' + nameDoc;
    }
})

let format = document.querySelector('#format');
let strong = document.querySelector('#strong');
format.addEventListener('change', function () {
    let selectPrice = Number(format.value);
    strong.textContent = selectPrice + 'UAH';
})

let detailsBtn = document.querySelector('#detailsBtn');
let details = document.querySelector('#details');
detailsBtn.addEventListener('click', function () {
    details.classList.toggle('hidden');

    if (details.classList.contains('hidden')) {
        detailsBtn.textContent = 'Show description';
    }
    else {
        detailsBtn.textContent = 'Hide description';
    }
})

let card = document.querySelector('#card');
let themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', function () {
    card.classList.toggle('dark');

    if (card.classList.contains('dark')) {
        themeBtn.textContent = 'Light theme';
    }
    else {
        themeBtn.textContent = 'Dark theme';
    }
})