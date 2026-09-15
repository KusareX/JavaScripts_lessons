// 1
//
// let age = +prompt("Enter your age: ");
//
// if (age >= 18) {
//     alert(You are an adult');
// }
// else if (age >= 13) {
//     alert('You are a teenager');
// }
// else {
//     alert('You are a kid');
// }

// 2
//
// const login = 'admin';
// const password = '12345';
//
// let user_login = prompt('Введіть логін:');
// let user_password = prompt('Введіть пароль:');
//
// if (login === user_login && password === user_password) {
//     alert('You are logged in');
// }
// else {
//     alert('You are not logged in');
// }

// 3
//
// let day = +prompt('Введіть день тижня: ');
//
// if (day >= 1 && day <= 7) {
//     switch (day) {
//         case 1:
//             alert('Понеділок');
//             break;
//         case 2:
//             alert('Вівторок');
//             break;
//         case 3:
//             alert('Середа');
//             break;
//         case 4:
//             alert('Четвер');
//             break;
//         case 5:
//             alert('П\'ятниця');
//             break;
//         case 6:
//             alert('Субота');
//             break;
//         case 7:
//             alert('Неділя');
//             break;
//     }
// } else {
//     alert('Некоректне число');
// }

// 4
//
// let product_name = prompt("Enter your product name:");
// let product_price = +prompt("Enter your product price:");
// let product_amount = +prompt("Enter your product amount:");
// let if_has_card = confirm("Do you have the discount cards?");
// let delivery_type = prompt("Enter your delivery type (courier, mail, pickup):");

// let total_price = product_price * product_amount;

// let shop_discount = 0;
// if (total_price >= 10000) {
//     shop_discount = 0.15;
// }
// else if (total_price >= 5000) {
//     shop_discount = 0.10;
// }
// else if (total_price >= 2000) {
//     shop_discount = 0.05;
// }

// let card_discount;
// if (if_has_card) {
//     card_discount = 0.1;
// } 
// else {
//     card_discount = 0;
// }

// let delivery_cost = 0;
// switch (delivery_type) {
//     case 'mail':
//         delivery_cost = 200;
//         break;
//     case 'courier':
//         delivery_cost = 100;
//         break;
// }

// let ultimate_price = total_price * (1 - shop_discount - card_discount) + delivery_cost;

// alert(ultimate_price);