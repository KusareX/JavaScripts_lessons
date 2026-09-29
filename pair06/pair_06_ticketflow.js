let action_type;
let start_price = 0;

while (true) {
    action_type = +prompt('Choose the type of the action:\n1 - cinema (150 uah)\n2 - theatre (220 uah)\n3 - concert (350 uah)');

    let whether_valid = false;
    switch (action_type) {
        case 1:
            start_price = 150;
            whether_valid = true;
            break;
        case 2:
            start_price = 220;
            whether_valid = true;
            break;
        case 3:
            start_price = 350;
            whether_valid = true;
            break;
        default:
            alert('Such option unavailable');
    }
    if (whether_valid) {
        break;
    }
}

let day_type;
while (true) {
    day_type = +prompt('Choose the type of the day:\n1 - weekday\n2 - weekend');
    if (day_type === 1 || day_type === 2) {
        break;
    }
    alert('Enter the correct option');
}

if (day_type === 2) {
    start_price = start_price * 1.15;
}

let ticket_amount;
while (true) {
    ticket_amount = +prompt('Enter the amount of tickets (from 1 to 6)');
    if (ticket_amount >= 1 && ticket_amount <= 6) {
        break;
    }
    alert('Enter the correct amount of tickets');
}

let tickets_total = 0;
let free_tickets = 0;
let discount_tickets = 0;
let full_price_tickets = 0;
let total_price = 0;

for (let i = 1; i <= ticket_amount; i++) {
    let age;
    
    while (true) {
        age = +prompt('Enter your age (-1 to exit)');
        
        if (age === -1) {
            break;
        }
        
        if (!Number.isNaN(age) && age >= 0 && age <= 150) {
            break;
        }
        
        alert('Enter the correct age');
    }

    if (age === -1) {
        break;
    }

    tickets_total++;

    if (age >= 0 && age <= 5) {
        free_tickets++;
        continue;
    }

    let discount_percentage = 0;

    if (age >= 6 && age <= 12) {
        discount_percentage = 50;
    } else if (age >= 13 && age <= 17) {
        discount_percentage = 20;
    } else if (age >= 18 && age <= 59) {
        discount_percentage = 0;
    } else if (age >= 60) {
        discount_percentage = 25;
    }

    if (age >= 18 && age <= 25) {
        let whether_has_student_ticket = confirm('Do you have student\'s ticket?');
        if (whether_has_student_ticket) {
            discount_percentage += 10;
        }
    }

    if (discount_percentage > 0) {
        discount_tickets++;
    } else {
        full_price_tickets++;
    }
 
    let ticket_price = start_price * (1 - discount_percentage / 100);
    total_price += ticket_price;
}

let final_price = total_price;
if (total_price > 1000) {
    final_price = total_price * 0.95;
}

alert(
    `Tickets total: ${tickets_total}\n` +
    `Free tickets: ${free_tickets}\n` +
    `Discount tickets: ${discount_tickets}\n` +
    `Full price tickets: ${full_price_tickets}\n` +
    `Total price: ${total_price} uah\n` +
    `Ultimate price: ${final_price} uah`
);