// 1.

let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let name = prompt("Enter your name:");
let day = +prompt("Day of birth:");
let month = +prompt("Month of birth:");

let personalNumber = (name.length + day + month) % topics.length;
alert(`Recommended vebinar: ${topics[personalNumber]}`);

let catalog = "";
for (let i = 0; i < topics.length; i++) {
    let status = "";
    if (seats[i] > 0) {
        status = "Seats are available";
    } else {
        status = "No seats available";
    }
    catalog += `${i + 1}. ${topics[i]} (${seats[i]} seats) - ${status}\n`;
}
alert(catalog);

let min = +prompt("Enter minimal amount of seats:");
let res1 = "";
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= min) {
        res1 += `${topics[i]}\n`;
    }
}

if (res1 !== "") {
    alert(res1);
} else {
    alert("No correlation");
}

// 2.
let search = prompt("Enter the name for vebinar:");
let index = -1;
for (let i = 0; i < topics.length; i++) {
    if (topics[i] === search) {
        index = i;
    }
}

if (index !== -1 && seats[index] > 0) {
    let confirmRegistration = confirm("Wanna enroll?");
    if (confirmRegistration) {
        seats[index] = seats[index] - 1;
        alert(`Seats left: ${seats[index]}`);
    }
} else {
    alert("There are no seats available, or vebinar is not found");
}

// 3.
let participants = [name];
for (let i = 0; i < 4; i++) {
    let participantName = prompt(`Participant name ${i + 2}:`);
    participants.push(participantName);
}

let participantList = "";
let countLong = 0;
for (let i = 0; i < participants.length; i++) {
    participantList += `${i + 1}. ${participants[i]}\n`;
    if (participants[i].length > name.length) {
        countLong++;
    }
}
alert(`${participantList} longer than yours: ${countLong}`);

let confirmChange = confirm("Wanna chnage your name?");
if (confirmChange) {
    let num = +prompt("Number of participant:") - 1;
    let newName = prompt("New name:");
    participants[num] = newName;
}

// 4.
let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (day + month) % 7;
let personalVisits = [];

for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
        if (values[i] > max) max = values[i];
        if (values[i] < min) min = values[i];
    }
    return [sum, sum / values.length, max, min];
}

let stats = getVisitStats(personalVisits);

let threshold = +prompt("Enter the threshold of visiting:");
let count = 0;
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= threshold) {
        count++;
    }
}

alert(`Bonus: ${bonus}\nSum: ${stats[0]}\nAverage: ${stats[1]}\nMax: ${stats[2]}\nMin: ${stats[3]}\nReached threshold: ${count}`);

if (confirm("Wanna see amount of vebinars that reached threshold?")) {
    let numbersMessage = "";
    for (let i = 0; i < personalVisits.length; i++) {
        if (personalVisits[i] >= threshold) {
            numbersMessage += `Vebinar №${i + 1} (${personalVisits[i]})\n`;
        }
    }
    alert(numbersMessage);
}

// 5.
function showTopics() {
    let message = "";
    for (let i = 0; i < topics.length; i++) {
        message += `${i + 1}. ${topics[i]} — ${seats[i]} seats\n`;
    }
    alert(message);
}

function searchTopic() {
    let query = prompt("Name for search:");
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === query) {
            alert(`Found: ${topics[i]}, seats: ${seats[i]}`);
            return;
        }
    }
    alert("No.");
}

let isRunning = true;
do {
    let choice = prompt("1-show\n 2-add\n 3-rename\n 4-find\n 5-delete\n 0-exit");
    
    switch (choice) {
        case "1":
            showTopics();
            break;
        case "2":
            let newTopic = prompt("Name:");
            if (newTopic && newTopic.trim() !== "") {
                topics.push(newTopic);
                seats.push(+prompt("Seats:"));
            }
            break;
        case "3":
            let index = +prompt(`Number (1-${topics.length}):`) - 1;
            if (index >= 0 && index < topics.length) {
                let updatedName = prompt("New name:");
                if (updatedName && updatedName.trim() !== "") {
                    topics[index] = updatedName;
                }
            }
            break;
        case "4":
            searchTopic();
            break;
        case "5":
            if (confirm("Delete last vebinar?")) {
                topics.pop();
                seats.pop();
            }
            break;
        case "0":
            if (confirm("Exit?")) {
                isRunning = false;
            }
            break;
    }
} while (isRunning);

// 6.
let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let personalScore = (userBirthDay * userBirthMonth + userName.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        }
        else if (scores[i] >= 50) {
            medium.push(scores[i]);
        }
        else {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

while (confirm("Add new grade?")) {
    let val = +prompt("Enter new grade:");
    if (val >= 0 && val <= 100) requestScores.push(val);
}

let [high, medium, low] = distributeRequests(requestScores);

function getAvg(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}

let largest = "High";
let maxLen = high.length;
if (medium.length > maxLen) { 
    largest = "Medium"; 
    maxLen = medium.length; 
}
if (low.length > maxLen) { 
    largest = "Low"; 
    maxLen = low.length; 
}
else if (high.length === medium.length && medium.length === low.length) { 
    largest = "All are equal"; 
}

let mygroup;
if (personalScore >= 85 && personalScore <= 100) {
    mygroup = 'high';
}
else if (personalScore >= 50 && personalScore < 85) {
    mygroup = 'medium';
}
else if (personalScore <= 50) {
    mygroup = 'low';
}

alert(
    `Your grade: ${personalScore} (${myGroup})\n` +
    `High: [${high}], amount: ${high.length}, avg: ${getAvg(high)}\n` +
    `Medium: [${medium}], amount: ${medium.length}, avg: ${getAvg(medium)}\n` +
    `Low: [${low}], amount: ${low.length}, avg: ${getAvg(low)}\n` +
    `Largest group: ${largest}`
);