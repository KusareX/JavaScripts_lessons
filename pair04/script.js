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

// let students = +prompt('Введіть кількість учнів');
// if (students > 0) {
//     let sum = 0, high_grade = 0, low_grade = 0;
//     let highest_grade = 1, lowest_grade = 12;
//     for (let i = 1; i <= students; i++) {
//         let grade = +prompt(`Введіть оцінку учня № ${i} від 1 до 12`)
//         if (!(grade >= 1 && grade <= 12)) {
//             alert('Enter valid mark')
//             i--;
//             continue;
//         }
//         sum += grade;
//         if (grade >= 10 ) {
//             high_grade++;
//         }
//         else {
//             low_grade++;
//         }
//         if (grade < lowest_grade) {
//             lowest_grade = grade;
//         }
//         if (grade < highest_grade) {
//             highest_grade = grade;
//         }
//     }
//     let avg = sum / students;
// }
// alert(
//     `Кількість учнів: ${students}\n
//     Середнє значення серед оцінок: ${avg}\n
//     Мінімальна оцінка: ${lowest_grade}\n
//     Максимальна оцінка: ${highest_grade}\n
//     Високий рівень: ${high_grade}\n
//     Низький рівень: ${low_grade}
//     `)

let participants = +prompt('Введіть кількість учасників тесту');

if (participants > 0) {
    let sum = 0, grade_90_100 = 0, grade_60_89 = 0, grade_below_60 = 0;

    let highest_grade = 0, lowest_grade = 100;

    let first_100 = 0;

    for (let i = 1; i <= participants; i++) {
        let grade = +prompt(`Введіть оцінку учасника № ${i} від 0 до 100`);

        if (!(grade >= 0 && grade <= 100)) {
            alert('Введіть число від 0 до 100')
            i--;
            continue;
        }
        
        sum += grade;

        if (grade >= 90 && grade <= 100) {
            grade_90_100++;
        }
        else if (grade >= 60 && grade <= 89) {
            grade_60_89++;
        }
        else {
            grade_below_60++;
        }

        if (grade > highest_grade) {
            highest_grade = grade;
        }

        if (grade < lowest_grade) {
            lowest_grade = grade;
        }
    
        if (grade === 100 && first_100 === 0) {
            first_100 = i;
        }
    }

    let avg = sum / participants;

    let first100_present;
    if (first_100 === 0) {
        first100_present = 'відсутній';
    } 
    else {
        first100_present = '№' + first_100;
    }

    alert(
        `Кількість учасників: ${participants}\n
        Середнє значення серед оцінок: ${avg}\n
        Кількість учасників (90 - 100): ${grade_90_100}\n
        Кількість учасників (60 - 89): ${grade_60_89}\n
        Кількість учасників нижче 60: ${grade_below_60}\n
        Максимальна оцінка: ${highest_grade}\n
        Мінімальна оцінка: ${lowest_grade}\n
        Перший учасник 100 балів: ${first100_present}
        `
    )
}