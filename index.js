"use strict";
// 1- Write a program that checks if the given year is leap year or not.
let leapyear = 5664;
if (leapyear % 4) {
    console.log("The given year is a leap year");
}
else {
    console.log("The given year is not leap year");
}
//  2- Write a program that calculates the percentage.
function calcPercentage(obtainedmarks, totalnumbers) {
    var result = obtainedmarks / totalnumbers * 100;
    console.log(result);
}
calcPercentage(760, 1100);
calcPercentage(798, 1100);
calcPercentage(1045, 1100);
calcPercentage(1065, 1100);
// 3- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child.  If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
function userage(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    }
    else if (age >= 13 && age <= 19)
        console.log("Teenage");
    else {
        console.log("Adult");
    }
}
userage(20);
// 4- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function toTemperature(_temp) {
    //  var temp:number = 32;
    var tempF = _temp * 9 / 5 + 32;
    console.log(tempF);
}
toTemperature(67);
toTemperature(77);
toTemperature(56);
toTemperature(36);
// 5- Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
function checkDivisibilty(num1) {
    if (num1 % 3 == 0) {
        console.log("The Given number id divisible by 3");
    }
    else {
        console.log("THe Given number is not divisible by 3");
    }
    if (num1 % 5 == 0) {
        console.log("The Given number is divisible by 5");
    }
    else {
        console.log("The Given number is not divisible by 5");
    }
    if (num1 % 3 && num1 % 5 == 0) {
        console.log("The given number is divisible by 3 & 5");
    }
    else {
        console.log("The given number is not divisible by 3 & 5 ");
    }
}
checkDivisibilty(17);
// 6- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price = 1000;
var discount = price * 10 / 100;
var discount2 = price * 5 / 100;
if (price > 100) {
    console.log(`You got 10% discount on  product is ${discount} and new price is = ${price - discount}`);
}
else {
    console.log(`You got 5% discount on product is ${discount} and new price is = ${price - discount2}`);
}
// 7- Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var weather = "spring";
switch (weather) {
    case "cold":
        console.log("we should wear warm clothes");
        break;
    case "warm":
        console.log("we should wear clothes");
    default:
        console.log("Causal dresses");
        break;
}
// 8- Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var day = 1;
if (day == 1) {
    console.log("Monday");
}
if (day == 2) {
    console.log("Tuesday");
}
if (day == 3) {
    console.log("Wednesday");
}
if (day == 4) {
    console.log("Thursday");
}
if (day == 5) {
    console.log("Friday");
}
if (day == 6) {
    console.log("Saturday");
}
if (day == 7) {
    console.log("Sunday");
}
// 9- Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
var unitConsume = 500;
var unitPrice = 27;
var amount = unitConsume * unitPrice;
var tax10 = amount * 10 / 100;
var tax15 = amount * 15 / 100;
var tax25 = amount * 25 / 100;
if (unitConsume <= 100) {
    console.log(`Price of consumption unit ${amount}`);
}
else if (unitConsume > 100 && unitConsume <= 200) {
    console.log(`Price of consumption unit ${unitConsume} is = ${unitConsume * unitPrice + tax10}`);
}
else if (unitConsume > 200 && unitConsume <= 500) {
    console.log(`Price of consumption unit ${unitConsume} is = ${unitConsume * unitPrice + tax15}`);
}
else {
    console.log(`Price of consumption unit ${unitConsume} is = ${unitConsume * unitPrice + tax25}`);
}
// 10- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var getDays = 17;
var convertIntoweeks = Math.floor(getDays / 7);
var convertIntodays = (getDays % 7);
console.log(`${convertIntoweeks} Weeks and ${convertIntodays} Days`);
