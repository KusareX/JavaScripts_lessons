let confirmBtn = document.querySelector('#confirmBtn');
let studentName = document.querySelector('#studentName');
let welcomeTag = document.querySelector('#welcomeTag');

confirmBtn.addEventListener('click', function() {
    let nameValue = studentName.value.trim();
    if (nameValue !== '') {
        welcomeTag.textContent = `Welcome, ${nameValue}!`;
    }
    else {
        welcomeTag.textContent = 'Enter your name';
    }
});

studentName.addEventListener('input', function() {
    let nameValue = studentName.value.trim();
    if (nameValue === '') {
        welcomeTag.textContent = 'Welcome!';
    }
    else {
        welcomeTag.textContent = `Welcome, ${nameValue}`;
    }
});

let themeSelect = document.querySelector('#themeSelect');
let profileCard = document.querySelector('.profileCard');

themeSelect.addEventListener('change', function() {
    profileCard.classList.toggle('darkTheme');

    if (card.classList.contains('darkTheme')) {
        themeBtn.textContent = 'Light theme';
    }
    else {
        themeBtn.textContent = 'Dark theme';
    }
});

let detailsBtn = document.querySelector('#detailsBtn');
let details = document.querySelector('#details');

detailsBtn.addEventListener('click', function() {
    details.classList.toggle('hidden');

    if (details.classList.contains('hidden')) {
        detailsBtn.textContent = 'Show description';
    }
    else {
        detailsBtn.textContent = 'Hide description';
    }
});