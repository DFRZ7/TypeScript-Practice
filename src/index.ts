//console.log("Hello World")
let age: number = 20;
if (age < 40) {
    age += 10;
}
console.log(age)

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

let level; //Type Any, represent any kind of value.

level = 1;
level = "a"; //Best practice avoid using the any type.

function render(document: string) {
    console.log(document)
}

let numbers = [1, 2, 3];
let numbersTwo: number[] = [1, 2, 3];
let names: string[] = ["David", "Florez"]

numbers.forEach(n => console.log(n))


//Tuples, fixed lenght array. Restrict to 2 values.

let user: [number, string] = [1, "Mosh"]

user.push(1);

//Enums

// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
const enum Size { Small = 1, Medium, Large};
//enum Size { Small = "s", Medium = "m", Large = "l"};

let mySize: Size = Size.Medium;
console.log(mySize)

// : number means the return type
// Always properly anotate your options and return types.

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022){
        return income * 1.2;
    } else {
    return income * 1.3
    }
}

console.log(calculateTax(10_000))

// //Object
// let employee: {
//  id: number
//  name?: string //Optional while initializing, conceptualy makes sense.
// }= { id: 1, name: ""};
// employee.name = "Mosh"

//Object

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { id: 1, name: "David", retire: (date: Date) => {console.log(date)}};

//Dry, do not repeat yourself.

//Union type.
function kgToLbs(weight: number | string) {
    //Narrowing technique.
    if (typeof weight === "number") {
        return weight * 2.2
    } else { 
        return parseInt(weight) * 2.2
    }
    }

kgToLbs(10)
kgToLbs("10kg")

//Intersection

let weight: number & string //Represents a number and a string at a time.

type Draggable = {
    drag: () => void
}

type Rezizable = {
    resize: () => void
}

type UIWwidget = Draggable & Rezizable;

let textBox: UIWwidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types // Limit the numbers, exact or specific value.

type Quantity = 50 | 100

let quantity: Quantity = 100;

//Nullebla Types, strict in regards to null or undefined values.

function greet(name: string | null | undefined) {
    if (name)
    console.log(name.toUpperCase())
    else
    console.log("Hola!")
}

greet(null)

///Null checks

type Customer = {
    birthDay?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthDay: new Date()}
}

let customer = getCustomer(1)
//Optiona/ property access, when customer could be null or undefined.
console.log(customer?.birthDay?.getFullYear()) //Will execute only if not null or undefined.

//Optional element access operator
//customers?.[0]

let log: any = null;
log?.("a")