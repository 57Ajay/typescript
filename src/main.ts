
const sum = (a: number, b: number) => a + b;
console.log(sum(1, 2));

const arr: string[] = ["Ajay", "Aman", "vijay"];

const numArray: number[] = [1, 5, 6, 7];

const aTuple: [string, boolean, number] = ["Ajay", false, 21];
console.log(`${arr},\n ${numArray}, \n ${aTuple}`);

//Objects

let myObj: object = {
    Name: "Ajay",
    Age: 21,
    hasJob: false,
    add: (a: number, b: number) => a + b,
    anArray: [1, 2, 3, 4, 5],
};

console.log(typeof myObj);
type Guitarist = {
    Name: string,
    Age?: number,
    active: boolean,
    albums: (string | number)[]
};

let evh: Guitarist = {
    Name: "Eddie",
    Age: 21,
    active: true,
    albums: [1984, "interviews", 5150, "The Killers"],
};

const greetGuitarist = (guitarist: Guitarist) =>{
    return `Hello ${guitarist.Name}`
};
console.log(greetGuitarist(evh));

interface Singer{
    Name: string,
    active: boolean,
    sing: () => void,
    albums: (string | number)[]
};

const Swift: Singer = {
    Name: "Taylor Swift",
    active: true,
    sing: () => console.log("Lavender Haze"),
    albums: [1984, "interviews", 5150, "The Killers"],
}
const greetSinger = (singer: Singer) =>{
    singer.sing()
    return `Hello ${singer.Name}`
};
console.log(greetSinger(Swift));

//Enums

enum grade {
    U,
    D = 2,//others will adapt from 3
    C,
    B,
    A
};
console.log(grade.A)

//Type Aliases

type stringOrNUmber = string | number;
type stringOrNUmberArray = stringOrNUmber[];

const arr1: stringOrNUmberArray = ["Ajay", 21, "vijay"];

//literal Types

let userNames : "Ajay" | "Aman" | "Sekhar";
userNames = "Ajay";

//functions

type mathFunctions = (a: number, b: number)=> number;
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
const multiply: mathFunctions = (a, b) => a * b;
const subtract: mathFunctions = (x, y)=> x - y;

console.log(multiply(2, 3));
console.log(subtract(21, 3));

//Optional Parameters

const addAll = (a: number, b: number, c?: number): number=>{
    if (typeof c !== "undefined"){
        return a + b + c;
    }return a+b
}
const sumAll = (a: number, b: number, c: number=2): number=>{
    return a+b+c
}

console.log(`${addAll(1, 2)}, ${sumAll(1, 2, 3)}, ${sumAll(1, 2)}, ${addAll(11, 25, 233)}`);

//Rest Parameters

const total = (...numbers: number[]): number =>{
    return numbers.reduce((a, b) => a + b)
}
console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30));

//never types

// const createError = (message: string): never =>{
//     throw new Error(message);
// };

// console.log(`${createError("An Error Occured created by You")}`);

const numOrStr = (a: number | string): string =>{
    if(typeof a === "string"){
        return "string"
    }if(typeof a === "number"){
        return "number"
    }return createError("This Should Never be happening");
};

console.log(`${numOrStr(1)}, ${numOrStr("1")}, ${numOrStr("")}`);

function createError(arg0: string): string {
    throw new Error("Function not implemented.");
}

// Type Assertions

type one = string;
type two = string | number;
type three = 'hello';

//converts to more or less Specific;

let a: one = "hello";
let b = a as two;// less Specific
let c = a as three;// More Specific

let d = <one> "world";
let e = <string> "world";


const addOrConcat = (a: number, b: number, c: 'add'| 'concat'): number | string =>{
    return c === 'add' ? a + b : `${a} ${b}`;
};

console.log(`${addOrConcat(1, 2, 'add')}, ${addOrConcat(1, 2, 'concat')}`);

let result : string = addOrConcat(2, 2, 'concat') as string;

console.log(result);
