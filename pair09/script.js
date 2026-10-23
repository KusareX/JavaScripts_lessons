// let book = {
//     title: 'Kobzar',
//     author: 'Shevchenko',
//     price: 299.9,
//     available: true
// }

// console.log(book.title);
// console.log(book['author']);
// book.price = 349.9;
// console.log(book.price);

// for (let key in book) {
//     console.log(`${key}: ${book[key]}`);
// }

// let books = [
//     {id: 1, title: 'Kobzar', author: 'Taras Shevchenko', price: 299.9, available: true},
//     {id: 2, title: 'Forest song', author: 'Lesya Ukrainka', 'price': 399.9, available: false},
//     {id: 3, title: 'Dead zone', author: 'Steven King', 'price': 499.9, available: true},
//     {id: 4, title: '1984', author: 'George Orwell', 'price': 349.9, available: false}    
// ]

// console.log(books);
// books.push({id: 5, title: 'Mumi trolles', author: 'Tuve Yansonn', price: 399.9, available: true})

// for (let book of books) {
//     console.log(`${book.title}: ${book.author}`)
// }

// books.forEach(function(book) {
//     console.log(`${book.title}: ${book.author}`)
// })

// let total = books.filter(function(book) {
//     return book.available === true;
// })

// let total = books.filter(book => book.available === true);
// console.log(total);

// let name = books.filter(book => book.price < 400);
// console.log(name);

// let findBooks = books.find(book => book.id === 3);
// console.log(findBooks); 

// let searchUserBook = prompt('Enter the name of the book').toLocaleLowerCase().trim();
// let searchBook = books.find(book => book.title.toLocaleLowerCase() === searchUserBook);
// if (searchBook !== undefined) {
//     alert(searchBook.title);
// }
// else {
//     alert('Book not found')
// }

// let titles = books.map(book => book.title);
// console.log(titles);

// let bookSales = books.map(book => {
//     return {
//         id: book.id,
//         title: book.title,
//         author: book.author,
//         price: Math.round(book.price * 0.9),
//         available: book.available
//     }
// })
// console.log(bookSales);

// let sortedByPrice = books.slice().sort((a, b) => a.price - b.price);
// console.log(sortedByPrice);

//----------------------------------------------------------------------
// |.

let games = [
    {id: 1, title: 'Minecraft', genre: 'sandbox', price: '$29.9', rating: '9.3', available: true},
    {id: 2, title: 'Counter-Strike 2', genre: 'shooter', price: '$14.9', rating: '6.2', available: true},
    {id: 3, title: 'The Witcher 3', genre: 'RPG', price: '$39.9', rating: '9.3', available: false},
    {id: 4, title: 'Portal 2', genre: 'puzzle', price: '$9.9', rating: '7.5', available: true},
    {id: 5, title: 'Elden Ring', genre: 'action-Rpg', price: '$59.9', rating: '9.6', available: false},
    {id: 6, title: 'Red Dead Redemption 2', genre: 'action-adventure', price: '$59.9', rating: '9.7', available: false}
]

// ||.

// 1.
// for (let game of games) {
//     console.log(`${game.title}`);
// }

// 2.
// let gamesLength = games.length;
// console.log(gamesLength);

// 3.
// let newGameTitle = prompt('Game name:');
// let newGameGenre = prompt('Game genre:');
// let newGamePrice = prompt('Game price:');
// let newGameRating = prompt('Game rating:');
// let newGameAvailable = prompt('Is the game available (true/false):');

// let newGame = {
//     id: games.length + 1, newGameTitle, newGameGenre, newGamePrice, newGameRating, newGameAvailable
// };

// games.push(newGame);

// 4.
// let ifDelete = confirm('Wanna delete last game');

// if (ifDelete) {
//     games.pop();
// }

// console.log(games);

// 5.
// let userGame = prompt('Enter a game title to find');
// let findGame = games.find(game => game.title == userGame);

// if (findGame) {
//     console.log(findGame);
// }
// else {
//     console.log('Game not found');
// }

// 6.
// let userPrice = +prompt('Enter a price');

// let cheapGames = games.filter(game => game.price.replace('$', '') <= userPrice); // чесно скажу функцію replace подивився в інтернеті, бо значення видавало null, але код писав сам

// console.log(cheapGames);

// 7.
// let highRatingGames = games.filter(game => game.rating > 8.0);

// console.log(highRatingGames);

// 8.
// let gamesTitles = games.map(game => game.title);

// console.log(gamesTitles);

// 9.
// let discountGames = games.map(game => game.price.replace('$', '') * 0.85);      

// console.log(discountGames);

// 10.
// let sortedGames = games.slice().sort((a, b) => {
//     let sa = a.price.replace('$', '');
//     let sb = b.price.replace('$', '');
//     return sa - sb;
// });

// console.log(sortedGames);

// |||.
const userName = prompt('Enter your name');
let nameLength100;

if (isNaN(Number(userName))) {
    nameLength100 = userName.length * 100;
    alert(`Budget: $${nameLength100}`);
}
else {
    alert('Enter a name');
}

let availableGames = games.filter(game => +game.price.replace('$', '') <= nameLength100);

availableGames.forEach(game => alert(`${game.title}: ${game.price}`));

let gamesCost = 0;

for (let game of availableGames) {
    gamesCost += +game.price.replace('$', '');
}

if (gamesCost > nameLength100) {
    alert('You don\'t have enough money :/');
}
else {
    alert(`Money left: $${nameLength100 - gamesCost}`);
}