// let langs = ['Python', 'JavaScript', 'Rust'];
// console.log(langs);
// console.log(langs[1]);
// console.log(langs.length);

// for (let i = 0; i < langs.length; i++) {
//     console.log(langs[i]);
// }

// function countSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// let nums = [10, 15, 24, 47]
// console.log(countSum(nums));

// console.log(nums);

// let name = [];
// name.push('Ivan');
// name.push('Ivan2');
// name.pop();
// name.unshift('Ivan3', 'Ivan4');
// name.shift();
// console.log(name.slice(0, 1))

// console.log(name);

// let colors = ['red', 'green', 'blue', 'yellow', 'white'];
// colors.splice(0, 3, 'pink');
// let deleted = colors.splice(3, 2);
// colors.splice(0, 0, 'black');
// console.log(colors);

// function registerUser(name) {
//     if (name.trim() === '') {
//         alert('Please enter your name');
//         return;
//     }
//     let duplicatedName = false;
//     for (let i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === name) {
//             duplicatedName = true;
//         }
//     }
//     if (duplicatedName) {
//         alert('Name already taken');
//     } else {
//         eventNames.push(name);
//         alert('Successfully registered');
//     }
// }

// function removeName(name) {
//     let index = -1;
//     for (let i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert('Such user not found');
//     } else {
//         eventNames.splice(index, 1);
//     }
// }

// function printAmount() {
//     alert(`Total amount of participants: ${eventNames.length}`);
// }

// registerUser('Dima');   
// removeName('Johan');
// printAmount();
// console.log(eventNames);

// let eventNames = ['John', 'Jack', 'Jason', 'Johan', 'Jonathan'];

// for (let i = 0; i < eventNames; i++) {
//     console.log(`${eventNames[i]}`);
// }

// for (let name of eventNames) {
//     console.log(`${name}`);
// }

// eventNames.forEach(function (name, index) {
//     console.log(index);
//     console.log(name);
// })