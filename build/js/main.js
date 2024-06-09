"use strict";
const sum = (a, b) => a + b;
console.log(sum(1, 2));
const arr = ["Ajay", "Aman", "vijay"];
const numArray = [1, 5, 6, 7];
const aTuple = ["Ajay", false, 21];
console.log(`${arr},\n ${numArray}, \n ${aTuple}`);
//Objects
let myObj = {
    Name: "Ajay",
    Age: 21,
    hasJob: false,
    add: (a, b) => a + b,
    anArray: [1, 2, 3, 4, 5],
};
console.log(typeof myObj);
let evh = {
    Name: "Eddie",
    Age: 21,
    active: true,
    albums: [1984, "interviews", 5150, "The Killers"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.Name}`;
};
console.log(greetGuitarist(evh));
;
const Swift = {
    Name: "Taylor Swift",
    active: true,
    sing: () => console.log("Lavender Haze"),
    albums: [1984, "interviews", 5150, "The Killers"],
};
const greetSinger = (singer) => {
    singer.sing();
    return `Hello ${singer.Name}`;
};
console.log(greetSinger(Swift));
//Enums
var grade;
(function (grade) {
    grade[grade["U"] = 0] = "U";
    grade[grade["D"] = 2] = "D";
    grade[grade["C"] = 3] = "C";
    grade[grade["B"] = 4] = "B";
    grade[grade["A"] = 5] = "A";
})(grade || (grade = {}));
;
console.log(grade.A);
const arr1 = ["Ajay", 21, "vijay"];
//literal Types
let userNames;
userNames = "Ajay";
/**
 * interface mathFunctions{
 * (a: number,
 * b: number): number
 * } //Similar to above
 *
 * @param a
 * @param b
 * @returns
 */
const multiply = (a, b) => a * b;
const subtract = (x, y) => x - y;
console.log(multiply(2, 3));
console.log(subtract(21, 3));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(`${addAll(1, 2)}, ${sumAll(1, 2, 3)}, ${sumAll(1, 2)}, ${addAll(11, 25, 233)}`);
//Rest Parameters
const total = (...numbers) => {
    return numbers.reduce((a, b) => a + b);
};
console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30));
//never types
// const createError = (message: string): never =>{
//     throw new Error(message);
// };
// console.log(`${createError("An Error Occured created by You")}`);
const numOrStr = (a) => {
    if (typeof a === "string") {
        return "string";
    }
    if (typeof a === "number") {
        return "number";
    }
    return createError("This Should Never be happening");
};
console.log(`${numOrStr(1)}, ${numOrStr("1")}, ${numOrStr("")}`);
function createError(arg0) {
    throw new Error("Function not implemented.");
}
//converts to more or less Specific;
let a = "hello";
let b = a; // less Specific
let c = a; // More Specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    return c === 'add' ? a + b : `${a} ${b}`;
};
console.log(`${addOrConcat(1, 2, 'add')}, ${addOrConcat(1, 2, 'concat')}`);
let result = addOrConcat(2, 2, 'concat');
console.log(result);
