
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


