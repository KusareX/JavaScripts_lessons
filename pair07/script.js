// function showMessage() {
//     console.log('Hello World!');
// }

// showMessage();

// function showProduct(name, price='unavailable') { // - параметр
//     console.log(`Product ${name}: ${price} UAH`);
// }

// showProduct('meat', 300); // - аргумент

// function calculate(price, count) {
//     let totalPrice = price * count;
//     return totalPrice
// }

// console.log(calculate(1000, 5));

// function discount(totalPrice) {
//     if (totalPrice >= 5000) {
//         totalPrice *= 0.9;
//         return totalPrice;
//     }
//     else {
//         return 0;
//     }
// }

// let discount1 = +prompt('Enter a number');

// console.log(discount(discount1));

// function getProductTotal(price, count) {
//     return price * count;
// }

// function getDiscount(totalPrice) {
//     if (totalPrice >= 10000) {
//         return totalPrice = 15;
//     }
//     else if (totalPrice >= 5000){
//         return totalPrice = 10;
//     }
//     else if (totalPrice >= 2000) {
//         return totalPrice = 0.15;
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(totalPrice, percent) {
//     return totalPrice * percent;
// }

// function getFinalPrice(totalPrice, discount) {
//     return totalPrice - discount;
// }

// let productName = prompt('Enter product name');
// let productPrice = +prompt('Enter product price');
// let productCount = +prompt('Enter product count');

// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);

// console.log(`Product: ${productName}`);
// console.log(`Price: ${productPrice}`);
// console.log(`Amount: ${productCount}`);
// console.log(`Sum: ${productTotal}`);
// console.log(`Discount: ${discout}`);
// console.log(`Sum of discount: ${productDiscountValue}`);
// console.log(`To pay: ${productFinalPrice} UAH`);

// -------------------------------------------------------------

// програма яка буде рахувати скільки обійдеться поїздка на машині в івнше місце
// -стартове місто
// -кінцеве місто
// -відстань в км
// -розхід пального л/100 км
// -вартість за 1 л пального в грн
// -вартість за 1 км в грн
// -грошей з міста а ло міста б потрібно н грошей

// function calculateTripCost(distance, fuelConsumption, fuelPrice) {
//     let fuelNeeded = distance * fuelConsumption / 100;
//     return fuelNeeded * fuelPrice;
// }

// let startCity = prompt('Enter the city you are coming from');
// let endCity = prompt('Enter the city you are arriving in');
// let distance = +prompt('Enter the distance in kilometres');
// let fuelConsumption = +prompt('Enter fuel consumption (L/100km)');
// let fuelPrice = +prompt('Enter fuel price per litre (UAH)');

// let cost = calculateTripCost(distance, fuelConsumption, fuelPrice);
// let costPerKm = cost / distance;
// let fuelNeeded = distance * fuelConsumption / 100;

// console.log(`Route: ${startCity} → ${endCity}`);
// console.log(`Distance: ${distance} km`);
// console.log(`Fuel needed: ${fuelNeeded} L`);
// console.log(`Total cost: ${cost} UAH`);
// console.log(`Cost per km: ${costPerKm} UAH`);