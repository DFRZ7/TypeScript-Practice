"use strict";
let age = 20;
if (age < 40) {
    age += 10;
}
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbersTwo = [1, 2, 3];
let names = ["David", "Florez"];
numbers.forEach(n => console.log(n));
let user = [1, "Mosh"];
user.push(1);
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(10000));
let employee = { id: 1, name: "David", retire: (date) => { console.log(date); } };
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map