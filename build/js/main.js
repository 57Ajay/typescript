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
