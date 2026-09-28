// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// console.log(Number('Hello')); NaN

// let age = +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 || age >= 150) {
//     alert('Please enter your age');
//     age = +prompt('Enter your age');
// }
// console.log(age);

// const correct_pin = 1111;

// let user_pin = +prompt('Enter your pin');
// let attempts = 1;

// while (user_pin !== correct_pin && attempts < 3) {
//     user_pin = +prompt('Enter your pin');
//     attempts++;
// }

// if (user_pin === correct_pin) {
//     alert('Access allowed');
// }
// else {
//     alert('Account blocked');
// }

// while (attempts <= 3) {
//     let user_pin = +prompt('Enter your pin');
//     if (user_pin === correct_pin) {
//         alert('Access allowed')
//         break;
//     }
//     attempts++;
//     alert('Pin is incorrect')
// }

// let menu_choice;

// do {
//     menu_choice = +prompt('Choose an action:\n' +
//         '1 - Open profile\n' +
//         '2 - Profile settings\n' +
//         '0 - Exit');
//     if (menu_choice === 1) {
//         alert('Profile is opening...');
//     }
//     else if (menu_choice === 2) {
//         alert('Profile settings in progress...');
//     }
//     else if (menu_choice === 0) {
//         alert('Exiting...');
//     }
//     else {
//         alert('Command unclear');
//     }
// }while (menu_choice !== 0)

// let menu_choice;

// do {
//     menu_choice = +prompt('Choose an action:\n' +
//         '1 - Open profile\n' +
//         '2 - Profile settings\n' +
//         '3 - Send a message\n' +
//         '4 - View information\n' +
//         '5 - Delete account\n' +
//         '0 - Exit');
//     switch(menu_choice) {
//         case 1:
//             alert('Profile opening...')
//             break;
//         case 2:
//             alert('Settings opening...')
//             break;
//         case 3:
//             alert('Sending a message...')
//             break;
//         case 4:
//             alert('Information viewed...')
//             break;
//         case 5:
//             alert('Deleting account...')
//             break;
//     }
// } while (menu_choice !== 0);

// let grade_sum = 0;
// let grade_count = 0;

// while (grade_count < 5) {
//     let num;
//     num = +prompt('Enter the grade');
//     if (Number.isNaN(num) && num <= 0 && num >= 12) {
//         alert('Invalid grade');
//         continue;
//     }
//     grade_sum += num;
//     grade_count++;
// }
// alert(`Avergae grade is ${grade_sum/grade_count}`)

//-------------------------------------------------------------

let age = +prompt('Enter your age');

while (Number.isNaN(age) || age < 12 || age > 90) {
    alert('Please enter your age');
    age = +prompt('Enter your age');
}

const pin = 4321;
let attempts = 3; // лічильник
let user_pin = +prompt('Enter your pin');
let is_valid_pin = false;

while (user_pin !== pin && attempts > 1) {
    attempts--;
    alert(`Wrong pin. You have ${attempts} attempts left`);
    user_pin = +prompt('Enter your pin');
}

// прапорець
if (user_pin === pin) {
    is_valid_pin = true;
}

let menu_choice;

if (is_valid_pin) {
    do {
        menu_choice = +prompt(
            'Choose an action:\n' +
            '1 - Особистий кабінет\n' +
            '2 - Повідомлення\n' +
            '3 - Налаштування\n' +
            '0 - Вихід'
        );

        switch (menu_choice) {
            case 1:
                alert('Account opening');
                break;
            case 2:
                alert('Message sending');
                break;
            case 3:
                alert('Settings opening');
                break;
            case 0:
                alert('Exiting');
                break;
            default:
                alert('No such option available');
                break;
        }

    } while (menu_choice !== 0);
} 
else {
    alert('Access denied');
}