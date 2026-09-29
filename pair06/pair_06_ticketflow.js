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
            alert('Such option unavailable');gi
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
    start_price = start_price + start_price * 0.15
}

let ticket_amount;
while (true) {
    ticket_amount = +prompt('Enter the amount of tickets (from 1 to 6)')
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
        age = +prompt('Enter your age');
        if (!Number.isNaN(age) && age >= 0 && age <= 150) {
            break;
        }
        if (age === -1) {
            break;
        }
        alert('Enter the correct age');
    }
    
    tickets_total++;
    
    let discount_percentage = 0;

    if (age >= 0 && age <= 5) {
        free_tickets++;
        continue;
    }
    else if (age >= 6 && age <= 12) {
        discount_percentage = 0.5;
    }
    else if (age >= 13 && age <= 17) {
        discount_percentage = 0.8;
    }
    else if (age >= 18 && age <= 59) {
        discount_percentage = 0;
    }
    else if (age >= 60) {
        discount_percentage = 0.75;
    }

    if (age >= 15 && age <= 25) {
        let whether_has_student_ticket = confirm('Do you have student\'s ticket?');
        if (whether_has_student_ticket) {
            discount_percentage += 0.1
        }
    }

    let new_ticket_price = start_price * (1 - discount_percentage);
    total_price += new_ticket_price;

    if (discount_percentage > 0) {
        discount_tickets++;
    }
    else {
        full_price_tickets++;
    }

    let final_price = total_price;
    if (total_price > 1000) {
        final_price = total_price * 0.95;
    }
    
    alert(`Tickets_total: ${tickets_total}\n` +
        `Free tickets: ${free_tickets}\n` +
        `Discount tickets: ${discount_tickets}\n` +
        `Full price tickets: ${full_price_tickets}\n` +
        `Ultimate price: ${total_price} uah`
    )
}