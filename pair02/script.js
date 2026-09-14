// if (condition){
//     action1;
//     action2;
// }

// else if (){
//
// }

// true
// 1

// false
// 0
// 0n
// ""
// ''
// NaN
// null
// undefined

// let a = 10; b = '10';
// console.log(a == b); // нестрога нерівність
// console.log(a === b); // строга нерівність
// console.log(a != b);
// console.log(a !== b);

// let a = Number(prompt('Enter a number: '));
// let b = +prompt('Enter another number: ');
// let c;

// if (a > b){
//     c = `${a} > ${b}`;
// }
// else if (a < b){
//     c = `${a} < ${b}`;
// }
// else {
//     c = `${a} == ${b}`;
// }
// alert(c);

// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a == b';

// let course = prompt('What is the name of the course? '), title;
// switch (course) {
//     case 'figma':
//         title = 'Figma';
//         break;
//     case 'web':
//     case 'html':
//     case 'css':
//     case 'js':
//         title = 'HTML/CSS + Js';
//         break;
//     case 'devops':
//         title = 'Docker + AWS';
//         break;
//     default:
//         title = 'No courses found';
// }
// alert(title);

//------------------------------------------

// назву товару, вартість, кількісь, якщо сума покупки більше 5000, знижка 10% вивести суму, в іншому випадку просто вивести суму

// let name = prompt('Enter the name of the product: ');
// let price = +prompt('Enter the price of the product: ');
// let amount = +prompt('Enter the amount of the product: ');

// let overall_cost = price * amount;

// if (overall_cost > 5000) {
//     overall_cost -= overall_cost * 0.1;
// }

// alert(overall_cost);

// курьер, пошта, самовивіз, через switch визначити тип доставки, вивести варість доставки, курьер 200, пошта 100, самовивіз безкоштовно

// let type = prompt('Enter the kind of supply: ');
// let amount;

// switch (type) {
//     case 'courier':
//         amount = '200 грн';
//         break;
//     case 'mail':
//         amount = '100 грн';
//         break;
//     case 'pickup':
//         amount = 'On the house';
//         break;
// }

// alert(amount);

// let a = true;
// console.log(!a);

// let a = 10, b = 15, c = 5;

// if (a > b && a> c){
//     console.log(a);
// }
// else if (b > a || c > a) {
//     console.log(b);
// }