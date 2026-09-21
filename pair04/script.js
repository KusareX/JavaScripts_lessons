// for (let i = 10; i >= 1; i--) {
//     console.log(`Число № ${11-i} - ${i}`);
// }

// sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += 1;
//     console.log(sum);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i >= 20 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         continue ;
//     }
//     console.log(`${i}\n`);
// }

let students = +prompt('Введіть кількість учнів');
if (students > 0) {
    let sum = 0, high_grade = 0, low_grade = 0;
    let highest_grade = 1, lowest_grade = 12;
    for (let i = 1; i <= students; i++) {
        let grade = +prompt(`Введіть оцінку учня № ${i} від 1 до 12`)
        if (!(grade >= 1 && grade <= 12)) {
            alert('Enter valid mark')
            i--;
            continue;
        }
        sum += grade;
        if (grade >= 10 ) {
            high_grade++;
        }
        else {
            low_grade++;
        }
        if (grade < lowest_grade) {
            lowest_grade = grade;
        }
        if (grade < highest_grade) {
            highest_grade = grade;
        }
    }
    avg = sum / students;
}
alert(
    `Кількість учнів: ${students}\n
    Середнє значення серед оцінок: ${avg}\n
    Мінімальна оцінка: ${lowest_grade}\n
    Максимальна оцінка: ${lowest_grade}\n
    Високий рівень: ${high_grade}\n
    Низький рівень: ${low_grade}
    `)